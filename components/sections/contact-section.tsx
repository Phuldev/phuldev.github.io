"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"
import { contactInfo } from "@/lib/contact-data"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const botToken = "AAHNQUUk8Ic77HCK5H-AJeCSQXNn6imD_wQ"
  const chatId = "7750742185"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const text = `
New Contact Message:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `

    try {
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        console.error("Failed to send message", await res.json())
      }
    } catch (error) {
      console.error("Telegram error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card>
            <CardContent className="p-6 space-y-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="flex min-h-[120px] w-full rounded-md border px-3 py-2 text-sm"
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {success && (
                  <p className="text-green-600 text-sm pt-2">Message sent successfully via Telegram!</p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Right Column with Contact Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">Feel free to reach out through any of these channels.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Linkedin className="h-5 w-5 mt-0.5" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-muted-foreground">{contactInfo.linkedin}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Github className="h-5 w-5 mt-0.5" />
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-muted-foreground">{contactInfo.github}</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <div className="space-y-2">
                <p>Currently available for:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {contactInfo.availability.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const result = await res.json()
        setError("Failed to send message. Try again later.")
        console.error(result.error)
      }
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project or opportunity? Let’s connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                  <input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 py-2 border rounded-md text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                </div>
                <Button className="w-full" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {success && <p className="text-green-600 text-sm">Message sent successfully!</p>}
                {error && <p className="text-red-600 text-sm">{error}</p>}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info (optional) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">I’ll get back to you as soon as possible.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">you@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin className="h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-muted-foreground">linkedin.com/in/yourprofile</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Github className="h-5 w-5 mt-1" />
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-muted-foreground">github.com/yourusername</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

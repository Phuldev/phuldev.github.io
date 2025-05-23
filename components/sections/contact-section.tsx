import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"
import { contactInfo } from "@/lib/contact-data"

export default function ContactSection() {
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
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
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

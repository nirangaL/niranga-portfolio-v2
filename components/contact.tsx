"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:nirangawh@hotmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    nirangawh@hotmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href="tel:+94777645060"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 777 645 060
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="font-semibold">LinkedIn</h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="font-semibold">GitHub</h3>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View my work
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center pt-8">
            <Button asChild size="lg" className="group">
              <a href="mailto:nirangawh@hotmail.com">
                Send Me an Email
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Niranga Lakshan. All rights reserved.</p>
            <p>Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

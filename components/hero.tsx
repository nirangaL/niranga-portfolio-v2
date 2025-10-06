"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm">Hi, my name is</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">Niranga Lakshan</h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground">Software Engineer</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Passionate about developing web applications and backend systems. Skilled at writing clear, concise code
              that is easy to maintain and troubleshoot.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <a href="#contact">
                  Get In Touch
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:nirangawh@hotmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div
            className={`hidden lg:block ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-lg p-8 backdrop-blur-sm">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex gap-2">
                    <span className="text-green-400">const</span>
                    <span className="text-blue-400">developer</span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-foreground">{"{"}</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    <div>
                      <span className="text-accent">name:</span>{" "}
                      <span className="text-green-400">&quot;Niranga Lakshan&quot;</span>,
                    </div>
                    <div>
                      <span className="text-accent">experience:</span>{" "}
                      <span className="text-green-400">&quot;5+ years&quot;</span>,
                    </div>
                    <div>
                      <span className="text-accent">location:</span>{" "}
                      <span className="text-green-400">&quot;Sri Lanka&quot;</span>,
                    </div>
                    <div>
                      <span className="text-accent">skills:</span> <span className="text-foreground">[</span>
                      <div className="pl-4 space-y-1">
                        <div className="text-green-400">&quot;Full Stack Development&quot;,</div>
                        <div className="text-green-400">&quot;Backend Systems&quot;,</div>
                        <div className="text-green-400">&quot;Cloud Architecture&quot;</div>
                      </div>
                      <span className="text-foreground">]</span>
                    </div>
                  </div>
                  <div className="text-foreground">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

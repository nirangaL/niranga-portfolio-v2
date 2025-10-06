"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

const experiences = [
  {
    company: "Softcodeit Solutions (Pvt) Ltd",
    role: "Software Engineer",
    period: "Feb 2025 - Present",
    description:
      "Design and develop microservices-based systems using NestJS, PostgreSQL, and React. Integrated AWS Cognito for authentication and conducted performance testing.",
    highlights: [
      "Built microservices backend with NestJS, PostgreSQL, TypeORM, RabbitMQ",
      "Developed responsive frontend with React, Next.js, Redux, Tailwind",
      "Integrated AWS Cognito and CASL for authorization",
      "Conducted performance testing using k6",
    ],
  },
  {
    company: "Orel IT",
    role: "Software Engineer",
    period: "Dec 2021 - Feb 2025",
    description:
      "Developed multiple full-stack applications including educational platforms and business management systems.",
    highlights: [
      "Built interactive digital education platform with NestJS and MongoDB",
      "Deployed on AWS with VPC, EC2, S3, and CloudFront",
      "Implemented CI/CD using AWS CodePipeline and CodeDeploy",
      "Integrated Stripe payments and DocuSign for document signing",
    ],
  },
  {
    company: "Original Apparel (Pvt) Ltd",
    role: "IT Executive",
    period: "Aug 2018 - Nov 2021",
    description: "Developed real-time production monitoring system and provided comprehensive IT support.",
    highlights: [
      "Built production monitoring system with PHP, CodeIgniter, MySQL",
      "Implemented WebSocket for real-time updates",
      "Managed Windows AD servers and G Suite accounts",
      "Provided IT support for computers, networks, and firewalls",
    ],
  },
  {
    company: "QB Lanka (Pvt) Ltd",
    role: "Trainee PHP Developer",
    period: "Jan 2018 - Jul 2018",
    description: "Developed cloud ERP solution for small and medium companies.",
    highlights: [
      "Built web application using PHP, CodeIgniter, MySQL",
      "Implemented financial and operational modules",
    ],
  },
]

export function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold">Work Experience</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-pretty">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

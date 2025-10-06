"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ProjectDialog } from "@/components/project-dialog"
import {
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiAmazonwebservices,
  SiAngular,
  SiRedis,
  SiPhp,
  SiMysql,
  SiLaravel,
  SiFlutter,
  SiFirebase,
  SiPrisma,
} from "react-icons/si"

export interface Project {
  title: string
  company: string
  period: string
  description: string
  details: string[]
  technologies: Array<{ name: string; icon: any; color: string }>
  category: "professional" | "freelance"
}

const projects: Project[] = [
  {
    title: "GoldBond",
    company: "Softcodeit Solutions",
    period: "2025",
    description: "A web solution to manage Container Storage and Cargo Transport.",
    details: [
      "Design and develop a microservices-based monorepo backend system using NestJS, PostgreSQL, TypeORM, RabbitMQ and TurboRepo",
      "Develop the responsive frontend with React, Next.js, Redux, Tailwind and Shadcn",
      "Integrated AWS Cognito for authentication and CASL for policy-based authorization",
      "Conducted performance testing using k6",
      "Leveraged claude AI agent to streamlines development process",
    ],
    technologies: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#6B7280" }, // Updated Next.js icon color to gray for visibility in both themes
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    ],
    category: "professional",
  },
  {
    title: "Interactive Digital Education Adventure",
    company: "Orel IT",
    period: "2021-2025",
    description: "Enabling interactive lessons and activities for students to learn Arduino programming.",
    details: [
      "Designed and developed modular-based backend system using NestJS, MongoDB, and Google Blockly",
      "Deployed on AWS utilizing VPC, EC2, S3 and Cloud Front",
      "Implemented the CI/CD using AWS CodePipeline, CodeBuild and CodeDeploy services",
      "Created interactive programming environment for students",
    ],
    technologies: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    ],
    category: "professional",
  },
  {
    title: "Ocean Flow",
    company: "Orel IT",
    period: "2021-2025",
    description: "Optimizing contracting workflows for boat brokers and streamlining documentation.",
    details: [
      "Designed and Developed modular-based backend systems using NestJS, PostgreSQL, TypeORM and Redis",
      "Developed the responsive frontends with Angular, NGXS, and PrimeNg",
      "Integrated Stripe for payment processing and DocuSign for online document signing",
      "Streamlined the closing documentation process for boat brokers",
    ],
    technologies: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
    category: "professional",
  },
  {
    title: "Impact Housing",
    company: "Orel IT",
    period: "2021-2025",
    description: "Multi-tenant platform for student progress tracking and personalized plans.",
    details: [
      "Developed clean architecture backend systems using NestJS, PostgreSQL, and TypeORM",
      "Developed the responsive frontends with Angular, NGXS, and PrimeNg",
      "Admins create personalized plans for student groups",
      "Students track their progress via dedicated portal",
    ],
    technologies: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
    ],
    category: "professional",
  },
  {
    title: "ProductM",
    company: "Original Apparel",
    period: "2018-2021",
    description: "Real-time production monitoring system optimizing production tracking and reporting.",
    details: [
      "Developed a monolithic web application using PHP, CodeIgniter, MySql, jQuery and Bootstrap",
      "Used WebSocket to display real time production update on the dashboards",
      "Optimized production tracking and reporting processes",
      "Improved operational efficiency across production lines",
    ],
    technologies: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    category: "professional",
  },
  {
    title: "MIS ERP Solution",
    company: "QB Lanka",
    period: "2018",
    description: "Cloud ERP solution for small and medium companies with integrated modules.",
    details: [
      "Developed a web application using PHP, CodeIgniter, MySql and Bootstrap",
      "Enhanced business management with integrated financial and operational modules",
      "Provided comprehensive solution for SME business operations",
    ],
    technologies: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    category: "professional",
  },
  {
    title: "anybanq.lk",
    company: "Freelance",
    period: "Personal Project",
    description: "Full-stack web application built with Laravel framework.",
    details: [
      "Developed using PHP, Laravel, jQuery, MySql, and Bootstrap",
      "Full-stack development from concept to deployment",
      "Implemented modern web development practices",
    ],
    technologies: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    category: "freelance",
  },
  {
    title: "CashFlow Mobile App",
    company: "Personal Project",
    period: "Personal Project",
    description: "Mobile application for financial tracking with clean architecture.",
    details: [
      "Built with Flutter using MVVM architecture pattern",
      "Implemented Provider for state management",
      "Integrated Firebase for backend services",
      "Clean and maintainable codebase following best practices",
    ],
    technologies: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
    category: "freelance",
  },
  {
    title: "techihire.com",
    company: "Personal Project",
    period: "Personal Project",
    description: "Backend system for tech hiring platform.",
    details: [
      "Developed backend using NestJS, PostgreSQL, and Prisma ORM",
      "Implemented modern backend architecture patterns",
      "RESTful API design and implementation",
    ],
    technologies: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
    category: "freelance",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
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

  const professionalProjects = projects.filter((p) => p.category === "professional")
  const freelanceProjects = projects.filter((p) => p.category === "freelance")

  return (
    <>
      <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Professional Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {professionalProjects.map((project, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1 flex-1">
                            <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                              {project.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{project.company}</p>
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-md text-xs font-medium"
                            >
                              <tech.icon className="w-3.5 h-3.5" style={{ color: tech.color }} />
                              <span>{tech.name}</span>
                            </div>
                          ))}
                          {project.technologies.length > 4 && (
                            <div className="flex items-center px-3 py-1.5 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                              +{project.technologies.length - 4} more
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Freelance & Personal Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {freelanceProjects.map((project, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                      style={{ animationDelay: `${(professionalProjects.length + index) * 0.1}s` }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1 flex-1">
                            <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                              {project.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{project.period}</p>
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-md text-xs font-medium"
                            >
                              <tech.icon className="w-3.5 h-3.5" style={{ color: tech.color }} />
                              <span>{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

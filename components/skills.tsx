"use client"

import { useEffect, useRef, useState } from "react"
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiDart,
  SiNodedotjs,
  SiNestjs,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiLaravel,
  SiFlutter,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiAmazonwebservices,
  SiDocker,
  SiGithubactions,
  SiJira,
  SiTrello,
  SiGit,
  SiGithub,
  SiBitbucket,
} from "react-icons/si"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#6B7280" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#6B7280" },
      { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
      { name: "JIRA", icon: SiJira, color: "#0052CC" },
      { name: "Trello", icon: SiTrello, color: "#0052CC" },
    ],
  },
]

const softSkills = [
  "Effective Communication",
  "Adaptability & Flexibility",
  "Focus on Quality",
  "Team Collaboration",
  "Problem Solving",
  "Time Management",
]

export function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="grid gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-6 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted transition-all duration-300 group cursor-pointer"
                    >
                      <skill.icon
                        className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

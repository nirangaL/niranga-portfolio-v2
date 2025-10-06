"use client";

import { useEffect, useRef, useState } from "react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`space-y-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              Passionate Software Engineer with 5+ years of experience in
              developing web applications and backend systems. Skilled at
              writing clear, concise code that is easy to maintain and
              troubleshoot.
            </p>
            <p className="text-pretty">
              Experienced in working with both small and large teams across
              multiple projects and companies. Able to work independently of
              remote locations or in office environments as needed by the
              company.
            </p>
            <p className="text-pretty">
              I specialize in building scalable microservices architectures,
              responsive frontend applications, and implementing modern DevOps
              practices. My approach combines technical excellence with
              effective communication and a strong focus on code quality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">BSc (Hons) Computing</p>
                  <p className="text-sm text-muted-foreground">
                    Wrexham University, UK
                  </p>
                </div>
                <div>
                  <p className="font-medium">Higher Diploma in IT</p>
                  <p className="text-sm text-muted-foreground">
                    SLIATE, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">
                Certifications
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Kore.ai XO Platform</p>
                  <p className="text-sm text-muted-foreground">
                    Basic & Advanced (2024)
                  </p>
                </div>
                <div>
                  <p className="font-medium">MCSA 70-740</p>
                  <p className="text-sm text-muted-foreground">
                    Studied the content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

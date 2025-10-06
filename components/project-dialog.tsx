"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Project } from "@/components/projects"

interface ProjectDialogProps {
  project: Project | null
  onClose: () => void
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary pr-8">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-muted-foreground">{project.company}</span>
              <span className="text-muted-foreground">{project.period}</span>
            </div>
            <p className="text-muted-foreground text-pretty">{project.description}</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Key Highlights</h4>
            <ul className="space-y-2">
              {project.details.map((detail, index) => (
                <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary mt-1 flex-shrink-0">▹</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Technologies Used</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/70 transition-colors"
                >
                  <tech.icon className="w-6 h-6 flex-shrink-0" style={{ color: tech.color }} />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

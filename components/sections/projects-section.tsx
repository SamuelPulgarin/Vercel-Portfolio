"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Layers } from "lucide-react"
import SpotlightCard from "@/components/effects/spotlight-card"

const projects = [
  {
    title: "Sistema de Gestion Cenicana",
    description:
      "Aplicacion web escalable para la gestion interna de procesos investigativos en Cenicana. Arquitectura full-stack con API RESTful.",
    tags: ["React.js", "Django", "PostgreSQL", "Docker"],
    link: "#",
    github: "#",
  },
  {
    title: "Plataforma de Anotacion Genomica",
    description:
      "Herramienta para la anotacion e identificacion de genes en genomas de cana de azucar. Integracion con herramientas bioinformaticas.",
    tags: ["Python", "BASH", "Linux", "Bioinformatica"],
    link: "#",
    github: "#",
  },
  {
    title: "Portal Web Responsivo",
    description:
      "Portal corporativo con diseno responsivo optimizado para moviles y tabletas. Implementacion de mejores practicas de UI/UX.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "API REST Modular",
    description:
      "Arquitectura de microservicios con APIs RESTful para la integracion de multiples sistemas back-end con aplicaciones front-end.",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    link: "#",
    github: "#",
  },
  {
    title: "Dashboard de Documentacion",
    description:
      "Sistema de documentacion interna con diagramas UML, mapas de navegacion y procedimientos de despliegue automatizados.",
    tags: ["React.js", "Markdown", "Scrum", "UML"],
    link: "#",
    github: "#",
  },
  {
    title: "Automatizacion con Scripts",
    description:
      "Suite de scripts BASH para automatizar tareas de desarrollo, despliegue y configuracion de entornos de produccion.",
    tags: ["BASH", "Linux", "Docker", "CI/CD"],
    link: "#",
    github: "#",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="proyectos" className="relative z-10 px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-primary mb-2">{"// 04. Portafolio"}</p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <SpotlightCard className="group h-full">
                <div className="flex h-full flex-col p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <Layers className="h-8 w-8 text-primary" />
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label={`GitHub de ${project.title}`}
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.link}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label={`Ver ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Aux. Tecnologia e Informatica",
    company: "Cenicana",
    period: "2024 - Presente",
    description:
      "Desarrollar aplicaciones web escalables y mantenibles utilizando React.js, Django y PostgreSQL. Implementar RESTful APIs para la integracion de sistemas back-end con aplicaciones front-end.",
    tasks: [
      "Implementar principios de diseno responsivo, asegurando la compatibilidad en moviles y tabletas",
      "Dockerizar proyectos para asegurar entornos de desarrollo y produccion consistentes",
      "Escribir y mantener scripts en BASH (Linux) para automatizar tareas",
      "Descargar y configurar herramientas bioinformaticas para la anotacion e identificacion de genes",
      "Colaborar con equipos multidisciplinarios en un entorno agil con Sprint y revisiones de codigo",
      "Documentar aplicaciones web, arquitectura del sistema, diagramas UML y mapas de navegacion",
    ],
  },
  {
    type: "work",
    title: "Desarrollador Web Full-Stack (Practicas)",
    company: "Cenicana",
    period: "2024",
    description:
      "Practicas profesionales desarrollando soluciones web completas para la organizacion, aplicando conocimientos de full-stack con React.js y Django.",
    tasks: [],
  },
  {
    type: "education",
    title: "Tecnologo en Analisis y Desarrollo de Software",
    company: "SENA",
    period: "2022 - 2024",
    description:
      "Formacion integral como analista y desarrollador de software, cubriendo metodologias agiles, bases de datos, desarrollo web y mejores practicas de la industria.",
    tasks: [],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experiencia" className="relative z-10 px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-primary mb-2">{"// 03. Trayectoria"}</p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Experiencia <span className="text-primary">Profesional</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:left-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`relative mb-12 flex flex-col gap-4 pl-16 md:w-1/2 md:pl-0 ${
                i % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12 md:text-left"
              }`}
            >
              {/* Node */}
              <div
                className={`absolute top-2 left-4 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background md:left-auto ${
                  i % 2 === 0 ? "md:right-[-10px]" : "md:left-[-10px]"
                }`}
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              {/* Card */}
              <div className="rounded-xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                <div className={`flex items-center gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.type === "work" ? (
                    <Briefcase className="h-4 w-4 text-primary" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-primary" />
                  )}
                  <span className="font-mono text-xs text-primary">{exp.period}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{exp.title}</h3>
                <p className="text-sm text-primary/80">{exp.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                {exp.tasks.length > 0 && (
                  <ul className={`mt-4 space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

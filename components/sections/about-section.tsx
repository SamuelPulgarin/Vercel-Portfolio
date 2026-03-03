"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, GraduationCap, Briefcase } from "lucide-react"

const stats = [
  { label: "Experiencia", value: "2+", suffix: "anos" },
  { label: "Tecnologias", value: "10+", suffix: "" },
  { label: "Proyectos", value: "15+", suffix: "" },
]

const infoItems = [
  { icon: MapPin, label: "Ubicacion", value: "Candelaria, Valle del Cauca, Colombia" },
  { icon: Phone, label: "Telefono", value: "+57 313 569 8795" },
  { icon: GraduationCap, label: "Educacion", value: "Tecnologo en Analisis y Desarrollo de Software - SENA" },
  { icon: Briefcase, label: "Empresa", value: "Cenicana - Aux. Tecnologia e Informatica" },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre-mi" className="relative z-10 px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-primary mb-2">{"// 01. Sobre Mi"}</p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Quien <span className="text-primary">Soy</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="leading-relaxed text-muted-foreground">
              Desarrollador de software con experiencia en la creacion e implementacion de 
              soluciones innovadoras para aplicaciones web. Experto en JavaScript y en frameworks 
              como React.js y Next.js. Poseo conocimientos adicionales en Vue.js, Node.js, 
              Laravel y Django.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Tambien tengo experiencia con bases de datos relacionales SQL. Apasionado por 
              el codigo limpio, el desarrollo agil bajo metodologias Scrum y siempre en busca 
              de nuevos desafios. Hablo espanol de forma nativa e ingles a nivel A2.
            </p>

            {/* Stats */}
            <div className="mt-10 flex gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}{stat.suffix && ` ${stat.suffix}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {infoItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

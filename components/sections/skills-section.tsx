"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const technologies = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
]

const softSkills = [
  "Trabajo en equipo",
  "Resolucion de problemas",
  "Comunicacion efectiva",
  "Liderazgo",
  "Responsabilidad",
  "Gestion de proyectos",
  "Aprendizaje continuo",
  "Metodologias Agiles / Scrum",
]

function LogoItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center gap-3 mx-8 flex-shrink-0">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-secondary/50 transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:bg-secondary">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon}
          alt={name}
          width={36}
          height={36}
          className="h-9 w-9"
          loading="lazy"
          style={{ filter: name === "Next.js" || name === "Django" ? "invert(1)" : "none" }}
        />
      </div>
      <span className="text-xs text-muted-foreground whitespace-nowrap font-mono">{name}</span>
    </div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const doubled = [...technologies, ...technologies]

  return (
    <section id="habilidades" className="relative z-10 py-32 overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-primary mb-2">{"// 02. Habilidades"}</p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Tech <span className="text-glow text-primary">Stack</span>
          </h2>
        </motion.div>
      </div>

      {/* Logo Loop Row 1 - React Bits style infinite scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative"
      >
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-logo-scroll" style={{ width: "max-content" }}>
          {doubled.map((tech, i) => (
            <LogoItem key={`${tech.name}-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </motion.div>

      {/* Logo Loop Row 2 - reversed direction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative mt-8"
      >
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
        <div
          className="flex animate-logo-scroll"
          style={{ width: "max-content", animationDirection: "reverse", animationDuration: "30s" }}
        >
          {[...doubled].reverse().map((tech, i) => (
            <LogoItem key={`rev-${tech.name}-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </motion.div>

      {/* Soft Skills */}
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20"
        >
          <p className="font-mono text-sm text-primary mb-6 text-center">{"// Habilidades Blandas"}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

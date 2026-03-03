"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const ProfileCard = dynamic(() => import("@/components/effects/profile-card"), {
  ssr: false,
})

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Profile Card - React Bits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <ProfileCard
            avatarUrl="/images/profile.jpg"
            name="Samuel Pulgarin"
            title="Software Developer"
            handle="samuelpulgarin"
            status="Disponible"
            contactText="Contactar"
            showUserInfo={true}
            onContactClick={scrollToContact}
            behindGlowColor="rgba(97, 218, 251, 0.5)"
            innerGradient="linear-gradient(145deg, #0a1628cc 0%, #61dafb22 100%)"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 font-mono text-sm text-primary"
          >
            {"// Hola, soy"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Samuel{" "}
            <span className="text-glow text-primary">Pulgarin</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 text-xl text-muted-foreground md:text-2xl"
          >
            Desarrollador de Software Full-Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground"
          >
            Experto en JavaScript con frameworks como React.js y Next.js.
            Apasionado por el codigo limpio, el desarrollo agil y la creacion
            de soluciones innovadoras para aplicaciones web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow"
            >
              <a href="#contacto">
                <Mail className="mr-2 h-4 w-4" />
                Contactar
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:border-primary hover:text-primary"
            >
              <a href="#proyectos">
                Ver Proyectos
              </a>
            </Button>
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll hacia abajo"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  )
}

"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-primary">{"<SP />"}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Diseñado y desarrollado por Samuel Pulgarin
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:samuelpulgarin37@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Samuel Pulgarin. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

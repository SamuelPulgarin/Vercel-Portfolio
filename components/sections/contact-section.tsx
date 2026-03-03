"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Mail, Phone, MapPin } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "samuelpulgarin37@gmail.com", href: "mailto:samuelpulgarin37@gmail.com" },
  { icon: Phone, label: "Telefono", value: "+57 313 569 8795", href: "tel:+573135698795" },
  { icon: MapPin, label: "Ubicacion", value: "Candelaria, Valle del Cauca", href: "#" },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="relative z-10 px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-primary mb-2">{"// 05. Contacto"}</p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Trabajemos <span className="text-primary">Juntos</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Estoy abierto a nuevas oportunidades y colaboraciones. 
            No dudes en contactarme para discutir tu proximo proyecto.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Decorative code block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-xl border border-border bg-card/30 p-5 font-mono text-xs leading-relaxed"
            >
              <p className="text-muted-foreground">
                <span className="text-primary">const</span>{" "}
                <span className="text-foreground">developer</span> = {"{"}
              </p>
              <p className="pl-4 text-muted-foreground">
                <span className="text-primary">nombre</span>:{" "}
                <span className="text-green-400">{'"Samuel Pulgarin"'}</span>,
              </p>
              <p className="pl-4 text-muted-foreground">
                <span className="text-primary">rol</span>:{" "}
                <span className="text-green-400">{'"Full-Stack Dev"'}</span>,
              </p>
              <p className="pl-4 text-muted-foreground">
                <span className="text-primary">disponible</span>:{" "}
                <span className="text-yellow-400">true</span>,
              </p>
              <p className="text-muted-foreground">{"}"}</p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-xl border border-border bg-card/50 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-sm text-muted-foreground">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="subject" className="text-sm text-muted-foreground">
                  Asunto
                </Label>
                <Input
                  id="subject"
                  placeholder="Asunto del mensaje"
                  className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-sm text-muted-foreground">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  placeholder="Cuentame sobre tu proyecto..."
                  rows={5}
                  className="resize-none border-border bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 box-glow"
                disabled={submitted}
              >
                {submitted ? (
                  "Mensaje Enviado"
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

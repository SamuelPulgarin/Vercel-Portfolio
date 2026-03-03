"use client"

import dynamic from "next/dynamic"
import Navigation from "@/components/sections/navigation"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SkillsSection from "@/components/sections/skills-section"
import ExperienceSection from "@/components/sections/experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/sections/footer"

const SplashCursor = dynamic(() => import("@/components/effects/splash-cursor"), {
  ssr: false,
})
const ClickSpark = dynamic(() => import("@/components/effects/click-spark"), {
  ssr: false,
})
const FloatingLines = dynamic(() => import("@/components/effects/floating-lines"), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      {/* Global Interactive Effects */}
      <SplashCursor />
      <ClickSpark />
      <FloatingLines />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

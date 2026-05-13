import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { PartnersBar } from './components/PartnersBar'
import { ProjectsSection } from './components/ProjectsSection'
import { ServicesSection } from './components/ServicesSection'
import { profile } from './data/profile'

function App() {
  return (
    <div className="min-h-screen bg-[#050a18] font-sans text-white antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersBar />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {profile.fullName} — {profile.title}
      </footer>
    </div>
  )
}

export default App

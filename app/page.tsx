import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FFFFFF' }}>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Certifications />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

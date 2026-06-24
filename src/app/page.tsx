import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Specialist from '../components/Specialist'
import Dentists from '../components/Dentists'
import Results from '../components/Results'
import Insurance from '../components/Insurance'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppWidget from '../components/WhatsAppWidget'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Specialist />
        <Dentists />
        <Results />
        <Insurance />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}

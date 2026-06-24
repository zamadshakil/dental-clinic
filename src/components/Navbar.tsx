'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Dentists', href: '#dentists' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  /* Close mobile menu on Escape key */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileOpen])

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)

    const id = href.replace('#', '')

    const scrollToSection = () => {
      const el = document.getElementById(id)
      if (el) {
        const navHeight = 80
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }

    if (pathname !== '/') {
      router.push('/')
      setTimeout(scrollToSection, 300)
    } else {
      // Delay scroll so mobile menu close animation doesn't block it
      setTimeout(scrollToSection, 350)
    }
  }, [router, pathname])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              if (pathname !== '/') router.push('/')
              else window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 sm:gap-3"
            aria-label="Dallas Dental Care — go to homepage"
          >
            {/* Custom premium SVG logo */}
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
              <path d="M12 6v12M6 12h12"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-primary uppercase">Dallas Dental</span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-accent font-bold uppercase">Care</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-primary hover:text-accent transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:2145550187"
              className="bg-primary text-white px-5 lg:px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <Phone size={14} aria-hidden="true" />
              (214) 555-0187
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-primary hover:bg-slate-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav with backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-16 bg-black/30 z-40"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            {/* Menu panel */}
            <motion.div
              ref={menuRef}
              id="mobile-nav-menu"
              role="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-slate-100 relative z-50"
            >
              <div className="px-4 py-5 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    className="flex items-center text-base font-semibold text-primary hover:text-accent hover:bg-accent/5 transition-colors rounded-xl px-4 py-3.5"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href="tel:2145550187"
                    role="menuitem"
                    className="bg-primary text-white px-6 py-3.5 rounded-xl text-base font-bold flex items-center justify-center gap-2 w-full active:scale-[0.98] transition-transform"
                  >
                    <Phone size={16} aria-hidden="true" />
                    Call (214) 555-0187
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

import { Instagram, Facebook } from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
  { label: 'Our Services', href: '#services' },
  { label: 'Why Choose Us', href: '#about' },
  { label: 'Meet Clinical Experts', href: '#dentists' },
  { label: 'Contact Us', href: '#contact' },
]

const socials = [
  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/', label: 'Follow us on Instagram' },
  { icon: <Facebook size={18} />, href: 'https://www.facebook.com/', label: 'Visit us on Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 sm:pt-16 pb-6 sm:pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              {/* Custom SVG logo */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
                <path d="M12 6v12M6 12h12"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-primary uppercase">Dallas Dental</span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-accent font-bold uppercase">Care</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm text-sm sm:text-base leading-relaxed">
              Dedicated to providing the highest standard of dental care to Dallas families with a personalized, gentle touch. Your oral health and clinical trust are our top priorities.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-bold text-primary mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-500 hover:text-accent transition-colors text-sm sm:text-base py-1 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-primary mb-4 sm:mb-6 text-sm sm:text-base">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white active:scale-95 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Email: <a href="mailto:hello@dallasdentalcare.com" className="text-accent hover:underline">hello@dallasdentalcare.com</a>
            </div>
          </div>
        </div>

        {/* Demo disclaimer warning */}
        <div className="border-t border-slate-100 pt-6 pb-4 text-center">
          <p className="text-xs font-semibold text-slate-400/90 tracking-wide uppercase">
            ⚠️ This website is a demonstration concept.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Dallas Dental Care. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-slate-400 text-xs sm:text-sm font-medium">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors py-1">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors py-1">Terms of Service</Link>
            <span className="hidden sm:inline">1234 Preston Road, Dallas, TX 75230</span>
            <a href="tel:2145550187" className="hover:text-primary transition-colors py-1">(214) 555-0187</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

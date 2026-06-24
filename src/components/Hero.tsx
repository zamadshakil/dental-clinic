'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-16 lg:py-24" aria-label="Welcome to Dallas Dental Care">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="z-10 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              Now Accepting New Patients in Dallas, Texas
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-primary leading-[1.1] mb-4 sm:mb-6">
              Your Smile Deserves The <span className="text-accent">Best</span> Care
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 leading-relaxed max-w-xl">
              Where advanced clinical excellence meets personalized comfort. Bespoke treatments — from dental implants to cosmetic smile transformations — using state-of-the-art technology at Dallas Dental Care.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:shadow-xl transition-all group cursor-pointer text-sm sm:text-base"
              >
                <span>Schedule Your Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:2145550187"
                className="border-2 border-slate-200 text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all text-sm sm:text-base"
              >
                <Phone size={18} className="text-accent" aria-hidden="true" />
                Call (214) 555-0187
              </motion.a>
            </div>

            {/* Trust signals */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-6 border-t border-slate-100 pt-6 sm:pt-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 sm:-space-x-3" aria-hidden="true">
                  {[
                    '/images/p1.webp',
                    '/images/p2.jpg',
                    '/images/p3.jpg',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-3 sm:border-4 border-white object-cover" />
                  ))}
                </div>
                <div>
                  <div className="flex text-accent" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#c5a059" strokeWidth={0} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-500">500+ Happy Patients</p>
                </div>
              </div>
              
              <div className="flex flex-col border-t border-slate-100 sm:border-t-0 sm:border-l sm:pl-6 pt-4 sm:pt-0 gap-1 text-slate-500 text-xs sm:text-sm font-medium">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  10+ Years Experience
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Same-Day Emergency Appointments
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.2 }}
          >
            <div className="absolute -top-12 -right-12 w-48 sm:w-64 h-48 sm:h-64 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-12 -left-12 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-4/3 sm:aspect-4/5">
              {/* Background image */}
              <img
                src="/images/Clinic.jpg"
                alt="Dallas Dental Care — premium dental clinic interior in Dallas, Texas"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              {/* Dark overlay for text readability while keeping clinic visible */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-primary/50 to-primary/40" />

              {/* Text content on top */}
              <div className="relative w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-4 sm:pt-6 pb-24 sm:pb-28 text-center z-10 text-shadow-hero">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center mb-3 sm:mb-4 md:mb-6 border border-accent/40 shadow-lg" aria-hidden="true">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5.5C10.5 4 7.5 4 6 5.5S4 9 5.5 10.5L12 17l6.5-6.5C20 9 20 7 18 5.5S13.5 4 12 5.5z" />
                    <line x1="12" y1="17" x2="12" y2="22" />
                  </svg>
                </div>
                <h3 className="text-white text-lg sm:text-2xl md:text-3xl font-black tracking-tight mb-1 drop-shadow-lg">DALLAS DENTAL</h3>
                <p className="text-accent text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3 md:mb-4 drop-shadow-md">Care</p>
                <div className="w-10 sm:w-12 h-px bg-accent/60 mb-2 sm:mb-3 md:mb-4" aria-hidden="true" />
                <p className="text-white text-[10px] sm:text-xs md:text-sm max-w-xs font-medium drop-shadow-md hidden sm:block">Precision dentistry meets personalized luxury — your comfort is our commitment</p>
              </div>

              {/* Glass overlay at bottom */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 glass-effect p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-white/20 z-20">
                <p className="text-primary font-bold text-xs sm:text-sm md:text-base">Premium Clinic Facility</p>
                <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm">1234 Preston Road, Dallas, TX 75230</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

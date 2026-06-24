'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck, CircleDot, Sun, Sparkles, Smile, Zap, Heart, Layers
} from 'lucide-react'
import type { ReactNode } from 'react'

/* ── Main Services ── */
interface ServiceItem {
  icon: ReactNode
  title: string
  description: string
}

const mainServices: ServiceItem[] = [
  {
    icon: <ShieldCheck size={26} />,
    title: 'General Dentistry',
    description: 'Preventative cleanings, digital x-rays, comprehensive exams, and composite fillings to maintain optimal oral hygiene and detect issues early.',
  },
  {
    icon: <CircleDot size={26} />,
    title: 'Dental Implants',
    description: 'Permanent titanium implant placement and custom crowns to replace missing teeth, fully restoring your natural chewing function and confidence.',
  },
  {
    icon: <Sun size={26} />,
    title: 'Teeth Whitening',
    description: 'Advanced in-office professional whitening systems to dramatically brighten your teeth by several shades in just a single comfortable visit.',
  },
  {
    icon: <Sparkles size={26} />,
    title: 'Veneers',
    description: 'Ultra-thin, hand-crafted porcelain or composite shells bonded to the front of your teeth to correct chips, discoloration, and structural gaps.',
  },
  {
    icon: <Smile size={26} />,
    title: 'Invisalign',
    description: 'Discreet, clear, and removable orthodontic aligners custom-made to straighten your teeth gradually without the discomfort of metal brackets.',
  },
  {
    icon: <Zap size={26} />,
    title: 'Emergency Dental Care',
    description: 'Same-day emergency visits for severe toothaches, chipped teeth, abscesses, or facial swelling. Immediate priority care when you need it most.',
  },
  {
    icon: <Heart size={26} />,
    title: 'Family Dentistry',
    description: 'Gentle, compassionate pediatric and adult dental services tailored for all ages — from toddlers taking their first exam to senior oral health care.',
  },
]

/* ── Featured Specialty Cards ── */
interface SpecialtyItem {
  icon: ReactNode
  title: string
  subtitle: string
  image: string
}

const specialties: SpecialtyItem[] = [
  {
    icon: <CircleDot size={24} />,
    title: 'Dental Implants',
    subtitle: 'Permanent tooth replacement',
    image: '/images/Dental Implants.jpg',
  },
  {
    icon: <Smile size={24} />,
    title: 'Invisalign Aligners',
    subtitle: 'Clear orthodontic solutions',
    image: '/images/Invisalign Treatment.jpg',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Porcelain Veneers',
    subtitle: 'Custom smile makeovers',
    image: '/images/Porcelain Veneers.webp',
  },
  {
    icon: <Zap size={24} />,
    title: 'Emergency Dental Care',
    subtitle: 'Same-day priority relief',
    image: '/images/Root Canal Treatment.webp',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">Our Specialties</span>
          <h2 id="services-heading" className="text-2xl sm:text-4xl lg:text-5xl font-black text-primary mb-3 sm:mb-4">Comprehensive Dental Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-lg">
            Bespoke dental care powered by modern technology and a gentle, patient-first approach. Serving families and professionals in Dallas.
          </p>
        </motion.div>

        {/* ── Featured Specialties ── */}
        <motion.div
          className="text-center mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-black text-primary">Signature Treatments</h3>
          <p className="text-slate-400 mt-1 sm:mt-2 text-sm sm:text-base">Our most requested clinical procedures</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-20" role="list">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              role="listitem"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-3/4 text-white cursor-pointer group"
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={`${item.title} at Dallas Dental Care`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Strong dark overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/20" />

              {/* Content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mb-1.5 sm:mb-3 border border-white/25" aria-hidden="true">
                  {item.icon}
                </div>
                <h4 className="text-xs sm:text-base font-bold leading-tight mb-0.5">{item.title}</h4>
                <p className="text-[10px] sm:text-xs text-white/70 leading-snug">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Main Services Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" role="list">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0, 45, 91, 0.12)' }}
              className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-all group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-white transition-colors" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-primary mb-1.5 sm:mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Heart, Clock, Smile, Award } from 'lucide-react'

const reasons = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'Experienced Team',
    description: 'Dr. Carter and Dr. Mitchell bring over a decade of clinical expertise in restorative, cosmetic, and family dentistry.',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Modern Technology',
    description: 'Equipped with state-of-the-art 3D digital imaging, intraoral cameras, and laser tools for precise, comfortable treatments.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Patient-First Care',
    description: 'We prioritize your comfort. From warm blankets to gentle techniques, we customize care to eliminate dental anxiety.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Flexible Scheduling',
    description: 'Convenient morning and evening hours, plus prioritized same-day emergency appointments for families on the go.',
  },
  {
    icon: <Smile size={28} />,
    title: 'Aesthetic Excellence',
    description: 'From porcelain veneers to clear aligner therapies, we combine medical science with an artistic eye for beautiful smiles.',
  },
  {
    icon: <Award size={28} />,
    title: '5-Star Rated Local Clinic',
    description: 'Trusted by 500+ happy patients in the Dallas area. Committed to maintaining a stellar 5.0 rating on all platforms.',
  },
]

export default function Specialist() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-bg-light" aria-labelledby="specialist-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">Why Choose Us</span>
          <h2 id="specialist-heading" className="text-2xl sm:text-4xl lg:text-5xl font-black text-primary mb-3 sm:mb-4">Why Dallas Dental Care?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-lg">
            We blend cutting-edge dental science with a compassionate, gentle touch to provide a clinical experience that is both premium and comfortable.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              role="listitem"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0, 45, 91, 0.12)' }}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 bg-white hover:bg-white transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 sm:mb-5 group-hover:bg-primary group-hover:text-white transition-colors" aria-hidden="true">
                {reason.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2">{reason.title}</h3>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

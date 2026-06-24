'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Heart } from 'lucide-react'

const dentists = [
  {
    name: 'Dr. Michael Carter',
    role: 'Clinical Director & Implant Specialist',
    education: 'DDS — Columbia University College of Dental Medicine',
    credentials: 'Fellow of the International Congress of Oral Implantologists (ICOI)',
    bio: 'Dr. Carter has over 15 years of experience in restorative dentistry. Specializing in advanced surgical implants and full-mouth reconstructions, he is dedicated to restoring full oral function and smile aesthetics using state-of-the-art guided surgery.',
    image: '/images/dr_michael_carter.png',
  },
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Cosmetic & Family Dentist',
    education: 'DDS — UT Health San Antonio School of Dentistry',
    credentials: 'Member of the American Academy of Cosmetic Dentistry (AACD)',
    bio: 'Dr. Mitchell brings a gentle, creative approach to family and cosmetic care. Her expertise lies in porcelain veneers, digital smile design, and Invisalign clear aligner therapies, helping children and adults achieve healthy, luminous smiles.',
    image: '/images/dr_sarah_mitchell.png',
  },
]

export default function Dentists() {
  return (
    <section id="dentists" className="py-16 sm:py-24 bg-white" aria-labelledby="dentists-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">Meet the Dentists</span>
          <h2 id="dentists-heading" className="text-2xl sm:text-4xl lg:text-5xl font-black text-primary mb-3 sm:mb-4">Dallas Clinical Experts</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-lg">
            Dedicated clinical leaders combining years of Ivy-League and state-tier education with general compassion to care for Dallas families.
          </p>
        </motion.div>

        {/* Dentists Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" role="list">
          {dentists.map((dentist, index) => (
            <motion.div
              key={dentist.name}
              role="listitem"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-slate-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Photo Frame */}
              <div className="relative aspect-4/3 w-full bg-slate-200 overflow-hidden">
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white text-shadow-hero">
                  <h3 className="text-xl sm:text-2xl font-black">{dentist.name}</h3>
                  <p className="text-accent text-xs sm:text-sm font-semibold tracking-wider uppercase mt-0.5">{dentist.role}</p>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Credentials list */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-slate-700 text-xs sm:text-sm">
                      <GraduationCap size={16} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-semibold">{dentist.education}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700 text-xs sm:text-sm">
                      <Award size={16} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{dentist.credentials}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-2 border-t border-slate-200/60">
                    {dentist.bio}
                  </p>
                </div>
                
                {/* Speciality Badge */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-primary">
                  <Heart size={14} className="text-accent" />
                  <span>Dedicated to Gentle Patient Comfort</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

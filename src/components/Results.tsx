'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Quote, Star } from 'lucide-react'

const transformations = [
  {
    title: 'Full Mouth Reconstruction',
    subtitle: 'Restored oral function and aesthetics with state-of-the-art implants.',
    review: 'Dr. Carter transformed my entire smile using implants. The process was completely painless, and the results are stunning!',
    author: 'Mark T., Preston Hollow',
    image: '/images/FullMouthRestorationResized.jpg',
  },
  {
    title: 'Porcelain Veneers',
    subtitle: 'Hand-crafted veneers correcting minor chips, spacing, and discoloration.',
    review: 'I absolutely love my porcelain veneers! Dr. Mitchell is a true artist. She made me feel completely comfortable throughout the treatments.',
    author: 'Amanda R., North Dallas',
    image: '/images/Porcelain Veneers.webp',
  },
  {
    title: 'Invisalign Clear Aligners',
    subtitle: 'Straightened teeth using comfortable, removable custom aligners.',
    review: 'Highly recommend their Invisalign plans! The aligners were easy to manage, and the clinic scheduling was always flexible.',
    author: 'James S., Lakewood',
    image: '/images/Invisalign Treatment.jpg',
  },
]

export default function Results() {
  return (
    <section id="results" className="py-16 sm:py-24 bg-primary text-white overflow-hidden" aria-labelledby="results-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-left">
            <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 block">Smile Gallery & Reviews</span>
            <h2 id="results-heading" className="text-2xl sm:text-4xl font-black mb-2 sm:mb-4">Real Patients, Real Transformations</h2>
            <p className="text-slate-300 max-w-xl text-sm sm:text-lg">
              Discover the life-changing cosmetic smile makeovers and fictional reviews crafted for our patients at Dallas Dental Care.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Dallas Dental Care on Instagram (opens in new tab)"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary active:scale-95 transition-all text-white"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Dallas Dental Care on Facebook (opens in new tab)"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary active:scale-95 transition-all text-white"
            >
              <Facebook size={20} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden"
            >
              {/* Before-after photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5 border-b border-white/10">
                <img
                  src={item.image}
                  alt={`${item.title} at Dallas Dental Care`}
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  Before & After
                </div>
              </div>

              {/* Testimonial card */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-1 text-accent" aria-label="5 stars rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#c5a059" strokeWidth={0} aria-hidden="true" />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote size={32} className="text-white/5 absolute -top-4 -left-2 rotate-180" aria-hidden="true" />
                    <p className="text-sm sm:text-base text-slate-100 italic relative leading-relaxed">
                      "{item.review}"
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="font-bold text-slate-200 text-xs sm:text-sm">{item.author}</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

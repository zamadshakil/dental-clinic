'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do you accept my dental insurance?',
    answer: 'Yes! Dallas Dental Care is in-network with most major PPO dental insurance providers, including Delta Dental, Cigna, MetLife, Aetna, Humana, and BlueCross BlueShield. Our administrative team will handle all billing paperwork and file claims directly on your behalf to maximize your benefits.',
  },
  {
    question: 'How do you handle same-day dental emergencies?',
    answer: 'We reserve priority time slots daily to accommodate same-day emergency dental care for issues like severe toothaches, broken teeth, abscesses, or facial swelling. If you require immediate attention, call us at (214) 555-0187 right away so we can prepare a treatment room for your arrival.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit begins with a thorough preventative review. We perform digital low-radiation x-rays, conduct a detailed physical exam of your teeth and gums, and execute a comfortable ultrasonic scaling cleaning. Dr. Carter or Dr. Mitchell will then review findings and map out any recommended treatments.',
  },
  {
    question: 'What financing plans are available for cosmetic treatments?',
    answer: 'While insurance covers preventative hygiene, elective cosmetic treatments (like porcelain veneers or Invisalign clear aligners) are often out-of-pocket. To ensure premium dental care is accessible, we offer flexible, zero-interest monthly financing plans and accept CareCredit healthcare cards.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">Common Questions</span>
          <h2 id="faq-heading" className="text-2xl sm:text-4xl lg:text-5xl font-black text-primary mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-sm sm:text-lg">
            Find answers to common questions regarding scheduling, dental insurance coverage, billing, and clinical operations.
          </p>
        </motion.div>

        {/* Accordions */}
        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index
            return (
              <motion.div
                key={index}
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-slate-100 rounded-xl sm:rounded-2xl bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-colors overflow-hidden"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-bold text-primary text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-primary shrink-0 shadow-sm"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-500 leading-relaxed pt-1 border-t border-slate-100 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

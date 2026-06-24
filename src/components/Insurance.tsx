'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, FileText, Landmark } from 'lucide-react'

const providers = [
  { name: 'Delta Dental', type: 'PPO Provider', status: 'In-Network' },
  { name: 'Cigna Dental', type: 'PPO Provider', status: 'In-Network' },
  { name: 'MetLife Dental', type: 'PPO Provider', status: 'In-Network' },
  { name: 'Aetna Dental', type: 'PPO Provider', status: 'In-Network' },
  { name: 'BlueCross BlueShield', type: 'PPO Provider', status: 'In-Network' },
  { name: 'Humana Dental', type: 'PPO Provider', status: 'In-Network' },
]

export default function Insurance() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 border-t border-b border-slate-100" aria-labelledby="insurance-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Info Text */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 block">Insurance Friendly</span>
            <h2 id="insurance-heading" className="text-2xl sm:text-4xl font-black text-primary leading-tight mb-4">
              Easy Billing, Direct Claims
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              We maximize your benefits and handle all the paperwork. Dallas Dental Care is in-network with most major PPO insurance providers, filing claims directly on your behalf to guarantee a stress-free experience.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle size={18} className="text-accent shrink-0" />
                <span>Complimentary Benefits Check</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle size={18} className="text-accent shrink-0" />
                <span>Direct Claim Filing & Coordination</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle size={18} className="text-accent shrink-0" />
                <span>Flexible Financing & Copay Plans</span>
              </div>
            </div>
          </motion.div>

          {/* Providers Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {providers.map((provider, index) => (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="bg-white p-4 rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between aspect-video cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary" aria-hidden="true">
                      <Shield size={16} className="text-accent" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 uppercase tracking-wider">
                      {provider.status}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xs sm:text-sm leading-tight mb-0.5">{provider.name}</h4>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-medium">{provider.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Direct Dial Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 p-4 rounded-xl sm:rounded-2xl border border-dashed border-slate-200 bg-white/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
            >
              <div className="text-xs sm:text-sm text-slate-600 font-medium">
                Don't see your insurance provider listed? Let's check it for you.
              </div>
              <a
                href="tel:2145550187"
                className="bg-primary hover:bg-primary/95 text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 active:scale-98 transition-all shrink-0"
              >
                Call (214) 555-0187
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

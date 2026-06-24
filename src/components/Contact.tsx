'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Smartphone, Clock, Navigation, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Dentistry',
    date: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission for demo purposes
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'General Dentistry',
        date: '',
        message: '',
      })
    }, 4000)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-bg-light" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16 items-stretch">
          
          {/* Info Panel (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 block">Get In Touch</span>
              <h2 id="contact-heading" className="text-2xl sm:text-3xl font-black text-primary mb-2">Dallas Dental Care</h2>
              <p className="text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base">We are located in North Dallas. Call or request an appointment online.</p>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0" aria-hidden="true">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-base sm:text-lg">Location</p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">1234 Preston Road, Dallas, TX 75230</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0" aria-hidden="true">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-base sm:text-lg">Direct Line</p>
                    <a href="tel:2145550187" className="text-slate-600 hover:text-accent transition-colors text-sm sm:text-base font-semibold">(214) 555-0187</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0" aria-hidden="true">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-base sm:text-lg">Office Hours</p>
                    <p className="text-slate-600 text-sm sm:text-base">Mon - Sat: 9:00 AM - 5:00 PM</p>
                    <p className="text-slate-500 text-xs sm:text-sm italic mt-0.5">Same-day emergency bookings prioritized</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 mt-8">
              <a
                href="https://www.google.com/maps/place/1234+Preston+Rd,+Dallas,+TX+75230"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-primary/95 active:scale-98 transition-all shadow-md"
                aria-label="Get driving directions to Dallas Dental Care (opens in Google Maps)"
              >
                <Navigation size={16} aria-hidden="true" />
                Get Driving Directions
              </a>
            </div>
          </motion.div>

          {/* Interactive Booking Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="booking-form"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-xl sm:text-2xl font-black text-primary">Schedule Your Consultation</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Submit your desired details, and our local team will reach out to confirm your booking slot.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-xs font-bold text-slate-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="p-3 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-accent text-slate-800"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(214) 555-0100"
                        className="p-3 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-accent text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="p-3 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-accent text-slate-800"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="service" className="text-xs font-bold text-slate-700 mb-1.5">Desired Service</label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-accent text-slate-800 bg-white"
                      >
                        <option>General Dentistry</option>
                        <option>Dental Implants</option>
                        <option>Teeth Whitening</option>
                        <option>Veneers</option>
                        <option>Invisalign</option>
                        <option>Emergency Dental Care</option>
                        <option>Family Dentistry</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="date" className="text-xs font-bold text-slate-700 mb-1.5">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="p-3 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-accent text-slate-800"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 mb-1.5">Message / Symptoms</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Let us know how we can help you..."
                      className="p-3 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-accent text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md active:scale-99 transition-all cursor-pointer"
                  >
                    Request Consultation
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  className="flex flex-col items-center justify-center text-center p-8 space-y-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-primary">Request Fictional Receipt</h3>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-sm leading-relaxed">
                    Thank you! This website is a demonstration concept only. Your dummy booking request has been simulated successfully.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Embedded Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-80 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-100 relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2369687989397!2d-96.80665422472719!3d32.920038873602165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21aa5cbf239f%3A0x7d62024b455523d4!2s1234+Preston+Rd%2C+Dallas%2C+TX+75230%2C+USA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dallas Dental Care location on Google Maps — 1234 Preston Road, Dallas, TX"
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

      </div>
    </section>
  )
}

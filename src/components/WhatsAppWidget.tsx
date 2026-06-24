'use client'

import { motion } from 'framer-motion'

export default function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/12145550187?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20at%20Dallas%20Dental%20Care."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7 sm:w-8 sm:h-8"
        aria-hidden="true"
      >
        <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16.004c0 2.26.592 4.47 1.716 6.416L3.2 28.8l6.584-1.728A12.72 12.72 0 0 0 16.004 28.8c7.064 0 12.796-5.732 12.796-12.796S23.068 3.2 16.004 3.2Zm0 23.36a10.52 10.52 0 0 1-5.368-1.468l-.384-.228-3.988 1.044 1.064-3.884-.252-.4a10.48 10.48 0 0 1-1.612-5.62c0-5.82 4.72-10.56 10.54-10.56 5.82 0 10.56 4.74 10.56 10.56 0 5.82-4.74 10.556-10.56 10.556Zm5.784-7.908c-.316-.16-1.872-.924-2.164-1.028-.288-.108-.5-.16-.712.16-.212.316-.82 1.028-1.004 1.24-.188.212-.372.24-.688.08-.316-.16-1.336-.492-2.544-1.568-.94-.84-1.576-1.876-1.76-2.192-.184-.316-.02-.488.14-.644.144-.14.316-.368.476-.552.16-.184.212-.316.316-.528.108-.212.056-.396-.028-.556-.08-.16-.712-1.716-.976-2.348-.256-.616-.52-.532-.712-.544l-.608-.008c-.212 0-.556.08-.848.396-.288.316-1.104 1.08-1.104 2.632 0 1.552 1.132 3.052 1.288 3.264.16.212 2.228 3.396 5.396 4.764.756.324 1.344.52 1.804.664.756.24 1.448.208 1.992.124.608-.088 1.872-.764 2.136-1.504.264-.74.264-1.372.184-1.504-.08-.132-.288-.212-.604-.368Z" />
      </svg>

      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden="true" />
    </motion.a>
  )
}

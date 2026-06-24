import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service — Dallas Dental Care',
  description: 'Terms of Service for Dallas Dental Care in Dallas, Texas. Details on scheduling, billing, and patient responsibilities.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#002d5b] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#c5a059] hover:text-white transition-colors text-sm font-semibold mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Terms of Service</h1>
          <p className="text-slate-300 text-lg">Last updated: January 1, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none space-y-8">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-xs sm:text-sm text-amber-800 font-semibold leading-relaxed">
              ⚠️ <strong>Demo Site Notice:</strong> This terms of service is a generic demonstration document prepared for Dallas Dental Care. It is intended for placeholder purposes only.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using the website of Dallas Dental Care ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our website or services. These terms apply to all visitors,
              patients, and users of our website and dental services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">2. Our Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Dallas Dental Care provides professional dental services including:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>General and preventative dentistry (cleanings, examinations, fillings)</li>
              <li>Cosmetic dentistry (veneers, teeth whitening, smile designs)</li>
              <li>Restorative dentistry (crowns, bridges, dental implants)</li>
              <li>Orthodontics (Invisalign clear aligners)</li>
              <li>Emergency dental care (same-day appointments)</li>
              <li>Family dentistry (pediatric and adult care)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              All services are provided at our clinic located at 1234 Preston Road, Dallas, TX 75230, USA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">3. Appointments & Scheduling</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Appointments can be scheduled by calling us at <a href="tel:2145550187" className="text-[#c5a059] hover:underline">(214) 555-0187</a> or visiting our clinic</li>
              <li>We kindly request at least 24 hours' notice for cancellations or rescheduling</li>
              <li>Walk-in emergency patients are welcomed and accommodated based on daily priority slotting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">4. Patient Responsibilities</h2>
            <p className="text-slate-600 leading-relaxed mb-4">As a patient, you agree to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Provide accurate and complete medical and dental history</li>
              <li>Inform us of any changes to your health, medications, or allergies</li>
              <li>Follow prescribed treatment plans and post-treatment instructions</li>
              <li>Arrive on time for scheduled appointments</li>
              <li>Make timely payments for services rendered</li>
              <li>Treat our staff and other patients with respect and courtesy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">5. Fees & Payment</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Treatment fees will be discussed and agreed upon before commencing any procedure</li>
              <li>We accept cash, personal checks, major credit/debit cards, and PPO insurance plans</li>
              <li>Payment is expected upon completion of each visit unless otherwise agreed</li>
              <li>For extensive treatment plans, flexible monthly payment options may be discussed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">6. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All content on this website — including text, images, logos, graphics, and design — is the
              property of Dallas Dental Care and is protected by applicable intellectual property laws. The
              "Dallas Dental Care" name, logo, and branding are our trademarks. Unauthorized use of any
              content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the fullest extent permitted by law, Dallas Dental Care shall not be
              liable for any indirect, incidental, or consequential damages arising from the use of our
              website or services. Our total liability for any claim shall not exceed the amount paid by
              you for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">8. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of the State of Texas, USA.
              Any disputes arising from these terms or our services shall be subject to the exclusive
              jurisdiction of the courts in Dallas, Texas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">9. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-2">
              <p className="font-bold text-[#002d5b]">Dallas Dental Care</p>
              <p className="text-slate-600">1234 Preston Road, Dallas, TX 75230</p>
              <p className="text-slate-600">Phone: <a href="tel:2145550187" className="text-[#c5a059] hover:underline">(214) 555-0187</a></p>
              <p className="text-slate-600">Email: <a href="mailto:hello@dallasdentalcare.com" className="text-[#c5a059] hover:underline">hello@dallasdentalcare.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

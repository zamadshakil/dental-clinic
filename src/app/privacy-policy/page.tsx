import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy — Dallas Dental Care',
  description: 'Privacy Policy for Dallas Dental Care in Preston Road, Dallas, Texas. Learn how we collect, store, and protect your dental and medical records.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#002d5b] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#c5a059] hover:text-white transition-colors text-sm font-semibold mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg">Last updated: January 1, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none space-y-8">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-xs sm:text-sm text-amber-800 font-semibold leading-relaxed">
              ⚠️ <strong>Demo Site Notice:</strong> This privacy policy is a generic demonstration document prepared for Dallas Dental Care. It is intended for placeholder purposes only.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Welcome to Dallas Dental Care ("we," "our," or "us"). We are committed
              to protecting your personal information and your right to privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website or avail
              our dental services at our clinic located at 1234 Preston Road, Dallas, TX 75230.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We may collect the following types of information:</p>

            <h3 className="text-lg font-semibold text-[#002d5b] mb-2">Personal Information</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>Full name, date of birth, and gender</li>
              <li>Contact details (phone number, email address, postal address)</li>
              <li>Emergency contact information</li>
              <li>National ID, driver's license, or insurance card details</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#002d5b] mb-2">Medical & Dental Information</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>Dental and medical history</li>
              <li>X-rays, photographs, and diagnostic images</li>
              <li>Treatment records and prescriptions</li>
              <li>Insurance policies and billing information</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#002d5b] mb-2">Website Usage Data</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>IP address, browser type, and device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or search terms used</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Provide, maintain, and improve our dental services</li>
              <li>Schedule and manage your appointments</li>
              <li>Communicate with you regarding treatment plans and follow-ups</li>
              <li>Process payments and insurance claims</li>
              <li>Send appointment reminders and health-related notifications</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Improve our website experience and service quality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">4. Information Sharing & Disclosure</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li><strong>Healthcare Providers:</strong> With referring dentists, specialists, or laboratories involved in your care</li>
              <li><strong>Insurance Companies:</strong> To process your dental insurance claims</li>
              <li><strong>Legal Requirements:</strong> When required by law, HIPAA guidelines, or government regulation</li>
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and services, subject to confidentiality agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">5. HIPAA Compliance & Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical, administrative, and physical security measures to protect your personal
              and medical information in accordance with HIPAA standards.
              These include encrypted database storage, secure access controls, and regular audits.
              However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">6. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain your personal and medical records for as long as necessary to fulfill the purposes
              outlined in this policy, and as required by Texas state laws and professional dental regulations. You may request deletion of non-essential data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">7. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal data (subject to legal obligations)</li>
              <li>Withdraw consent for non-essential communications</li>
              <li>Obtain a copy of your dental records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002d5b] mb-4">8. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or how we handle your data,
              please contact us:
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

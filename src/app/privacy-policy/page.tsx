"use client";

import Container from "@/Custom/Container";
import { 
  HiShieldCheck, 
  HiEyeSlash, 
  HiLockClosed, 
  HiEnvelope, 
  HiInformationCircle,
  HiChevronRight,
  HiCpuChip
} from "react-icons/hi2";

export default function PrivacyPolicy() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-hero bg-cover bg-center" />
        
        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium uppercase tracking-widest mb-6">
            <HiShieldCheck className="text-secondary text-lg" />
            Your Security is our priority
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
        </Container>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <Container className="-mt-10 relative z-20">
        <div className="mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Summary Box */}
          <div className="p-8 md:p-8 bg-slate-50/50 border-b border-slate-100">
            <div className="flex gap-4 items-start max-w-3xl">
              <HiInformationCircle className="text-blue-600 text-3xl shrink-0 mt-1" />
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Hom3li</strong> values your privacy. This policy explains how we collect, use, and protect your information to provide seamless cleaning services while ensuring your data remains secure.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-14 space-y-16">
            
            {/* Grid: Information Collection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What We Collect */}
              <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100">
                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                  <HiShieldCheck className="text-blue-600" />
                  1. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-900 font-bold text-sm mb-2">Personal & Payment:</p>
                    <p className="text-slate-600 text-sm italic mb-2 text-xs">Name, Address, Phone, Email, Payment details</p>
                  </div>
                  <div>
                    <p className="text-blue-900 font-bold text-sm mb-2">Device & Tech:</p>
                    <p className="text-slate-600 text-sm italic mb-2 text-xs">IP address, Mobile device ID, App usage data</p>
                  </div>
                  <div>
                    <p className="text-blue-900 font-bold text-sm mb-2">Location:</p>
                    <p className="text-slate-600 text-sm italic text-xs">Collected with your consent to provide address-based services.</p>
                  </div>
                </div>
              </div>

              {/* How We Use It */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                  <HiCpuChip className="text-slate-500" />
                  2. How We Use Information
                </h2>
                <ul className="space-y-3">
                  {[
                    "Process bookings and payments",
                    "Provide cleaning services at your location",
                    "Improve our app and customer experience",
                    "Communicate updates, offers, or issues"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                      <HiChevronRight className="text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Detailed Sections */}
            <div className="space-y-12">
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <HiEyeSlash className="text-secondary" />
                  3. Sharing Data
                </h3>
                <p className="md:col-span-2 text-slate-600 leading-relaxed">
                  <strong>We do not sell your personal information.</strong> We only share data with <strong>Service Partners</strong> (cleaning staff and payment gateways) to fulfill requests, or with <strong>Legal Authorities</strong> if strictly required by law.
                </p>
              </section>

              <hr className="border-slate-100" />

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <HiLockClosed className="text-secondary" />
                  4. Data Security
                </h3>
                <p className="md:col-span-2 text-slate-600 leading-relaxed">
                  We implement encryption and secure servers to protect your data. However, please note that no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <hr className="border-slate-100" />

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <h3 className="text-xl font-bold text-slate-900">5. Your Rights</h3>
                <div className="md:col-span-2">
                    <p className="text-slate-600 mb-4">You have the following rights regarding your data:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 font-medium">
                        <li className="flex items-center gap-2"><HiChevronRight className="text-blue-400" /> Access personal data</li>
                        <li className="flex items-center gap-2"><HiChevronRight className="text-blue-400" /> Update personal data</li>
                        <li className="flex items-center gap-2"><HiChevronRight className="text-blue-400" /> Request data deletion</li>
                    </ul>
                </div>
              </section>

              <hr className="border-slate-100" />

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <h3 className="text-xl font-bold text-slate-900">6. Policy Changes</h3>
                <p className="md:col-span-2 text-slate-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. Major changes will be communicated via the app or email.
                </p>
              </section>
            </div>

            {/* Contact Footer */}
            <div className="bg-black rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Exercise Your Rights</h2>
                <p className="text-slate-400">Contact us to access or delete your data.</p>
              </div>
              <a 
                href="mailto:safehomes26@gmail.com"
                className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all duration-300 shadow-lg shadow-white/5"
              >
                <HiEnvelope className="text-xl group-hover:scale-110 transition-transform" />
                safehomes26@gmail.com
              </a>
            </div>

          </div>
        </div>
      </Container>
    </main>
  );
}
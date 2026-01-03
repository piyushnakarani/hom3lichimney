"use client";

import Container from "@/Custom/Container";
import {
  HiScale,
  HiCalendarDays,
  HiShieldExclamation,
  HiCheckBadge,
  HiChevronRight,
  HiDocumentText,
} from "react-icons/hi2";

export default function TermsAndConditions() {
  const effectiveDate = "September 21, 2025";

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-28 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-hero bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/10" />

        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-6">
            <HiScale className="text-secondary text-lg" />
            Terms of Service
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-sm text-white/70">
            Effective Date: {effectiveDate}
          </p>
        </Container>
      </section>

      {/* ================= CONTENT CARD ================= */}
      <Container className="-mt-20 relative z-20">
        <div className="mx-auto max-w-6xl bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* SUMMARY */}
          <div className="p-4 md:p-12 bg-slate-50 border-b border-slate-100">
            <div className="flex gap-4 items-start max-w-4xl">
              <HiDocumentText className="text-blue-600 text-3xl shrink-0 mt-1" />
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                By using the <strong>SafeHomes</strong> app, you agree to these
                terms. We specialize in chimney, dryer vent, and air duct
                maintenance. Please review our subscription and cancellation
                policies carefully.
              </p>
            </div>
          </div>

          {/* ================= BODY ================= */}
          <div className="p-4 lg:p-8 md:p-14 space-y-10 lg:space-y-20">
            {/* SERVICES + RESPONSIBILITIES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
              {/* SERVICES */}
              <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100">
                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                  <HiCheckBadge className="text-blue-600 text-xl" />
                  Our Services
                </h2>

                <ul className="space-y-3">
                  {[
                    "Chimney Inspection & Repair",
                    "Chimney Cleaning & Maintenance",
                    "Chimney Cap & Liner Services",
                    "Chimney Animal & Blockage Removal",
                    "Ventilation & Airflow Systems",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-slate-700 text-sm font-medium"
                    >
                      <HiChevronRight className="text-blue-400 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* USER RESPONSIBILITIES */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                  <HiShieldExclamation className="text-slate-500 text-xl" />
                  User Responsibilities
                </h2>

                <ul className="space-y-3 text-sm text-slate-600">
                  <li>• Provide accurate booking details</li>
                  <li>• Ensure safe and unobstructed access</li>
                  <li>• Follow pre-service instructions provided via the app</li>
                </ul>
              </div>
            </div>

            {/* PAYMENT TERMS – FIXED GRID */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 lg:py-10 border-y border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <HiCalendarDays className="text-blue-600 text-xl" />
                Payment Terms – Subscription Model
              </h3>

              <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  <strong>Payment:</strong> We offer both one-time services and
                  subscription-based plans. Subscription fees are billed
                  automatically on the scheduled due date.
                </p>

                <p>
                  <strong>No Refund:</strong> Completed services, processed
                  subscription fees, or last-minute cancellations are
                  non-refundable.
                </p>
              </div>
            </section>

            {/* LEGAL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Limitation of Liability
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We are not liable for indirect or consequential damages arising
                  from misuse of our app or services beyond our control.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Governing Law
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  These terms are governed by the laws of{" "}
                  <strong>New Jersey, USA</strong>.
                </p>
              </section>
            </div>

            {/* SUPPORT CTA */}
            <div className="bg-black rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Questions about our terms?
                </h2>
                <p className="text-slate-400">
                  We believe in transparent and fair service.
                </p>
              </div>

              <a
                href="mailto:safehomes26@gmail.com"
                className="inline-flex items-center justify-center bg-primary text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

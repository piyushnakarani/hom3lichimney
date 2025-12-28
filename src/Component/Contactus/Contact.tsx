"use client";

import { useState } from "react";
import Container from "@/Custom/Container";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail, MdCall } from "react-icons/md";

interface ContactUsProps {
  isService?: boolean;
}

export default function ContactUs({ isService }: ContactUsProps) {
  /* THEME HANDLING */
  const textColor = isService ? "text-gray-800" : "text-white";
  const mutedText = isService ? "text-gray-600" : "text-white/70";
  const labelColor = isService ? "text-gray-700" : "text-white";
  const inputBg = isService ? "bg-white" : "bg-white/10";
  const inputText = isService
    ? "text-gray-800 placeholder-gray-400"
    : "text-white placeholder-white/60";
  const borderColor = isService ? "border-gray-200" : "border-white/10";

  /* FORM STATE */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  /* INPUT CHANGE */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* SUBMIT */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-[95%] mx-auto rounded-3xl overflow-hidden bg-contact bg-cover">
      {/* BACKGROUND OVERLAY */}
      <div
        className={`absolute inset-0 ${
          isService ? "bg-[#F3F6FCF2]" : "bg-[#071824]/90"
        }`}
      />

      {/* CONTENT */}
      <Container className="relative z-10 py-6 lg:py-10 !w-[85%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* FORM */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-5 p-1 md:p-8">

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={`block mb-2 text-sm font-semibold uppercase ${labelColor}`}>
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter full name"
                    className={`w-full rounded-full px-5 py-3 outline-none transition
                      ${inputBg} ${inputText} border ${borderColor} focus:border-primary`}
                  />
                </div>

                <div>
                  <label className={`block mb-2 text-sm font-semibold uppercase ${labelColor}`}>
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email address"
                    className={`w-full rounded-full px-5 py-3 outline-none transition
                      ${inputBg} ${inputText} border ${borderColor} focus:border-primary`}
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className={`block mb-2 text-sm font-semibold uppercase ${labelColor}`}>
                  Phone Number*
                </label>

                <div
                  className={`flex items-center gap-3 rounded-full px-5 py-3 border transition
                    ${inputBg} ${borderColor} focus-within:border-primary`}
                >
                  <span className="text-xl">🇺🇸</span>
                  <span className={`${mutedText} text-sm font-medium`}>+1</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone number"
                    className={`w-full bg-transparent outline-none ${inputText}`}
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className={`block mb-2 text-sm font-semibold uppercase ${labelColor}`}>
                  Your Subject*
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-full px-5 py-3 outline-none transition
                    ${inputBg} ${inputText} border ${borderColor} focus:border-primary`}
                >
                  <option value="" className="text-black">
                    Select
                  </option>
                  <option value="General Inquiry" className="text-black">
                    General Inquiry
                  </option>
                  <option value="Get a Quote" className="text-black">
                    Get a Quote
                  </option>
                  <option value="Schedule Service" className="text-black">
                    Schedule Service
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className={`block mb-2 text-sm font-semibold uppercase ${labelColor}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Enter some comments / notes"
                  className={`w-full rounded-2xl px-5 py-4 resize-none outline-none transition
                    ${inputBg} ${inputText} border ${borderColor} focus:border-primary`}
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3
                  font-semibold text-black hover:bg-yellow-400 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit →"}
              </button>
            </form>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2">
            <h2
              className={`text-xl md:text-2xl lg:text-4xl my-6 uppercase font-extralight leading-[2rem] md:leading-[2.5rem] ${textColor}`}
            >
              Ready to{" "}
              <span className={`${isService ? "text-secondary" : "text-primary"} font-bold`}>
                get in touch with Hom3li
              </span>
            </h2>

            <p className={`text-base md:text-sm lg:text-lg ${mutedText}`}>
              Have a question, need a quote, or want to schedule service? Our team
              is here to help! Whether it’s a quick fix, a full system upgrade, or
              routine maintenance, we’re just a call or click away.
            </p>

            <div className="space-y-6 mt-6">
              <InfoItem
                icon={<HiLocationMarker />}
                text="Toms River, New Jersey 08757"
                textColor={textColor}
              />
              <InfoItem
                icon={<MdEmail />}
                text="safehomes26@gmail.com"
                textColor={textColor}
              />
              <InfoItem
                icon={<MdCall />}
                text="+1 888 743 5883"
                textColor={textColor}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* SMALL REUSABLE ITEM */
function InfoItem({
  icon,
  text,
  textColor,
}: {
  icon: React.ReactNode;
  text: string;
  textColor: string;
}) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black text-xl">
        {icon}
      </div>
      <p className={`text-lg font-medium ${textColor}`}>{text}</p>
    </div>
  );
}

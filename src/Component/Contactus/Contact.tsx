"use client";

import { useState } from "react";
import Container from "@/Custom/Container";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { MdEmail, MdCall, MdArrowOutward } from "react-icons/md";

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
    title: "Hom3li Chimney Services",
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
    const { name, value } = e.target;

    // Allow only numbers for phone field
    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setForm({ ...form, [name]: numericValue });
      return;
    }

    setForm({ ...form, [name]: value });
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
        toast.success("Message sent successfully!");
        setForm({
          title: "Hom3li Chimney Services",
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative w-[95%] mx-auto rounded-3xl overflow-hidden bg-contact bg-cover">
        {/* BACKGROUND OVERLAY */}
        <div
          className={`absolute inset-0 ${
            isService ? "bg-[#F3F6FCF2]" : "bg-[#071824]/90"
          }`}
        />

        {/* CONTENT */}
        <Container className="relative z-10 py-6 lg:py-10 !w-[85%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* FORM */}
            <div className="order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-5 p-1 md:p-8">
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      className={`block mb-2 text-sm font-semibold uppercase ${labelColor}`}
                    >
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
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label
                      className={`block mb-2 text-sm font-semibold uppercase ${labelColor}`}
                    >
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
                      autoComplete="off"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label
                    className={`block mb-2 text-sm font-semibold uppercase ${labelColor}`}
                  >
                    Phone Number*
                  </label>

                  <div
                    className={`flex items-center gap-3 rounded-full px-5 py-3 border transition
                    ${inputBg} ${borderColor} focus-within:border-primary`}
                  >
                    <span className="text-xl">🇺🇸</span>
                    <span className={`${mutedText} text-sm font-medium`}>
                      +1
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter phone number"
                      className={`w-full bg-transparent outline-none ${inputText}`}
                      autoComplete="off"
                      maxLength={10}
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div className="relative">
                  <label
                    className={`block mb-2 text-sm font-semibold uppercase ${labelColor}`}
                  >
                    Your Subject*
                  </label>

                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className={`w-full appearance-none rounded-full px-5 pr-12 py-3 outline-none transition
      ${inputBg} ${inputText} border ${borderColor} focus:border-primary`}
                  >
                    <option value="">Select</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Get a Quote">Get a Quote</option>
                    <option value="Schedule Service">Schedule Service</option>
                  </select>

                  {/* Custom Arrow */}
                  <span className="pointer-events-none text-xl font-bold absolute right-5 top-[33px] text-gray-500">
                    ⌄
                  </span>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    className={`block mb-2 text-sm font-semibold uppercase ${labelColor}`}
                  >
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
                    autoComplete="off"
                    required
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3
                  font-semibold text-black hover:bg-yellow-400 transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}{" "}
                  <MdArrowOutward height={10} width={10} />
                </button>
              </form>
            </div>

            {/* RIGHT CONTENT */}
            <div className="order-1 lg:order-2">
              <h2
                className={`text-xl md:text-2xl lg:text-4xl my-6 uppercase font-extralight leading-[2rem] md:leading-[2.5rem] ${textColor}`}
              >
                Ready to{" "}
                <span className={` text-secondary font-bold`}>
                  get in touch with Hom3li
                </span>
              </h2>

              <p className={`text-base md:text-sm lg:text-lg ${mutedText}`}>
                Have a question, need a quote, or want to schedule service? Our
                team is here to help! Whether it’s a quick fix, a full system
                upgrade, or routine maintenance, we’re just a call or click
                away.
              </p>

              <div className="space-y-6 mt-6">
                <InfoItem
                  icon={<HiLocationMarker fill="black" />}
                  text="Toms River, New Jersey 08757"
                  href="https://www.google.com/maps/search/?api=1&query=Toms+River+New+Jersey+08757"
                  textColor={textColor}
                />
                <InfoItem
                  icon={<MdEmail fill="black" />}
                  text="safehomes26@gmail.com"
                  href="mailto:safehomes26@gmail.com"
                  textColor={textColor}
                />
                <InfoItem
                  icon={<MdCall fill="black" />}
                  text="+1 888 743 5883"
                  href="tel:+18887435883"
                  textColor={textColor}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable={false}
        theme="colored"
      />
    </>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  textColor?: string;
}

export function InfoItem({
  icon,
  text,
  href,
  textColor = "text-white",
}: InfoItemProps) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      className="flex items-center gap-3 group"
    >
      <div className="rounded-full bg-primary h-9 w-9 flex items-center justify-center">
        <span className="text-xl text-primary">{icon}</span>
      </div>
      <span
        className={`${textColor} font-medium transition group-hover:text-primary`}
      >
        {text}
      </span>
    </Link>
  );
}

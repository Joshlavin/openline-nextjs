"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industryOptions = [
  "Plumbing", "HVAC", "Electrical", "Landscaping", "Roofing", "Pest Control",
  "Pool Service", "Cleaning", "Auto Repair", "Salon / Spa", "Painting",
  "Flooring", "Handyman", "General Contractor", "Other Home Services", "Other",
];

const volumeOptions = [
  "Under 50 calls/month",
  "50–200 calls/month",
  "200–500 calls/month",
  "500+ calls/month",
];

export default function DemoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="bg-surface rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                <div className="w-14 h-14 rounded-full bg-green-soft text-green flex items-center justify-center text-2xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">You&apos;re all set!</h3>
                <p className="text-text-2 text-sm">
                  We&apos;ll reach out within 24 hours with your custom quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-text">Get Your Custom Quote</h3>
                    <p className="text-sm text-text-3 mt-1">Takes about 30 seconds.</p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-8 h-8 rounded-full hover:bg-[#f0f0f0] flex items-center justify-center text-text-3 text-lg bg-transparent border-none cursor-pointer transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input name="firstName" placeholder="First name" required />
                    <Input name="lastName" placeholder="Last name" required />
                  </div>

                  <Input name="businessName" placeholder="Business name" required />

                  {/* Contact row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input name="phone" type="tel" placeholder="Phone number" required />
                    <Input name="email" type="email" placeholder="Email" required />
                  </div>

                  {/* Selects */}
                  <Select name="industry" placeholder="Select your industry" options={industryOptions} required />
                  <Select name="callVolume" placeholder="Estimated call volume" options={volumeOptions} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 mt-6 rounded-xl bg-accent text-white text-[15px] font-medium border-none cursor-pointer hover:bg-accent-hover transition-colors disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Get My Custom Quote"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Input({
  name,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="h-11 px-4 rounded-xl bg-bg border border-border text-sm text-text placeholder:text-text-3 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors w-full"
    />
  );
}

function Select({
  name,
  placeholder,
  options,
  required,
}: {
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <select
      name={name}
      required={required}
      defaultValue=""
      className="h-11 px-4 rounded-xl bg-bg border border-border text-sm text-text outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors w-full appearance-none cursor-pointer"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23888' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 14px center",
      }}
    >
      <option value="" disabled className="text-text-3">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}

"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/config";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle className="h-12 w-12 text-[#16a34a] mb-3" aria-hidden="true" />
        <h3 className="text-lg font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-600 text-sm mb-4">
          We&apos;ll contact you within minutes. For immediate assistance, call us now.
        </p>
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="flex items-center gap-2 bg-[#dc2626] text-white font-bold px-6 py-3 rounded-lg"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {SITE_CONFIG.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
            placeholder="Smith"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          autoComplete="tel"
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
          placeholder="(407) 000-0000"
        />
      </div>
      {!compact && (
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
      )}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent bg-white"
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
      {!compact && (
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Service Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="street-address"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
            placeholder="123 Main St, Orlando, FL"
          />
        </div>
      )}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 2 : 4}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent resize-none"
          placeholder="Tell us more about what you need..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#152d4a] disabled:opacity-60 text-white font-bold py-3 px-6 rounded-lg transition-colors text-base"
      >
        {loading ? (
          <span>Sending...</span>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Request
          </>
        )}
      </button>
      <p className="text-xs text-gray-500 text-center">
        For emergencies, call us directly at{" "}
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="text-[#dc2626] font-semibold"
        >
          {SITE_CONFIG.phone}
        </a>
      </p>
    </form>
  );
}

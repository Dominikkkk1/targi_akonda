"use client";

import { useState } from "react";

export default function RoadshowForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    city: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/roadshow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Wystąpił błąd");
      }

      setStatus("success");

      if (typeof window !== "undefined" && (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq) {
        (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq!("track", "Lead");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Wystąpił błąd");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-extrabold text-navy mb-2">Zgłoszenie wysłane!</h3>
        <p className="text-gray-500 text-sm">
          Potwierdzenie zostało wysłane na Twój adres email.<br />
          Skontaktujemy się, żeby umówić termin prezentacji.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rs-name" className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
            Imię i nazwisko *
          </label>
          <input id="rs-name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="block w-full h-10 px-3 text-sm border border-gray-300 rounded-md outline-none focus:border-navy transition-colors" placeholder="Jan Kowalski" />
        </div>
        <div>
          <label htmlFor="rs-email" className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
            Email *
          </label>
          <input id="rs-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="block w-full h-10 px-3 text-sm border border-gray-300 rounded-md outline-none focus:border-navy transition-colors" placeholder="jan@firma.pl" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rs-company" className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
            Firma *
          </label>
          <input id="rs-company" type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="block w-full h-10 px-3 text-sm border border-gray-300 rounded-md outline-none focus:border-navy transition-colors" placeholder="Nazwa firmy" />
        </div>
        <div>
          <label htmlFor="rs-phone" className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
            Telefon *
          </label>
          <input id="rs-phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="block w-full h-10 px-3 text-sm border border-gray-300 rounded-md outline-none focus:border-navy transition-colors" placeholder="+48 123 456 789" />
        </div>
      </div>
      <div>
        <label htmlFor="rs-city" className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
          Miasto / Region *
        </label>
        <input id="rs-city" type="text" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="block w-full h-10 px-3 text-sm border border-gray-300 rounded-md outline-none focus:border-navy transition-colors" placeholder="Np. Warszawa, Kraków, Śląsk..." />
      </div>
      <div>
        <label htmlFor="rs-message" className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
          Wiadomość (opcjonalnie)
        </label>
        <textarea id="rs-message" rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="block w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md outline-none focus:border-navy transition-colors resize-none" placeholder="Czego oczekujesz od prezentacji? Jakie materiały obrabiasz?" />
      </div>

      {status === "error" && <p className="text-red-600 text-sm font-medium">{errorMsg}</p>}

      <button type="submit" disabled={status === "sending"}
        className="block w-full h-11 bg-navy text-white font-bold text-sm rounded-md hover:bg-navy-dark transition-colors disabled:opacity-50 cta-glow cursor-pointer">
        {status === "sending" ? (
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Wysyłanie...
          </span>
        ) : (
          "Umów prezentację u siebie →"
        )}
      </button>

      <p className="text-[11px] text-gray-400 text-center">
        Twoje dane są bezpieczne. Wykorzystamy je wyłącznie w&nbsp;celu umówienia prezentacji.
      </p>
    </form>
  );
}

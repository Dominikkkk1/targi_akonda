import type { Metadata } from "next";
import Image from "next/image";
import RoadshowForm from "../components/RoadshowForm";
import Reveal from "../components/Reveal";
import AnimatedCounter from "../components/AnimatedCounter";
import ScrollProgress from "../components/ScrollProgress";
import SocialProofBar from "../components/SocialProofBar";
import { FadeInUp } from "../components/HeroAnimations";

export const metadata: Metadata = {
  title: "Multigraf Touchline CF375 Xpro – Premiera w Polsce | Akonda",
  description:
    "Akonda - oficjalny partner Multigraf w Polsce. Prezentujemy nowy multifinisher CF375 Xpro. Roadshow: przyjedziemy z maszyną do Twojej drukarni. Zapisz się na bezpłatną prezentację.",
  openGraph: {
    title: "Multigraf Touchline CF375 Xpro – Premiera w Polsce | Akonda",
    description:
      "Oficjalny partner Multigraf w Polsce prezentuje nowy CF375 Xpro. Roadshow: przyjedziemy z maszyną do Ciebie.",
    type: "website",
    images: ["/machines/cpc375-xpro.avif"],
  },
};

export default function CF375XproPage() {
  return (
    <>
      {/* ── Topbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="h-full mx-auto max-w-5xl px-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/akonda-logo.png" alt="Akonda" width={120} height={30} className="h-7 w-auto" />
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-400 font-semibold border-l border-gray-200 pl-3">
              Oficjalny partner Multigraf
            </span>
          </div>
          <a href="#formularz" className="h-8 px-4 bg-navy text-white text-xs font-bold rounded-md inline-flex items-center hover:bg-navy-dark transition-colors">
            Umów prezentację
          </a>
        </div>
      </header>

      <ScrollProgress />
      <SocialProofBar />

      {/* ── Hero ── */}
      <section className="relative pt-14">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <FadeInUp delay={0}>
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <span className="inline-block text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white/80 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full leading-relaxed">
                    Oficjalny partner Multigraf w Polsce
                  </span>
                  <Image src="/multigraf-logo.svg" alt="Multigraf" width={198} height={100} className="h-8 w-auto brightness-0 invert opacity-60" />
                </div>
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
                  Premiera<br />
                  <span className="text-white/60">Multigraf Touchline<br className="sm:hidden" /> CF375 Xpro</span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.24}>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
                  Zostaliśmy oficjalnym partnerem Multigraf w&nbsp;Polsce.
                  Z&nbsp;tej okazji ruszamy w&nbsp;trasę z&nbsp;nowym multifinisherem CF375&nbsp;Xpro -
                  przyjedziemy do Twojej drukarni i&nbsp;pokażemy maszynę w&nbsp;akcji.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    Bezpłatna prezentacja u Ciebie
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    Testy na Twoich materiałach
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    Bez zobowiązań
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.36}>
                <a href="#maszyna" className="hidden lg:inline-flex h-11 px-7 border border-white/30 text-white font-semibold text-sm rounded-md items-center hover:bg-white/10 transition-colors">
                  Poznaj maszynę
                </a>
              </FadeInUp>
            </div>

            {/* ── Formularz w hero ── */}
            <FadeInUp delay={0.3} className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <h2 className="text-lg font-extrabold text-navy mb-1">Umów prezentację</h2>
                <p className="text-xs text-gray-400 mb-4">Przyjedziemy z maszyną do Ciebie · Bezpłatnie</p>
                <RoadshowForm />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ── Jak to działa ── */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              ["1", "Zapisz się", "Wypełnij formularz - to zajmie minutę"],
              ["2", "Umówimy termin", "Nasz konsultant zadzwoni i ustali dogodną datę"],
              ["3", "Przyjedziemy", "Dostarczymy maszynę i pokażemy ją na Twoich materiałach"],
            ].map(([num, title, desc]) => (
              <Reveal key={num}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <span className="text-lg font-extrabold text-white">{num}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{title}</h3>
                  <p className="text-xs text-white/50">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Maszyna ── */}
      <section id="maszyna" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-white bg-accent px-3 py-1 rounded-full mb-3 pulse-badge">
                Premiera w Polsce
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
                Multigraf Touchline CF375 Xpro
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">
                Szwajcarska bigówko-falcerka - 6 typów falców, ekran dotykowy,
                podajnik próżniowy i&nbsp;detekcja podwójnych arkuszy w&nbsp;jednym urządzeniu.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <Reveal>
              <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-200 tilt-hover">
                <Image src="/machines/cpc375-xpro.avif" alt="Multigraf Touchline CF375 Xpro" fill className="object-contain p-8" />
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="space-y-5">
                {[
                  ["Swing-Bar™ - system bigowania", "Unikalna technologia zapobiegająca pękaniu włókien papieru. 3 automatyczne głębokości, do 20 bigów na arkusz, min. odstęp 30 mm."],
                  ["Pro-Knife™ - system falcowania", "Opatentowana technologia gwarantująca idealny falc bez śladów. 6 standardowych typów falców, do 2 falców na arkusz."],
                  ["Ekran dotykowy", "Cyfrowa konfiguracja bez narzędzi - pozycje bigów, typy falców, formaty, liczba arkuszy w partii. Pamięć zleceń."],
                  ["Detekcja podwójnych arkuszy", "Ultradźwiękowe czujniki wykrywają podwójne podania, zapewniając niezawodność i ochronę dokumentów."],
                  ["Podajnik próżniowy", "Stół podawczy 180 mm z systemem ssącym - minimalne przestoje przy przeładunku, ciągła praca."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold text-navy">{title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── Specyfikacja techniczna ── */}
          <Reveal>
            <div className="bg-navy-light border border-gray-200 rounded-xl p-6 mb-16">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-navy mb-4">Specyfikacja techniczna</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                {[
                  ["Format min.", "105 x 148 mm"],
                  ["Format max.", "375 x 660 mm (do 1050 mm z rozszerzeniem)"],
                  ["Gramatura", "80-400 g/m² (max. 0,4 mm)"],
                  ["Wydajność", "Do 6000 arkuszy/h"],
                  ["Typy falców", "6 standardowych"],
                  ["Bigi na arkusz", "Do 20"],
                  ["Falce na arkusz", "Do 2"],
                  ["Min. długość falcu", "30 mm"],
                  ["Max. długość falcu", "500 mm"],
                  ["Pojemność podajnika", "180 mm"],
                  ["Wymiary (D x S x W)", "1860 x 600 x 1320 mm"],
                  ["Waga", "196 kg"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-gray-200 pb-2 spec-row rounded">
                    <span className="text-gray-400 font-medium">{label}</span>
                    <span className="text-navy font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Zastosowania ── */}
          <Reveal>
            <div className="text-center mb-8">
              <h3 className="text-lg font-extrabold text-navy">Typowe zastosowania</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-16">
              {[
                "Kartki okolicznościowe",
                "Ulotki składane",
                "Menu restauracyjne",
                "Programy eventowe",
                "Broszury",
                "Mailingi",
              ].map((app) => (
                <div key={app} className="text-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-xs font-semibold text-navy">{app}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Wideo ── */}
          <Reveal>
            <div className="text-center mb-8">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-navy bg-navy-light px-3 py-1 rounded-full mb-3">
                Zobacz w akcji
              </span>
              <h3 className="text-xl font-extrabold text-navy">
                CF375 Xpro - prezentacja
              </h3>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-video max-w-3xl mx-auto">
              <iframe
                title="Multigraf Touchline CF375 Xpro - prezentacja"
                src="https://www.youtube.com/embed/zdvm-4wXUgE?si=lU3qjAVaa7r7FiuW"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dla kogo ── */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <div className="text-center mb-8">
              <h2 className="text-lg font-extrabold text-navy">Dla kogo jest CF375 Xpro?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                ["Drukarnie cyfrowe", "Automatyzacja bigowania i falcowania po druku"],
                ["Introligatornie", "Wydajniejsza obróbka bez ręcznej regulacji"],
                ["Agencje reklamowe", "Produkcja kart, menu, zaproszeń in-house"],
                ["Wydawnictwa", "Profesjonalny falc i big na okładkach i wkładkach"],
              ].map(([title, desc]) => (
                <div key={title} className="text-center p-4 rounded-xl bg-white border border-gray-200">
                  <p className="text-sm font-bold text-navy">{title}</p>
                  <p className="text-[11px] text-gray-400 mt-1 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dlaczego Akonda ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-navy bg-navy-light px-3 py-1 rounded-full mb-3">
                Dlaczego Akonda
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
                Oficjalny partner Multigraf w&nbsp;Polsce
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Reveal>
              <div className="p-5 rounded-xl bg-navy-light">
                <p className="text-xl md:text-2xl font-extrabold text-navy"><AnimatedCounter value={15} suffix="+" /></p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1">Lat na rynku</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="p-5 rounded-xl bg-navy-light">
                <p className="text-xl md:text-2xl font-extrabold text-navy"><AnimatedCounter value={3000} suffix="+" /></p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1">Instalacji w Polsce</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="p-5 rounded-xl bg-navy-light">
                <p className="text-xl md:text-2xl font-extrabold text-navy">Serwis</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1">Gwarancja i wsparcie</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="p-5 rounded-xl bg-navy-light">
                <p className="text-xl md:text-2xl font-extrabold text-navy">Leasing</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1">Finansowanie od 0%</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Formularz dolny ── */}
      <section id="formularz" className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-xl px-5">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-navy bg-navy-light px-3 py-1 rounded-full mb-3">
                Roadshow CF375 Xpro
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-3">
                Przyjedziemy do Ciebie
              </h2>
              <p className="text-gray-500 text-sm">
                Zapisz się na bezpłatną prezentację. Dostarczymy maszynę i&nbsp;pokażemy ją na Twoich materiałach.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <RoadshowForm />
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-xs text-gray-400">
            {[
              "Bezpłatna prezentacja",
              "Bez zobowiązań",
              "Cała Polska",
            ].map((text) => (
              <span key={text} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky CTA mobile ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 px-5 py-3">
        <a href="#formularz" className="block w-full h-11 cta-shimmer text-white font-bold text-sm rounded-md flex items-center justify-center">
          Umów prezentację u siebie&nbsp;→
        </a>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-navy py-10 pb-24 lg:pb-10">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div>
              <Image src="/akonda-logo.png" alt="Akonda" width={120} height={30} className="h-7 w-auto brightness-0 invert" />
              <p className="opacity-40 text-xs mt-1">Oficjalny partner Multigraf w&nbsp;Polsce</p>
            </div>
            <div className="text-center md:text-right">
              <p className="opacity-60 text-sm font-medium">kontakt@akonda.pl</p>
              <p className="opacity-40 text-xs mt-1">akonda.pl</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 pt-6 text-center">
            <p className="text-white/30 text-[11px]">&copy; 2026 Akonda Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

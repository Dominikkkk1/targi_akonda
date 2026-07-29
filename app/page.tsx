import Image from "next/image";
import RegistrationForm from "./components/RegistrationForm";
import Reveal from "./components/Reveal";
import MachineCard from "./components/MachineCard";
import { FadeInUp, CtaGlow } from "./components/HeroAnimations";

export default function Home() {
  return (
    <>
      {/* ── Topbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="h-full mx-auto max-w-5xl px-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/akonda-logo.png" alt="Akonda" width={120} height={30} className="h-7 w-auto" />
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-400 font-semibold border-l border-gray-200 pl-3">
              Dni Otwarte · 27–28.08.2026
            </span>
          </div>
          <a href="#rejestracja" className="h-8 px-4 bg-navy text-white text-xs font-bold rounded-md inline-flex items-center hover:bg-navy-dark transition-colors">
            Zapisz się
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-14">
        <Image src="/hero-bg-mpg.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 md:py-32">
          <div className="max-w-3xl">
            <FadeInUp delay={0}>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-white/80 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full mb-5">
                27–28 Sierpnia 2026 · Market Print Global · Warszawa
              </span>
            </FadeInUp>

            <FadeInUp delay={0.12}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
                Dni Otwarte<br />
                <span className="text-white/60">Maszyn Introligatorskich</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.24}>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
                Zapraszamy do siedziby Market&nbsp;Print&nbsp;Global w&nbsp;Warszawie.
                Zobacz maszyny introligatorskie w&nbsp;prawdziwej produkcji - bigówki,
                foliarki, oklejarki, linie broszurujące i&nbsp;systemy oprawy twardej.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  Nowy Multigraf Touchline CF375
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  365bind - klejenie kalendarzy
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  Porównanie: stary vs nowy model
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.36}>
              <div className="flex flex-wrap gap-3">
                <CtaGlow>
                  <a href="#rejestracja" className="h-11 px-7 bg-white text-navy font-bold text-sm rounded-md inline-flex items-center hover:bg-gray-100 transition-colors">
                    Zarezerwuj miejsce&nbsp;→
                  </a>
                </CtaGlow>
                <a href="#maszyny" className="h-11 px-7 border border-white/30 text-white font-semibold text-sm rounded-md inline-flex items-center hover:bg-white/10 transition-colors">
                  Zobacz program
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-5 py-7 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            ["2", "Dni wydarzenia"],
            ["10+", "Maszyn na żywo"],
            ["3000+", "Instalacji w Polsce"],
            ["15+", "Lat doświadczenia"],
          ].map(([val, label], i) => (
            <Reveal key={i} delay={i + 1}>
              <p className="text-2xl md:text-3xl font-extrabold">{val}</p>
              <p className="text-[10px] uppercase tracking-widest opacity-50 font-semibold mt-1">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-5 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-navy shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" /></svg>
            <span className="text-sm font-semibold text-navy">Maszyny w&nbsp;realnej produkcji</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-navy shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
            <span className="text-sm font-semibold text-navy">Konsultacje z ekspertami</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-navy shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></svg>
            <span className="text-sm font-semibold text-navy">Specjalne warunki eventowe</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-navy shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
            <span className="text-sm font-semibold text-navy">Stary vs nowy Multigraf</span>
          </div>
        </div>
      </section>

      {/* ── Gwiazdy programu ── */}
      <section id="maszyny" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-white bg-accent px-3 py-1 rounded-full mb-3">
                Gwiazdy programu
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
                Główne punkty Dni Otwartych
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Reveal delay={1}>
              <div className="bg-white border-2 border-accent/30 rounded-xl overflow-hidden shadow-sm h-full">
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <Image src="/machines/multigraf-cf375.jpg" alt="Multigraf Touchline CF375" fill className="object-contain p-4" />
                  <div className="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    Premiera
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">Bigówko-falcerka</p>
                  <h3 className="text-lg font-extrabold text-navy mt-1 mb-2">Nowy Multigraf Touchline CF375</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Szwajcarski system do bigowania i&nbsp;falcowania z&nbsp;technologią Swing-Bar
                    i&nbsp;Pro-Knife. Do 6000 arkuszy/h, gramatura do 400&nbsp;g/m².
                    Porównaj nowy model z&nbsp;poprzednią generacją - oba na miejscu, obok siebie.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="bg-white border-2 border-accent/30 rounded-xl overflow-hidden shadow-sm h-full">
                <div className="relative h-56 bg-gray-100 flex items-center justify-center">
                  <div className="text-center px-6">
                    <svg className="w-16 h-16 text-navy/20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Zdjęcie wkrótce</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    Premiera
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">Klejenie kalendarzy</p>
                  <h3 className="text-lg font-extrabold text-navy mt-1 mb-2">365bind - Półautomat</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Półautomatyczny system do klejenia kalendarzy. Kompaktowy, wydajny
                    i&nbsp;idealny dla drukarni szukających szybkiego wejścia w&nbsp;produkcję kalendarzy.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Pozostałe maszyny ── */}
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-navy bg-navy-light px-3 py-1 rounded-full mb-3">
                Na miejscu u klienta
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
                Co jeszcze zobaczysz na żywo?
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">
                Market Print Global korzysta z&nbsp;maszyn Akonda na co dzień.
                Zobaczysz je w&nbsp;realnej produkcji - nie na wystawie.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <Reveal delay={1}><MachineCard src="/machines/hydrocut.jpg" alt="Hydrocut 52" tag="Krajarka" title="Hydrocut 52" desc="Krajarka hydrauliczna do precyzyjnego cięcia stosów papieru. Przywieziemy specjalnie na event." badge="Dowieziemy" /></Reveal>
            <Reveal delay={2}><MachineCard src="/machines/foliarka-b3.avif" alt="Foliarka" tag="Foliarka" title="Foliarka półautomatyczna" desc="Foliarka do laminowania i uszlachetniania arkuszy. Również przywieziemy na Dni Otwarte." badge="Dowieziemy" /></Reveal>
            <Reveal delay={3}><MachineCard tag="Oklejarka" title="Oklejarka BB3002" desc="Profesjonalna oklejarka do oprawy klejowej - w codziennej pracy u klienta." /></Reveal>
            <Reveal delay={1}><MachineCard src="/machines/cp-bourg-bme.png" alt="C.P. Bourg BM-E" tag="Broszurowanie" title="C.P. Bourg BM-E" desc="Linia broszurująca do automatycznego składania i zszywania. Działa tu na co dzień." /></Reveal>
            <Reveal delay={2}><MachineCard tag="Oprawa twarda" title="Bemini CM-01 / CM-02 / JF-01" desc="Kompletny zestaw do oprawy twardej - od oklejania po prasowanie. Trzy maszyny w jednym flow." /></Reveal>
            <Reveal delay={3}><MachineCard tag="Bigówka (stary model)" title="Multigraf 375 CF" desc="Poprzednia generacja - porównaj ze zupełnie nowym modelem i zobacz różnicę na własne oczy." /></Reveal>
          </div>

          <Reveal>
            <div className="mt-8 text-center">
              <a href="#rejestracja" className="inline-flex items-center h-12 px-8 bg-navy text-white font-bold text-sm rounded-md hover:bg-navy-dark transition-colors">
                Chcę zobaczyć maszyny na żywo&nbsp;→
              </a>
            </div>
          </Reveal>

          {/* ── Serie produktów ── */}
          <Reveal>
            <div className="mt-8 bg-navy-light border border-gray-200 rounded-xl p-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-navy mb-3">Dwie serie produktów Akonda</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-bold text-navy mb-1">Maszyny introligatorskie</p>
                  <p className="text-xs text-gray-500">Bigówki, oklejarki, foliarki, krajarki, linie broszurujące, systemy oprawy twardej, klejenie kalendarzy</p>
                </div>
                <div>
                  <p className="font-bold text-navy mb-1">Plotery tnące</p>
                  <p className="text-xs text-gray-500">iEcho PK 0705 i AK4 - na miejscu u klienta do obejrzenia</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Szczegóły ── */}
      <section className="relative py-16 md:py-24 border-y border-gray-200 overflow-hidden">
        <Image src="/hero-bg.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gray-50/90" />
        <div className="relative mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <div>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-navy bg-navy-light px-3 py-1 rounded-full mb-3">
                  Szczegóły wydarzenia
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
                  2 dni z&nbsp;maszynami w&nbsp;prawdziwej produkcji
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Przyjdź do siedziby Market&nbsp;Print&nbsp;Global i&nbsp;przekonaj się na własne oczy,
                  jak maszyny Akonda pracują na co dzień. Nasi eksperci będą na miejscu,
                  żeby odpowiedzieć na wszystkie pytania.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" /><div><span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Data</span><p className="font-semibold text-navy">27–28 sierpnia 2026 (czwartek – piątek)</p></div></li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" /><div><span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Miejsce</span><p className="font-semibold text-navy">Market Print Global, ul. Fortuny 3A, Warszawa</p></div></li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" /><div><span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Wstęp</span><p className="font-semibold text-navy">Bezpłatny - wymagana rejestracja</p></div></li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" /><div><span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Kontakt</span><p className="font-semibold text-navy">kontakt@akonda.pl</p></div></li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    ["CZW", "27.08", "10:00–16:00"],
                    ["PT", "28.08", "10:00–16:00"],
                  ].map(([day, date, desc], i) => (
                    <div key={i} className="text-center p-8 rounded-xl bg-gray-50 border border-gray-200 transition-all duration-300 hover:border-navy/30 hover:shadow-sm">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{day}</span>
                      <p className="text-3xl md:text-4xl font-extrabold text-navy mt-2">{date}</p>
                      <p className="text-sm text-gray-500 mt-2">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Rejestracja ── */}
      <section id="rejestracja" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-xl px-5">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-navy bg-navy-light px-3 py-1 rounded-full mb-3">
                Bezpłatna rejestracja
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-3">
                Zarezerwuj swoje miejsce
              </h2>
              <p className="text-gray-500 text-sm">
                Wypełnij formularz i&nbsp;otrzymaj potwierdzenie na maila. Liczba miejsc ograniczona.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <RegistrationForm />
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-xs text-gray-400">
            {[
              "3000+ instalacji w Polsce",
              "15+ lat na rynku",
              "Bezpłatny wstęp",
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

      {/* ── Mapa ── */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <div className="text-center mb-8">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-navy bg-navy-light px-3 py-1 rounded-full mb-3">
                Lokalizacja
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-2">
                Jak do nas trafić?
              </h2>
              <p className="text-gray-500 text-sm">Market Print Global, ul. Fortuny 3A, 01-339 Warszawa</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Mapa - Market Print Global, Warszawa"
                src="https://www.google.com/maps?q=Market+Print+Global,+Fortuny+3A,+01-339+Warszawa,+Polska&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-navy py-10">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div>
              <Image src="/akonda-logo.png" alt="Akonda" width={120} height={30} className="h-7 w-auto brightness-0 invert" />
              <p className="opacity-40 text-xs mt-1">Innowacyjne rozwiązania dla introligatorni i&nbsp;uszlachetniania druku</p>
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

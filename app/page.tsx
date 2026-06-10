import Image from "next/image";
import RegistrationForm from "./components/RegistrationForm";
import Reveal from "./components/Reveal";
import MachineCard from "./components/MachineCard";
import { FadeInUp, SlideInRight, Float, CtaGlow } from "./components/HeroAnimations";

export default function Home() {
  return (
    <>
      {/* ── Topbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="h-full mx-auto max-w-5xl px-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/akonda-logo.png" alt="Akonda" width={120} height={30} className="h-7 w-auto" />
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-400 font-semibold border-l border-gray-200 pl-3">
              Dni Otwarte · 24–25.06.2026
            </span>
          </div>
          <a href="#rejestracja" className="h-8 px-4 bg-navy text-white text-xs font-bold rounded-md inline-flex items-center hover:bg-navy-dark transition-colors">
            Zapisz się
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-14">
        <Image src="/spodek-bg.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <FadeInUp delay={0}>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-white/80 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full mb-5">
                  24–25 Czerwca 2026 · Hotel Diament Vacanza · Siemianowice Śląskie
                </span>
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
                  Dni Otwarte<br />
                  <span className="text-white/60">Maszyn Introligatorskich</span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.24}>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                  Zapraszamy na Dni Otwarte maszyn introligatorskich
                  w&nbsp;Hotelu Diament Vacanza w&nbsp;Siemianowicach Śląskich. Zobacz na żywo
                  plotery iEcho&nbsp;PK, gilotyny, bigówki, foliarki i&nbsp;systemy broszurowania.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.36}>
                <div className="flex flex-wrap gap-3">
                  <CtaGlow>
                    <a href="#rejestracja" className="h-11 px-7 bg-white text-navy font-bold text-sm rounded-md inline-flex items-center hover:bg-gray-100 transition-colors">
                      Zarezerwuj miejsce&nbsp;→
                    </a>
                  </CtaGlow>
                  <a href="#maszyny" className="h-11 px-7 border border-white/30 text-white font-semibold text-sm rounded-md inline-flex items-center hover:bg-white/10 transition-colors">
                    Zobacz maszyny
                  </a>
                </div>
              </FadeInUp>
            </div>

            <SlideInRight delay={0.4} className="hidden lg:block lg:col-span-2">
              <Float>
                <div className="relative h-72 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-4">
                  <Image src="/machines/pk-new.webp" alt="iEcho PK0705+" fill className="object-contain drop-shadow-2xl" />
                </div>
              </Float>
              <p className="text-center text-white/50 text-[11px] font-semibold mt-3 uppercase tracking-widest">iEcho PK0705+</p>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-5 py-7 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            ["2", "Dni wydarzenia"],
            ["20+", "Maszyn na żywo"],
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
            <svg className="w-4 h-4 text-navy shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" /></svg>
            <span className="text-sm font-semibold text-navy">Prezentacje maszyn na żywo</span>
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
            <svg className="w-4 h-4 text-navy shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            <span className="text-sm font-semibold text-navy">Plotery tnąco-bigujące na żywo</span>
          </div>
        </div>
      </section>

      {/* ── Maszyny ── */}
      <section id="maszyny" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-navy bg-navy-light px-3 py-1 rounded-full mb-3">
                Na Dniach Otwartych
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
                Co zobaczysz na żywo?
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {/* Plotery */}
            <Reveal delay={1}><MachineCard src="/machines/pk-new.webp" alt="iEcho PK0705+" tag="Ploter tnący" title="iEcho PK0705+" desc="Bestsellerowy ploter z automatycznym podajnikiem arkuszy. Produkcja opakowań, etykiet i wykrojników." /></Reveal>
            <Reveal delay={2}><MachineCard src="/machines/fb3550.jpg" alt="365bind FB3550" tag="Ploter tnąco-bigujący" title="365bind FB3550" desc="Płaski ploter tnąco-bigujący do precyzyjnego cięcia i bigowania arkuszy." /></Reveal>
            {/* Gilotyny */}
            <Reveal delay={3}><MachineCard src="/machines/hydrocut.jpg" alt="Hydrocut 52 Pro" tag="Gilotyna" title="Hydrocut 49 / 52 / 72" desc="Seria gilotyn hydraulicznych do profesjonalnego cięcia. Precyzja i niezawodność." /></Reveal>
            <Reveal delay={1}><MachineCard src="/machines/digicut49.jpg" alt="Digicut 49" tag="Gilotyna" title="Digicut 49" desc="Kompaktowa gilotyna cyfrowa z programowalnym dociskiem i cięciem." /></Reveal>
            {/* Oklejarki */}
            <Reveal delay={2}><MachineCard src="/machines/fastbind-one-handy.webp" alt="Fastbind ONE Handy" tag="Oklejarka" title="Fastbind ONE Handy" desc="Kompaktowa oklejarka do profesjonalnej oprawy twardej i miękkiej." /></Reveal>
            <Reveal delay={3}><MachineCard src="/machines/fastbind-casematic.webp" alt="Fastbind Casematic" tag="Oklejarka" title="Fastbind Casematic" desc="Maszyna do produkcji okładek twardych z precyzyjnym pozycjonowaniem." /></Reveal>
            <Reveal delay={1}><MachineCard src="/machines/oklejarka-pb2000.webp" alt="Oklejarka PB2000" tag="Oklejarka" title="Oklejarka PB2000" desc="Oklejarka do oprawy klejowej z automatycznym podajnikiem i prasą." /></Reveal>
            {/* Bigówka */}
            <Reveal delay={2}><MachineCard src="/machines/ausjetech-338c.png" alt="Ausjetech 338C" tag="Bigówka" title="Ausjetech 338C" desc="Automatyczna bigówka do precyzyjnego bigowania i perforacji arkuszy." /></Reveal>
            {/* Wyciarka */}
            <Reveal delay={3}><MachineCard src="/machines/scc.jpg" alt="Wyciarka SCC" tag="Wyciarka" title="Wyciarka SCC" desc="Kombajn introligatorski do precyzyjnego wykrawania i bigowania." /></Reveal>
            {/* Foliarka */}
            <Reveal delay={1}><MachineCard src="/machines/foliarka-b3.avif" alt="Foliarka B3 365bind" tag="Foliarka" title="Foliarka B3 365bind" desc="Półautomatyczna foliarka w formacie B3 do laminowania i uszlachetniania." /></Reveal>
            {/* Banderolownica */}
            <Reveal delay={2}><MachineCard src="/machines/banderolownica.jpg" alt="Banderolownica WK" tag="Banderolownica" title="Banderolownica WK" desc="Automatyczne banderolowanie produktów papierową lub foliową taśmą." /></Reveal>
            {/* Broszurownica */}
            <Reveal delay={3}><MachineCard src="/machines/broszurownica-oursun.png" alt="Broszurownica Oursun" tag="Broszurowanie" title="Broszurownica Oursun" desc="System broszurowania do automatycznego zszywania i składania dokumentów." /></Reveal>
          </div>

          <Reveal>
            <div className="mt-8 text-center">
              <a href="#rejestracja" className="inline-flex items-center h-12 px-8 bg-navy text-white font-bold text-sm rounded-md hover:bg-navy-dark transition-colors">
                Chcę zobaczyć maszyny na żywo&nbsp;→
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-5 bg-navy-light border border-gray-200 rounded-xl p-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-navy mb-3">Również na Dniach Otwartych</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1.5 text-sm text-gray-600">
                <span>Bigówka 332</span>
                <span>Bigówka 332B Swift Lite</span>
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
                  2 dni z&nbsp;maszynami, które zmieniają branżę
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Przyjdź i&nbsp;przekonaj się na własne oczy, jak nasze maszyny mogą
                  usprawnić Twoją produkcję. Nasi eksperci będą na miejscu, żeby
                  odpowiedzieć na wszystkie pytania.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" /><div><span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Data</span><p className="font-semibold text-navy">24–25 czerwca 2026 (środa – czwartek)</p></div></li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" /><div><span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Miejsce</span><p className="font-semibold text-navy">Hotel Diament Vacanza, Siemianowice Śląskie</p></div></li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" /><div><span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Wstęp</span><p className="font-semibold text-navy">Bezpłatny – wymagana rejestracja</p></div></li>
                  <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" /><div><span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Kontakt</span><p className="font-semibold text-navy">kontakt@akonda.pl</p></div></li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    ["ŚR", "24.06", "Prezentacje"],
                    ["CZW", "25.06", "Prezentacje"],
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
              <p className="text-gray-500 text-sm">Hotel Diament Vacanza, Siemianowice Śląskie</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.449121889864!2d19.020036599999997!3d50.302210200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d192bb19c20d%3A0xbf46a2e9353d70b1!2sRestauracja%20Vacanza%20Siemianowice%20%C5%9Al%C4%85skie!5e0!3m2!1spl!2spl!4v1780066866566!5m2!1spl!2spl"
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
            <p className="text-white/30 text-[11px]">© 2026 Akonda Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

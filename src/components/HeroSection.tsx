import { useEffect, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface ElapsedLoveTime {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  hours: string;
  minutes: string;
  seconds: string;
}

const CRUSH_START_DATE = new Date('2018-11-01T00:00:00');
const CHIT_TL_DATE = new Date('2026-08-26T00:00:00');

function calculateElapsed(): ElapsedLoveTime & { daysSinceChitTl: number } {
  const now = new Date();
  const diffMs = Math.max(0, now.getTime() - CRUSH_START_DATE.getTime());
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const daysSinceChitTl = Math.max(
    0,
    Math.floor((now.getTime() - CHIT_TL_DATE.getTime()) / (1000 * 60 * 60 * 24)),
  );

  let years = now.getFullYear() - CRUSH_START_DATE.getFullYear();
  let months = now.getMonth() - CRUSH_START_DATE.getMonth();
  let days = now.getDate() - CRUSH_START_DATE.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthLastDay;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return { years, months, days, totalDays, daysSinceChitTl, hours, minutes, seconds };
}

export function HeroSection() {
  const [elapsed, setElapsed] = useState(() => calculateElapsed());

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(calculateElapsed());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="story" className="border-b border-[#E5E0D8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#635D57] mb-5">
                Crushing Since Nov 2018 <span aria-hidden="true" className="mx-1.5">·</span> 26 Aug 2026
              </p>

              <h1
                className="font-serif text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.06] font-medium tracking-tight text-[#1A1817] max-w-2xl"
                style={{ textWrap: 'balance' }}
              >
                From November 2018 to the happiest day you said <em className="italic text-[#9E2A2B]">chit tl</em>.
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#46413C] max-w-xl">
                I started crushing on you back in November 2018—missing you, searching for you in
                every quiet hour, and loving you from afar—until 26 August 2026, when you said
                “chit tl” and gave me the very happiest day of my life.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => scrollTo('timeline')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#FAF9F6] bg-[#1A1817] hover:bg-[#322E2B] transition-colors rounded-lg whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1817]"
              >
                Explore Our Timeline
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('gallery')}
                className="text-sm font-medium text-[#1A1817] underline underline-offset-4 decoration-[#D0C8BD] hover:decoration-[#9E2A2B] hover:text-[#9E2A2B] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A2B]"
              >
                View 12 Moments
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <figure className="flex-1 flex flex-col bg-[#F2EFEA] rounded-2xl overflow-hidden border border-[#E5E0D8]">
              <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] lg:min-h-0">
                <ResilientImage
                  src="/assets/aistudio/photo_6323182331170067447_y_fa9eecc4.jpg"
                  alt="Kit standing beside a carved wooden doorway in a white satin button-down shirt"
                  objectPosition="top"
                  fallbackTitle="Kit · Stillness in the Doorway"
                  className="w-full h-full object-cover lg:absolute lg:inset-0"
                />
              </div>
              <figcaption className="px-5 py-3.5 flex items-center justify-between gap-4 border-t border-[#E5E0D8] bg-[#FAF9F6] text-xs text-[#635D57]">
                <span className="font-serif italic text-sm text-[#1A1817]">
                  Fig. 01 — Stillness in the doorway
                </span>
                <span className="whitespace-nowrap shrink-0">Carved teakwood · Kit</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E0D8] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:border-r lg:border-[#E5E0D8] lg:pr-6">
            <p className="text-xs uppercase tracking-widest text-[#635D57]">Crushing Since Nov 2018</p>
            <p className="mt-2 font-serif text-2xl sm:text-3xl font-medium text-[#1A1817] tabular-nums">
              {elapsed.years} yrs · {elapsed.months} mos
            </p>
            <p className="mt-1 text-xs text-[#635D57] tabular-nums">
              {elapsed.totalDays.toLocaleString()} days holding you in heart
            </p>
          </div>

          <div className="lg:border-r lg:border-[#E5E0D8] lg:pr-6">
            <p className="text-xs uppercase tracking-widest text-[#635D57]">The Happiest Day</p>
            <p className="mt-2 font-serif text-2xl sm:text-3xl font-medium text-[#9E2A2B] tabular-nums">
              26 Aug 2026
            </p>
            <p className="mt-1 text-xs text-[#635D57] tabular-nums">
              {elapsed.daysSinceChitTl.toLocaleString()} days since you said chit tl
            </p>
          </div>

          <div className="lg:border-r lg:border-[#E5E0D8] lg:pr-6">
            <p className="text-xs uppercase tracking-widest text-[#635D57]">The Two Words</p>
            <p className="mt-2 font-serif text-2xl sm:text-3xl font-medium text-[#1A1817] italic">
              Chit tl <span className="not-italic text-xl text-[#635D57]">(ချစ်တယ်)</span>
            </p>
            <p className="mt-1 text-xs text-[#635D57]">Worth every year of searching for you</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#635D57]">Thinking of You Now</p>
            <p className="mt-2 font-serif text-2xl sm:text-3xl font-medium text-[#1A1817] tabular-nums">
              {elapsed.hours}:{elapsed.minutes}:{elapsed.seconds}
            </p>
            <p className="mt-1 text-xs text-[#635D57]">Missing & loving you every single day</p>
          </div>
        </div>
      </div>
    </section>
  );
}

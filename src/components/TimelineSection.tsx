import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { TIMELINE_CHAPTERS } from '../data/kitStory';
import { ResilientImage } from './ResilientImage';

const KEPT_STORAGE_KEY = 'kit-kept-memories-v1';

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [keptChapters, setKeptChapters] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(KEPT_STORAGE_KEY);
      return raw ? JSON.parse(raw) : { 'nov-2018': true, 'aug-26-2026': true };
    } catch {
      return { 'nov-2018': true, 'aug-26-2026': true };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEPT_STORAGE_KEY, JSON.stringify(keptChapters));
    } catch {
      // Ignore storage quota errors
    }
  }, [keptChapters]);

  const activeChapter = TIMELINE_CHAPTERS[activeIndex];
  const isKept = Boolean(keptChapters[activeChapter.id]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE_CHAPTERS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < TIMELINE_CHAPTERS.length - 1 ? prev + 1 : 0));
  };

  const toggleKeepMemory = (id: string) => {
    setKeptChapters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="timeline" className="border-b border-[#E5E0D8] bg-[#F2EFEA]/45">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#635D57] mb-3">
              Interactive Timeline <span aria-hidden="true" className="mx-1.5">·</span> Nov 2018 to 26 Aug 2026
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-[#1A1817]"
              style={{ textWrap: 'balance' }}
            >
              From a quiet crush to the day you said <em className="italic text-[#9E2A2B]">chit tl</em>
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous chapter"
              className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-[#D8D1C7] bg-[#FAF9F6] text-[#1A1817] hover:border-[#1A1817] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 text-xs font-medium text-[#635D57] tabular-nums whitespace-nowrap">
              {activeIndex + 1} / {TIMELINE_CHAPTERS.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next chapter"
              className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-[#D8D1C7] bg-[#FAF9F6] text-[#1A1817] hover:border-[#1A1817] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Timeline Chapter Rail */}
        <div
          role="tablist"
          aria-label="Timeline chapters"
          className="flex items-center gap-1.5 p-1.5 bg-[#EBE6DF] rounded-xl overflow-x-auto mb-10"
        >
          {TIMELINE_CHAPTERS.map((chapter, idx) => {
            const active = idx === activeIndex;
            const kept = Boolean(keptChapters[chapter.id]);
            return (
              <button
                key={chapter.id}
                id={`tab-${chapter.id}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`panel-${chapter.id}`}
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    handleNext();
                  } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    handlePrev();
                  }
                }}
                className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-lg text-left transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B] ${
                  active
                    ? 'bg-[#FAF9F6] text-[#1A1817] shadow-sm'
                    : 'text-[#635D57] hover:text-[#1A1817]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium tracking-wider uppercase opacity-75 tabular-nums">
                    {chapter.indexLabel}
                  </span>
                  {kept && (
                    <Heart
                      className="w-3 h-3 text-[#9E2A2B] fill-[#9E2A2B] shrink-0"
                      aria-label="Saved favorite chapter"
                    />
                  )}
                </div>
                <div className="text-xs sm:text-sm font-medium mt-0.5 truncate">
                  {chapter.shortLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Stage */}
        <div
          key={activeChapter.id}
          id={`panel-${activeChapter.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeChapter.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-[#FAF9F6] rounded-2xl border border-[#E5E0D8] p-5 sm:p-8"
        >
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[340px] sm:min-h-[420px] rounded-xl overflow-hidden bg-[#F2EFEA]">
              <ResilientImage
                src={activeChapter.image}
                alt={activeChapter.imageAlt}
                objectPosition={activeChapter.objectPosition}
                fallbackTitle={activeChapter.period}
                className="w-full h-full object-cover lg:absolute lg:inset-0 transition-transform duration-500 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between py-1">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#635D57] mb-4">
                <span className="font-medium text-[#9E2A2B]">{activeChapter.period}</span>
                <span aria-hidden="true">·</span>
                <span>{activeChapter.location}</span>
              </div>

              <h3
                className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#1A1817] leading-tight"
                style={{ textWrap: 'balance' }}
              >
                {activeChapter.title}
              </h3>

              <p className="mt-2 font-serif italic text-lg text-[#635D57]">
                {activeChapter.subtitle}
              </p>

              <div className="mt-6 space-y-4 text-[15px] sm:text-base leading-relaxed text-[#35312D] max-w-2xl">
                {activeChapter.story.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E0D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-serif italic text-base sm:text-lg text-[#1A1817] max-w-md">
                “{activeChapter.whisper}”
              </p>

              <button
                type="button"
                onClick={() => toggleKeepMemory(activeChapter.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B] ${
                  isKept
                    ? 'bg-[#9E2A2B]/10 border-[#9E2A2B]/30 text-[#9E2A2B]'
                    : 'bg-[#FAF9F6] border-[#D8D1C7] text-[#1A1817] hover:border-[#9E2A2B]'
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${isKept ? 'fill-[#9E2A2B] text-[#9E2A2B]' : ''}`}
                />
                {isKept ? 'Saved in Heart' : 'Keep This Memory'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

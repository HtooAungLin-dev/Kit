import { useEffect, useState } from 'react';
import { Heart, Printer, Send } from 'lucide-react';
import { LOVE_LETTER_PARAGRAPHS } from '../data/kitStory';
import { ResilientImage } from './ResilientImage';

const REPLY_STORAGE_KEY = 'kit-letter-keepsake-v1';

interface KeepsakeState {
  heartsCount: number;
  note: string;
  savedAt: string | null;
}

export function LoveLetterSection() {
  const [keepsake, setKeepsake] = useState<KeepsakeState>(() => {
    try {
      const raw = localStorage.getItem(REPLY_STORAGE_KEY);
      return raw ? JSON.parse(raw) : { heartsCount: 1, note: '', savedAt: null };
    } catch {
      return { heartsCount: 1, note: '', savedAt: null };
    }
  });

  const [draftNote, setDraftNote] = useState(keepsake.note);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(REPLY_STORAGE_KEY, JSON.stringify(keepsake));
    } catch {
      // Ignore storage errors
    }
  }, [keepsake]);

  const handleSendHeart = () => {
    setKeepsake((prev) => ({
      ...prev,
      heartsCount: prev.heartsCount + 1,
    }));
  };

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = draftNote.trim();
    if (!trimmed) return;
    setKeepsake((prev) => ({
      ...prev,
      note: trimmed,
      savedAt: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    }));
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2500);
  };

  return (
    <section id="letter" className="border-b border-[#E5E0D8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 lg:py-24">
        <div className="border-b border-[#E5E0D8] pb-8 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#635D57] mb-3">
              Love Letter <span aria-hidden="true" className="mx-1.5">·</span> Written for Kit
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1817]"
              style={{ textWrap: 'balance' }}
            >
              My Dearest Kit,
            </h2>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D8D1C7] bg-[#FAF9F6] text-xs font-medium text-[#1A1817] hover:border-[#1A1817] transition-colors whitespace-nowrap shrink-0 cursor-pointer print:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B]"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Letter
          </button>
        </div>

        {/* 70/30 Asymmetric Editorial Reading Canvas */}
        <div className="space-y-12">
          {LOVE_LETTER_PARAGRAPHS.map((para, idx) => (
            <div
              key={para.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:col-span-8 max-w-2xl">
                <p
                  className={`text-base sm:text-[17px] leading-[1.85] text-[#292524] ${
                    idx === 0
                      ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-medium first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:leading-none first-letter:text-[#9E2A2B]'
                      : ''
                  }`}
                >
                  {para.text}
                </p>
              </div>

              {para.marginNote ? (
                <aside className="lg:col-span-4 lg:pt-1">
                  <div className="bg-[#F2EFEA] rounded-xl p-4 border border-[#E5E0D8] flex items-start gap-4">
                    {para.marginNote.image && (
                      <div className="w-16 h-20 rounded-lg overflow-hidden shrink-0 bg-[#EBE6DF]">
                        <ResilientImage
                          src={para.marginNote.image}
                          alt={para.marginNote.imageAlt || para.marginNote.label}
                          objectPosition="top"
                          fallbackTitle={para.marginNote.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-widest font-medium text-[#9E2A2B] mb-1">
                        {para.marginNote.label}
                      </p>
                      <p className="text-xs leading-relaxed text-[#46413C] font-serif italic text-sm">
                        {para.marginNote.caption}
                      </p>
                    </div>
                  </div>
                </aside>
              ) : (
                <div className="hidden lg:block lg:col-span-4" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* Pull Quote & Signature */}
        <div className="mt-16 pt-10 pb-10 border-t border-b border-[#E5E0D8] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <blockquote className="lg:col-span-8 max-w-2xl">
            <p className="font-serif italic text-2xl sm:text-3xl leading-snug text-[#1A1817]">
              “Crushing on you since November 2018, and hearing you say ‘chit tl’ on 26 August
              2026—the very happiest day of my life.”
            </p>
          </blockquote>

          <div className="lg:col-span-4 lg:text-right">
            <p className="font-serif italic text-xl text-[#635D57]">Forever loving you,</p>
            <p className="mt-1 font-serif text-2xl font-medium text-[#1A1817]">
              Yours, every day
            </p>
          </div>
        </div>

        {/* Interactive Keepsake Note for Kit */}
        <div className="mt-12 bg-[#F2EFEA]/70 rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 print:hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-widest text-[#635D57] mb-2">
                Keepsake Corner
              </p>
              <h3 className="font-serif text-2xl font-medium text-[#1A1817]">
                If you are reading this, Kit
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#46413C]">
                Tap the heart whenever you miss me too, or leave a little note here for yourself
                and me to find later.
              </p>

              <div className="mt-5 flex items-center gap-4">
                <button
                  type="button"
                  onClick={handleSendHeart}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#9E2A2B] hover:bg-[#822122] text-[#FAF9F6] text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B]"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  Chit tl too
                </button>
                <span className="text-xs text-[#635D57] tabular-nums">
                  {keepsake.heartsCount} {keepsake.heartsCount === 1 ? 'heart' : 'hearts'} kept
                  here
                </span>
              </div>
            </div>

            <form onSubmit={handleSaveNote} className="lg:col-span-7 space-y-3">
              <label
                htmlFor="kit-keepsake-note"
                className="block text-xs font-medium text-[#1A1817]"
              >
                Leave a quiet note or reply
              </label>
              <textarea
                id="kit-keepsake-note"
                rows={3}
                value={draftNote}
                onChange={(e) => setDraftNote(e.target.value)}
                placeholder="Write a line back whenever you feel like it..."
                className="w-full rounded-xl border border-[#D8D1C7] bg-[#FAF9F6] px-4 py-3 text-sm text-[#1A1817] placeholder:text-[#8A827A] focus:outline-none focus:border-[#9E2A2B]"
              />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-[#635D57]">
                  {justSaved
                    ? 'Saved safely to this page.'
                    : keepsake.savedAt
                      ? `Last note saved on ${keepsake.savedAt}`
                      : 'Saved privately in this browser.'}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1817] hover:bg-[#322E2B] text-[#FAF9F6] text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1817]"
                >
                  <Send className="w-3.5 h-3.5" />
                  Keep Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { GallerySection } from './components/GallerySection';
import { LoveLetterSection } from './components/LoveLetterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1817]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#1A1817] focus:text-[#FAF9F6] focus:text-xs focus:font-medium"
      >
        Skip to content
      </a>

      <TopNav />

      <main id="main-content">
        <HeroSection />
        <TimelineSection />
        <GallerySection />
        <LoveLetterSection />
      </main>

      <footer className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#635D57] print:hidden">
        <p>Written for Kit · Crushing since Nov 2018 · Chit tl on 26 Aug 2026</p>
        <a
          href="#story"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-[#1A1817] hover:text-[#9E2A2B] underline underline-offset-4 decoration-[#D0C8BD] transition-colors whitespace-nowrap"
        >
          Back to top
        </a>
      </footer>
    </div>
  );
}

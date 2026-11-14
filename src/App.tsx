import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { GallerySection } from './components/GallerySection';
import { LoveLetterSection } from './components/LoveLetterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1817]">
      <TopNav />

      <main>
        <HeroSection />
        <TimelineSection />
        <GallerySection />
        <LoveLetterSection />
      </main>

      <footer className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#635D57]">
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

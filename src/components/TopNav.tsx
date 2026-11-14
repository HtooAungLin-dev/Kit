import { useEffect, useState } from 'react';

export function TopNav() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      setScrollProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/92 backdrop-blur-md border-b border-[#E5E0D8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between gap-8">
        <a
          href="#story"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('story');
          }}
          className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#1A1817] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A2B]"
        >
          For Kit
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#635D57]"
        >
          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('story');
            }}
            className="hover:text-[#1A1817] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A2B]"
          >
            Story
          </a>
          <a
            href="#timeline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('timeline');
            }}
            className="hover:text-[#1A1817] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A2B]"
          >
            Timeline
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('gallery');
            }}
            className="hover:text-[#1A1817] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A2B]"
          >
            Gallery
          </a>
          <a
            href="#letter"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('letter');
            }}
            className="hover:text-[#1A1817] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E2A2B]"
          >
            Letter
          </a>
        </nav>

        <div className="shrink-0">
          <button
            type="button"
            onClick={() => scrollToSection('letter')}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-[#FAF9F6] bg-[#9E2A2B] hover:bg-[#822122] transition-colors rounded-lg whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B]"
          >
            Read the Letter
          </button>
        </div>
      </div>

      <div className="h-[2px] w-full bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-[#9E2A2B] transition-transform duration-150 ease-out origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>
    </header>
  );
}

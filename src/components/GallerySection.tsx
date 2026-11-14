import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryCategory, GalleryPhoto } from '../data/kitStory';
import { ResilientImage } from './ResilientImage';

const CATEGORIES: GalleryCategory[] = [
  'All',
  'Portraits',
  'Coffee & Cafes',
  'Outings',
  'Candid',
];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const activeLightboxIndex = useMemo(() => {
    if (!lightboxPhoto) return -1;
    return filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
  }, [filteredPhotos, lightboxPhoto]);

  useEffect(() => {
    if (!lightboxPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxPhoto(null);
      } else if (e.key === 'ArrowRight') {
        const nextIdx = (activeLightboxIndex + 1) % filteredPhotos.length;
        setLightboxPhoto(filteredPhotos[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx =
          (activeLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setLightboxPhoto(filteredPhotos[prevIdx]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPhoto, activeLightboxIndex, filteredPhotos]);

  const openNext = () => {
    if (filteredPhotos.length === 0) return;
    const nextIdx = (activeLightboxIndex + 1) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[nextIdx]);
  };

  const openPrev = () => {
    if (filteredPhotos.length === 0) return;
    const prevIdx =
      (activeLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[prevIdx]);
  };

  return (
    <section id="gallery" className="border-b border-[#E5E0D8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#635D57] mb-3">
              Heartfelt Archive <span aria-hidden="true" className="mx-1.5">·</span> 12 Photographs
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-[#1A1817]"
              style={{ textWrap: 'balance' }}
            >
              The photographs I come back to when I miss you
            </h2>
          </div>

          <div
            role="group"
            aria-label="Filter photo gallery"
            className="flex items-center gap-1 p-1 bg-[#EBE6DF] rounded-xl overflow-x-auto max-w-full"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B] ${
                    active
                      ? 'bg-[#FAF9F6] text-[#1A1817] shadow-sm'
                      : 'text-[#635D57] hover:text-[#1A1817]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Media-First Bento / Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => {
            const isFeatured = selectedCategory === 'All' && photo.featured;
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxPhoto(photo)}
                className={`group text-left flex flex-col bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E5E0D8] hover:border-[#C6BEB3] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B] ${
                  isFeatured ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden bg-[#F2EFEA] ${
                    isFeatured ? 'aspect-[4/4.3]' : 'aspect-[4/4.6]'
                  }`}
                >
                  <ResilientImage
                    src={photo.src}
                    alt={photo.alt}
                    objectPosition={photo.objectPosition}
                    fallbackTitle={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-4"
                    aria-hidden="true"
                  >
                    <span className="text-xs font-medium text-white/95 line-clamp-2 max-w-[85%]">
                      {photo.note}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/90 text-[#1A1817] inline-flex items-center justify-center shrink-0">
                      <Expand className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-1 border-t border-[#E5E0D8]">
                  <div className="flex items-center justify-between gap-2 text-[11px] text-[#635D57]">
                    <span className="tabular-nums">{photo.figure}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{photo.category}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1A1817] group-hover:text-[#9E2A2B] transition-colors truncate">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#635D57] truncate">{photo.moment}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxPhoto.title}
          className="fixed inset-0 z-50 bg-[#12100F]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E5E0D8] grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close photo viewer"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg bg-[#1A1817] text-[#FAF9F6] hover:bg-[#9E2A2B] transition-colors inline-flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="lg:col-span-7 bg-[#1A1817] flex items-center justify-center min-h-[300px] max-h-[55vh] lg:max-h-[85vh]">
              <ResilientImage
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                objectPosition="center"
                fallbackTitle={lightboxPhoto.title}
                className="w-full h-full object-contain max-h-[55vh] lg:max-h-[85vh]"
              />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#635D57] mb-3 pr-10">
                  <span className="font-medium text-[#9E2A2B] tabular-nums">
                    {lightboxPhoto.figure}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{lightboxPhoto.category}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1817]">
                  {lightboxPhoto.title}
                </h3>

                <p className="mt-1 text-xs text-[#635D57]">{lightboxPhoto.moment}</p>

                <div className="mt-6 pt-6 border-t border-[#E5E0D8]">
                  <p className="text-base leading-relaxed text-[#35312D] font-serif italic text-xl">
                    “{lightboxPhoto.note}”
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E0D8] flex items-center justify-between gap-4">
                <span className="text-xs text-[#635D57] tabular-nums">
                  {activeLightboxIndex + 1} of {filteredPhotos.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={openPrev}
                    aria-label="Previous photo"
                    className="px-3.5 py-2 rounded-lg border border-[#D8D1C7] text-xs font-medium text-[#1A1817] hover:border-[#1A1817] inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={openNext}
                    aria-label="Next photo"
                    className="px-3.5 py-2 rounded-lg border border-[#D8D1C7] text-xs font-medium text-[#1A1817] hover:border-[#1A1817] inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import { useState } from 'react';
import { Heart } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: 'center' | 'top';
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  objectPosition = 'center',
  fallbackTitle = 'Memory',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#F2EFEA] text-[#635D57] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Heart className="w-5 h-5 text-[#9E2A2B]/60 mb-2" strokeWidth={1.5} />
        <span className="font-serif italic text-base text-[#1A1817]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`${objectPosition === 'top' ? 'object-top' : 'object-center'} ${className}`}
    />
  );
}

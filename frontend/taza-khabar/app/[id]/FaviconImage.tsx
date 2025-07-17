"use client";

interface FaviconImageProps {
  hostname: string;
  className?: string;
}

export default function FaviconImage({
  hostname,
  className = "w-6 h-6 rounded",
}: FaviconImageProps) {
  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${hostname}&sz=24`}
      alt={`${hostname} favicon`}
      className={className}
      onError={(e) => {
        e.currentTarget.src = `https://favicon.im/${hostname}?larger=true`;
      }}
    />
  );
}

// components/CenteredImage.tsx

import React from "react";

interface CenteredImageProps {
  src: string;
  alt: string;
}

const CenteredImage: React.FC<CenteredImageProps> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full  bg-green-500">
      <img src={src} alt={alt} className="max-w-full max-h-full" />
    </div>
  );
};

export default CenteredImage;

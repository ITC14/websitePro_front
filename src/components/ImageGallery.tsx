import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
  onClose: () => void;
}

const ImageGallery = ({ images, title, onClose }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
      >
        <X size={24} />
      </button>

      {/* Title */}
      <div className="absolute top-4 left-4 z-10 text-white text-lg font-semibold">
        {title}
      </div>

      {/* Main image container */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Previous button */}
        {images.length > 1 && (
          <button
            onClick={previousImage}
            className="absolute left-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Image */}
        <div className="relative max-w-4xl max-h-full">
          <img
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain ${
              isFullscreen ? 'cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={toggleFullscreen}
          />
          
          {/* Zoom indicator */}
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          >
            <ZoomIn size={20} />
          </button>
        </div>

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === index
                  ? 'border-white'
                  : 'border-transparent hover:border-gray-400'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Keyboard navigation */}
      <div className="absolute bottom-4 right-4 text-white text-xs opacity-70">
        Utilisez ← → pour naviguer
      </div>
    </div>
  );
};

export default ImageGallery; 
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageData {
  src: string;
  width: number;
  height: number;
  orientation: 'landscape' | 'portrait' | 'square';
}

export default function PolaroidGallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch('/api/gallery-images');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadImages();
  }, []);

  // Polaroid style and randomization helpers
  const getPolaroidSize = (orientation: string) => {
    const base = 120 + Math.random() * 40;
    switch (orientation) {
      case 'landscape':
        return { width: base * 1.3, height: base };
      case 'portrait':
        return { width: base, height: base * 1.3 };
      default:
        return { width: base, height: base };
    }
  };
  const getRandomTransform = () => ({
    rotate: Math.random() * 16 - 8,
    x: Math.random() * 20 - 10,
    y: Math.random() * 20 - 10,
  });

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-[400px]">Loading gallery...</div>;
  }

  return (
    <div className="relative w-full min-h-[600px] py-8">
      {/* Desktop: Messy flex-wrap layout */}
      <div className="hidden md:flex relative w-full h-full flex-wrap justify-center items-center gap-4">
        {images.map((img, i) => {
          const size = getPolaroidSize(img.orientation);
          const transform = getRandomTransform();
          return (
            <motion.div
              key={img.src}
              className="polaroid-frame cursor-pointer select-none"
              style={{
                width: size.width,
                height: size.height,
                margin: '16px',
                zIndex: 1,
              }}
              initial={{ rotate: 0, x: 0, y: 0, opacity: 0 }}
              animate={{ ...transform, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: i * 0.03 }}
              whileHover={{ scale: 1.07, zIndex: 10, boxShadow: '0 8px 32px 0 rgba(80,0,120,0.18)' }}
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative w-full h-full bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col items-center justify-center polaroid-inner">
                <Image
                  src={img.src}
                  alt="Polaroid photo"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 600px) 90vw, 200px"
                />
                <div className="w-full text-center text-xs text-gray-500 font-mono pt-2 pb-1 bg-white rounded-b-lg">OJT</div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Mobile/Tablet: Grid layout, 2-3 per row, messy look */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:hidden w-full">
        {images.map((img, i) => {
          const transform = getRandomTransform();
          return (
            <motion.div
              key={img.src}
              className="polaroid-frame cursor-pointer select-none w-full aspect-[3/4] max-w-[140px] mx-auto"
              style={{
                zIndex: 1,
              }}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: transform.rotate, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: i * 0.03 }}
              whileHover={{ scale: 1.07, zIndex: 10, boxShadow: '0 8px 32px 0 rgba(80,0,120,0.18)' }}
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative w-full h-full bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col items-center justify-center polaroid-inner">
                <Image
                  src={img.src}
                  alt="Polaroid photo"
                  fill
                  className="object-contain p-2"
                  sizes="50vw"
                />
                <div className="w-full text-center text-xs text-gray-500 font-mono pt-2 pb-1 bg-white rounded-b-lg">OJT</div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative flex flex-col items-center justify-center w-full h-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col items-center w-full">
                {/* Close button centered above the image, slightly overlapping */}
                <button
                  className="relative z-20 -mb-5 md:-mb-6 mx-auto flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 text-white shadow-lg hover:bg-black/90 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                  style={{ top: '0.5rem' }}
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 md:w-7 md:h-7" />
                </button>
                <div className="flex items-center justify-center w-full h-full">
                  <div className="relative bg-white rounded-lg flex items-center justify-center overflow-hidden"
                    style={{ maxWidth: '90vw', maxHeight: '70vh' }}
                  >
                    <Image
                      src={selectedImage.src}
                      alt="Selected image"
                      width={selectedImage.width}
                      height={selectedImage.height}
                      className="object-contain w-full h-full max-w-[90vw] max-h-[70vh]"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{`
        .polaroid-frame {
          box-shadow: 0 4px 16px 0 rgba(0,0,0,0.12), 0 1.5px 6px 0 rgba(0,0,0,0.10);
          border-radius: 12px;
          background: #fff;
          transition: box-shadow 0.2s;
        }
        .polaroid-inner {
          border-radius: 12px;
          overflow: hidden;
        }
        @media (max-width: 600px) {
          .polaroid-frame {
            width: 90vw !important;
            height: auto !important;
            margin: 8px !important;
          }
        }
      `}</style>
    </div>
  );
} 
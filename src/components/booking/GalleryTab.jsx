import React, { useState } from 'react';

const GalleryTab = () => {
  const galleryImages = [
    { id: 1, src: '/assets/book-img.png', alt: 'DJ John Main' },
    { id: 2, src: '/assets/book-img.png', alt: 'DJ Event 1' },
    { id: 3, src: '/assets/book-img.png', alt: 'DJ Event 2' },
    { id: 4, src: '/assets/book-img.png', alt: 'DJ Event 3' },
  ];
  
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Image Selector - Vertical on desktop, no scroll */}
      <div className="flex flex-row lg:flex-col gap-3 lg:gap-4">
        {galleryImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg cursor-pointer shadow-md transition-all hover:shadow-lg ${
              selectedImage.id === image.id ? 'ring-2 ring-pink-500 scale-105' : 'hover:ring-2 hover:ring-gray-300'
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Main Display Area */}
      <div className="flex-1 relative bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 rounded-2xl overflow-hidden shadow-2xl min-h-[400px] lg:min-h-[500px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-20 transform -skew-y-6 scale-110"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Biography */}
            <div className="text-white space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-wider">DJ JOHN</h2>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">BIOGRAPHY</h3>
                <div className="text-sm leading-relaxed space-y-2">
                  <p>He first became interested in the electronic music scene in 2001 in 1999, aged 18, his mum and dad bought him his first set of decks. At the age of 17, he was already being touted as 'FUTURE' answer to camo and krooked</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Discography */}
            <div className="text-white space-y-4">
              <h3 className="text-2xl font-semibold">DISCOGRAPHY</h3>
              <div className="space-y-2 text-sm">
                <p>2009 - Bank fault</p>
                <p>2010 - Pushing buttons</p>
                <p>2014 - Criss cross</p>
                <p>2015 - Rocket science</p>
                <p>2020 - Chaos theory</p>
                <p>2022 - Cold shoulder</p>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-2">NEW RELEASE</h4>
              </div>
            </div>
          </div>
          
          {/* Play Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-6 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryTab;


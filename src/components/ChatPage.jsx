'use client'

import React, { useState } from 'react'
import ImageLightBox from './ImageLightBox';
import { images } from '@/lib/data';

const ChatPage = () => {
  const [lightBoxOpen, setLightBoxOpen] = useState(false)

  const maxVisibleImages = 4;
  const imagesToShow = images.slice(0, maxVisibleImages);

  return (
    <>
      <h1>React Image Gallery LightBox</h1>
      <div className='w-[600px] h-[450px] flex flex-wrap gap-1 mt-7 cursor-pointer'
        onClick={() => setLightBoxOpen(true)}
      >
        {
          imagesToShow.map((image, index) => {
            if (index === maxVisibleImages - 1 && images.length > maxVisibleImages) {
              return (
                <div className='relative' key={image.id}>
                  <img src={image.src} alt={image.id} className='w-[298px] h-[224px] rounded-xl' />
                  <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl'>
                    <span className='text-white text-2xl font-bold'>+{images.length - maxVisibleImages}</span>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={image.id}>
                  <img src={image.src} alt={image.id} className='w-[298px] h-[224px] rounded-xl' />
                </div>
              );
            }
          })
        }
      </div>

      {
        lightBoxOpen && (
          <ImageLightBox
            open={lightBoxOpen}
            onClose={() => setLightBoxOpen(false)}
            images={images}
          />
        )
      }
    </>
  );
};

export default ChatPage;

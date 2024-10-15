import React, { useState } from 'react';
import { Camera, ExternalLink } from 'lucide-react';

const IOSQRPreview = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="relative w-64 h-[500px] bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-gray-300">
        <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-3xl"></div>
        <div className="absolute top-6 left-0 right-0 h-20 bg-gray-200 flex items-center justify-center text-black font-bold">
          Camera
        </div>
        <div className="absolute top-26 left-0 right-0 bottom-0 bg-gray-800 flex items-center justify-center">
          <div 
            className="w-40 h-40 bg-white flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Camera size={100} color="black" />
          </div>
          {isHovering && (
            <div className="absolute bottom-20 left-4 right-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">QR Code Preview</span>
                <ExternalLink size={16} />
              </div>
              <p className="text-sm mb-2">example.com/landing-page</p>
              <p className="text-xs text-gray-500">Tap to open or swipe up for more info</p>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 rounded-b-3xl"></div>
      </div>
    </div>
  );
};

export default IOSQRPreview;

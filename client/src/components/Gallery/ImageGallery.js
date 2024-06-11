import React, { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

const PlaceGallery = ({ picture1, picture2, picture3, picture4, picture5 }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const pictures = [picture1, picture2, picture3, picture4, picture5].filter(Boolean);

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 z-20 overflow-auto bg-black text-white">
        <div className="grid gap-4 bg-black px-2 py-20 md:p-8">
          <div>
            <button
              className="fixed right-2 top-8 flex gap-1 rounded-2xl bg-white py-2 px-4 text-black shadow-sm shadow-gray-500 md:right-12"
              onClick={() => setShowAllPhotos(false)}
            >
              <CloseOutlinedIcon />
              Close photos
            </button>
          </div>
          <div className="max-w-full">
            {pictures.map((pic, index) => (
              <img key={index} src={pic} alt={`Gallery Pictures ${index + 1}`} className="w-full mb-4" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Medium devices */}
      <div className="hidden h-[400px] max-h-[450px] grid-cols-4 gap-2 overflow-hidden rounded-[12px] md:grid">
        {pictures.slice(0, 5).map((pic, index) => (
          <div key={index} className={`col-span-${index === 0 ? '2' : '1'} overflow-hidden`}>
            <div className="h-full w-full overflow-hidden bg-gray-200">
              <img
                onClick={() => setShowAllPhotos(true)}
                className="h-full w-full cursor-pointer object-cover"
                src={pic}
                alt={`Gallery Thumbnail ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile devices */}
      <div className="flex overflow-hidden rounded-[12px] md:hidden">
        {picture1 && (
          <div className="h-full">
            <img
              onClick={() => setShowAllPhotos(true)}
              className="h-full w-full cursor-pointer object-cover"
              src={picture1}
              alt="Gallery Thumbnail Mobile"
            />
          </div>
        )}
      </div>

      <button
        className="absolute bottom-2 right-2 flex gap-1 rounded-xl bg-white py-2 px-4 shadow-md shadow-gray-500"
        onClick={() => setShowAllPhotos(true)}
      >
        <InsertPhotoOutlinedIcon />
        Show all photos
      </button>
    </div>
  );
};

export default PlaceGallery;

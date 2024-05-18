import React, { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

const PlaceGallery = ({ picture1,picture2,picture3,picture4,picture5 }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 z-20 overflow-auto bg-white text-white">
        <div className="grid gap-4 bg-white px-2 py-20 md:p-8">
          <div>
            <button
              className="fixed right-2 top-8 flex gap-1 rounded-2xl bg-white py-2 px-4 text-black shadow-sm shadow-gray-500 md:right-12"
              onClick={() => setShowAllPhotos(false)}
            >
              <CloseOutlinedIcon/>
              Close photos
            </button>
          </div>
              <div className="max-w-full">
                <img src={picture1} alt="" />
                <img src={picture2} alt="" />
                <img src={picture3} alt="" />
                <img src={picture4} alt="" />
                <img src={picture5} alt="" />
              </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
      {/* Medium devices */}
      <div className="hidden h-[400px] max-h-[450px] grid-cols-4 gap-2 overflow-hidden rounded-[12px] md:grid">
        {/* column 1 */}
        <div className="col-span-2 overflow-hidden">
          {picture1 && (
            <div className="h-full w-full overflow-hidden bg-red-200">
              <img
                onClick={() => setShowAllPhotos(true)}
                className="h-full w-full cursor-pointer object-cover"
                src={picture1}
                alt=""
              />
            </div>
          )}
        </div>
        {/* column 2 */}
        <div className="col-span-1 overflow-hidden">
          {/* row grid inside column 2 */}
          <div className="grid h-full grid-rows-2 gap-2">
            {picture2 && (
              // row 1
              <div className="bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  src={picture2}
                  alt=""
                />
              </div>
            )}

            {picture3 && (
              // row 2
              <div className="bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  src={picture3}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        {/* column 3 */}
        <div className="col-span-1 overflow-hidden">
          {/* row grid inside column 3 */}
          <div className="grid h-full grid-rows-2 gap-2">
            {picture4 && (
              // row 1
              <div className="h-full bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  src={picture4}
                  alt=""
                />
              </div>
            )}

            {picture5 && (
              // row 2
              <div className="h-full bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  src={picture5}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile devices */}
      <div className="flex overflow-hidden rounded-[12px] md:hidden">
        {picture1 && (
          <div className="h-full">
            <img
              onClick={() => setShowAllPhotos(true)}
              className="h-full cursor-pointer object-cover"
              src={picture1}
              alt=""
            />
          </div>
        )}
      </div>

      <button
        className="absolute bottom-2 right-2 flex gap-1 rounded-xl bg-white py-2 px-4 shadow-md shadow-gray-500 "
        onClick={() => setShowAllPhotos(true)}
      >
        <InsertPhotoOutlinedIcon/>
        Show all photos
      </button>
    </div>
  );
};

export default PlaceGallery;

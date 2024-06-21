import React from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const AddressLink = ({ placeAddress, className = null }) => {
  if (!className) {
    className = 'my-3 block text-blue-400';
  }

  className += ' flex gap-1 font-semibold underline';
  return (
    <a
      className={className}
      href={`https://maps.google.com/?q=${placeAddress}`}
      target="blank"
    >
        <PlaceOutlinedIcon className='h-6 w-6'/>
      {placeAddress}
    </a>
  );
};

export default AddressLink;

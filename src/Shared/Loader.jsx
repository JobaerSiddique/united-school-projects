import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <CircleLoader
  color="#0eccf6"
  cssOverride={{}}
  loading
  size={300}
  speedMultiplier={1}
  
/>
        </div>
    );
};

export default Loader;
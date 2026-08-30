import React from 'react';

export const Logo = ({ ht = 36, wd, white = false, iconOnly = false, variant = 'default' }) => {
  return (
    <img 
      src="/PNG-PET.png" 
      alt="PET FEA USP" 
      style={{ 
        height: ht,
        width: wd,
        objectFit: 'contain'
      }} 
    />
  );
};

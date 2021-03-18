/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const HoverBox = ({ children, sxx, onClick }) => {
  return (
    <div
      sx={{
        variant: 'gradients.orange1',
        ...sxx,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default HoverBox;

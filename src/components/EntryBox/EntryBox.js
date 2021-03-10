/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { Waypoint } from 'react-waypoint';
// import styles from './EntryBox.module.css';

const EntryBox = ({ children, direction = 'left', sxx }) => {
  const [entered, setEntered] = useState(false);
  return (
    <div
      sx={{
        transform: `translateX(${entered ? 0 : direction === 'right' ? 100 : -100}%)`,
        transition: 'transform 0.6s ease',
        ...sxx,
      }}
    >
      <Waypoint onEnter={() => setEntered(true)} />
      {children}
    </div>
  );
};
export default EntryBox;

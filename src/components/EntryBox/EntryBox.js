/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { Waypoint } from 'react-waypoint';
// import styles from './EntryBox.module.css';

const EntryBox = ({ children, direction = 'left' }) => {
  const [entered, setEntered] = useState(false);
  return (
    <div
      sx={{
        height: 200,
        bg: 'red',
        transform: `translateX(${entered ? 0 : direction === 'right' ? 100 : -100}%)`,
        transition: 'transform 0.6s ease',
      }}
    >
      <Waypoint onEnter={() => setEntered(true)} />
      {children}
    </div>
  );
};
export default EntryBox;

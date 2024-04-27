import React from 'react';
import { UberContext } from '../context/UberContext';

const RideSelector = () => {
  // Placeholder values for pickup, setPickup, dropoff, setDropoff
  const pickup = 'Pickup Location';
  const setPickup = () => {};
  const dropoff = 'Drop-off Location';
  const setDropoff = () => {};

  return (
    <div>
      <p>Pickup: {pickup}</p>
      <p>Drop-off: {dropoff}</p>
    </div>
  );
};

export default RideSelector;

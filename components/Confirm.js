'use client'
import { useContext } from 'react'
import { UberContext } from '../context/UberContext'
import RideSelector from './RideSelector';
import { ethers } from 'ethers';

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: `border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-blue-500 text-white m-4 py-4 text-center text-xl`,
};

const Confirm = () => {
  // Placeholder values for currentAccount, pickup, dropoff, price, selectedRide,
  // pickupCoordinates, dropoffCoordinates, and metamask
  const currentAccount = '0x0000000000000000000000000000000000000000';
  const pickup = 'Pickup Location';
  const dropoff = 'Drop-off Location';
  const price = '10.00';
  const selectedRide = { service: 'Ride' };
  const pickupCoordinates = { lat: 37.7749, lng: -122.4194 }; // San Francisco
  const dropoffCoordinates = { lat: 34.0522, lng: -118.2437 }; // Los Angeles
    const metamask = null;

  const storeTripDetails = async (pickup, dropoff) => {
    try {
      await fetch('/api/db/saveTrips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupLocation: pickup,
          dropoffLocation: dropoff,
          userWalletAddress: currentAccount,
          price: price,
          selectedRide: selectedRide,
        }),
      });

      // Placeholder request to metamask
      // Replace this with actual metamask logic when available
      if (metamask) {
        await metamask.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: currentAccount,
              to: process.env.NEXT_PUBLIC_UBER_ADDRESS,
              gas: '0x7EF40', // 520000 Gwei
              value: ethers.utils.parseEther(price)._hex,
            },
          ],
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        {pickupCoordinates && dropoffCoordinates && <RideSelector />}
      </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          <div
            className={style.confirmButton}
            onClick={() => storeTripDetails(pickup, dropoff)}
          >
            Confirm {selectedRide.service || 'Ride'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;

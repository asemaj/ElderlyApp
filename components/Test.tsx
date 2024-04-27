import React from 'react';
import Navbar from './Navbar';
import Map from './Map';
import LocationSelector from './LocationSelector';
import Confirm from './Confirm';

interface Style {
  wrapper: string;
  main: string;
  mapContainer: string;
  rideRequestContainer: string;
  rideRequest: string;
}

const style: Style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
};

const Home: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  );
};

export default Home;

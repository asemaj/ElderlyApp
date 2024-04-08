import React from 'react'

interface Trip {
  from: string;
  to: string;
  driver: { name: string; };
  caregiver: {name : string;};
  duration: string;
  distance: string;
  time: string;
  date: string;
}

const trips: Trip[] = [
  {
    from: '357 Ivory Cir, Aurora, CO',
    to: `Children's Hospital Colorado Anschutz Medical`,
    driver: { name: 'Adam' },
    caregiver: { name: 'sarah' },
    duration: '8 minutes',
    distance: '2.8 miles',
    time: '10:43AM',
    date: 'Mar 12, 2024'
  },
  {
    from: 'Hamilton, ON',
    to: 'Mt. Everest Base Camp',
    driver: { name: 'John Smith' },
    caregiver: { name: 'milly' },
    duration: '2 hours',
    distance: '100km',
    time: '10:00 AM',
    date: 'Feb 12, 2023'
  },
  {
    from: 'Toronto, ON',
    to: 'Bali Beach',
    driver: { name: 'Alice Johnson' },
    caregiver: { name: 'milly' },

    duration: '4 hours',
    distance: '400km',
    time: '9:00 AM',
    date: 'Mar 20, 2023'
  },
  {
    from: 'London, ON',
    to: 'Santorini',
    driver: { name: 'Bob Brown' },
    caregiver: { name: 'milly' },

    duration: '6 hours',
    distance: '600km',
    time: '11:00 AM',
    date: 'Apr 15, 2023'
  },
];

function Trips() {
  return (
    <section className="flex flex-col gap-4 sm:flex-wrap">
      <h3 className="bold-18 ml-2 px-8 xl:mt-10 ">Past Rides</h3>
      <p className="regular-14 bold-18 ml-2 px-8 xl:mb-10 ">Mar 2023 - Mar 2024</p>
      {trips.map((trip, index) => (
        <div key={index} className="flex flex-col  p-4 btn_dark_green_outline rounded-lg shadow-md sm:w-1/2 xl:w-full mb-6 xl:px-10 " 
        style={{border: '1px solid #E5E7EB'}}>
          <div className="flex flex-col sm:flex-row sm:justify-between px-4">
            <span className="self-center bold-16">Driver: {trip.driver.name}</span>
            <span className="self-center bold-16">Caregiver: {trip.caregiver.name}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between px-4">
            <span className="self-center">From: {trip.from}</span>
            <span className="self-center">To: {trip.to}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between px-4">
            <span className="self-center">Duration: {trip.duration}</span>
            <span className="self-center">Distance Travled: {trip.distance}</span>
            <span className="self-center">Time: {trip.time}</span>
          </div>
          <span className="self-center px-4">Date: {trip.date}</span>
        </div>
      ))}
      <div className='xl:py-24'></div>
    </section>
  );
}

export default Trips
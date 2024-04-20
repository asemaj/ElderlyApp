import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        <p className="uppercase regular-18 -mt-1 mb-3 bg-dark-blue-gradient">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Navigate Effortlessly with Biolink</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">With the Biolink app, you'll never have to worry about getting lost again. Our platform is tailored for transporting elderly individuals with caregivers, providing a seamless and reliable transportation experience. Enjoy the convenience of offline maps that ensure navigation even without an internet connection during your journey. Invite your friends and family to join in, making every trip a safe and enjoyable experience for everyone involved.





</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/slider4.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Pick Up</p>
                <p className="bold-16 text-blue-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">5442 S Helena St, Centennial</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Drop Off</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Swedish Medical Center</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
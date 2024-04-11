import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">

        <h3 className="bold-52 lg:bold-78 bg-dark-blue-gradient">Empowering Seniors with Careful Mobility</h3>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Discover Elderly Ride & Care: your one-stop solution for safe transportation and personalized care for seniors. Book rides effortlessly, accompanied by trained caregiver companions for a supportive journey. Prioritizing safety, convenience, and peace of mind, Elderly Ride & Care is the ideal companion for seniors and their families, promoting independence and well-being at every turn.
</p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            34k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Book A Ride" 
            variant="btn_green" 
          />

        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">From:</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">5442 S Helena St, Centennial</p>
          </div>

          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">To:</p>
            </div>
            <p className="bold-20 text-white">Swedish Medical Center</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance:</p>
              <p className="bold-20 text-white">13 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Time:</p>
              <p className="bold-20 text-white">20 min</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
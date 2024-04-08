import React from 'react'
import { Images } from '@/constants';
import styles from '../app/styles';
function Slider1() {
  const { links: imageLinks } = Images;
  const [firstImage] = imageLinks;

  return (
    <div className={`w-full overflow-hidden flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h2 className="black font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full ml-10">
          {firstImage.label}
        </h2>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
        <img
          src={firstImage.src}
          alt={firstImage.label}
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </div>
  );
}

export default Slider1
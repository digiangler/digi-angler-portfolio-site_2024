'use client';

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

type WorkSliderBtnsProps = {
  containerStyles: string;
  buttonStyles: string;
  iconsStyles: string;
};

const WorkSliderBtns = ({
  containerStyles,
  buttonStyles,
  iconsStyles,
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={buttonStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={buttonStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;

"use client";

import carousalItems from "@/utils/carousalItems";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      emulateTouch={true}
      useKeyboardArrows={true}
    >
      {carousalItems.map((item, index) => (
        <div key={index}>
          <div className="image-container">
            <Image
              src={item.image}
              alt={`Cat ${index}`}
              width={1200}
              height={50}
            />
          </div>
          <h1 className="theme-1 text-2xl">{item.header}</h1>
          <p>{item.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;

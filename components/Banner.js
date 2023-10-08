"use client";

import carousalItems from "@/utils/carousalItems";
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
        <div
          key={index}
          className="image-container relative"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "100vw auto",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="content">
            <h1 className="theme-1 text-2xl">{item.header}</h1>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
ই;
export default Banner;

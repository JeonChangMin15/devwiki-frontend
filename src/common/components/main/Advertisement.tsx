import React from "react";
import Image from "next/image";
import Slider from "react-slick";

export const Advertisement = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full h-20 lg:hidden">
      <Slider {...settings}>
        <div>
          <Image
            src={"/images/adone.png"}
            alt="adone"
            width={200}
            height={160}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div>
          <Image
            src={"/images/adtwo.png"}
            alt="adone"
            width={200}
            height={160}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div>
          <Image
            src={"/images/adthree.png"}
            alt="adone"
            width={200}
            height={160}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </Slider>
    </div>
  );
};

import Image from "next/image";
import React from "react";
import Testimonial from "./Testimonial";
import NewsLetter from "./NewsLetter";

const MainSection = () => {
  return (
    <div>
      <div className="flex  h-screen bg-black">
        <div className="flex flex-col  justify-center items-center w-1/2">
          <h1 className="text-white font-bold text-6xl">
            Discover <br /> Most Suitable <br /> Watches
          </h1>
          <p className=" w-80 text-gray-400 mr-20 mt-5">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
        </div>
        <div className=" flex justify-evenly items-center w-1/2">
          <Image src="/mainSection.png" alt="" width="300" height="300" />
        </div>
      </div>
      <div className=" flex justify-between m-32">
        <div className="flex  bg-gray-200 w-1/4 p-5 rounded-md">
          <Image src="/apple.png" height="100" alt="" width="100" />
          <div className="flex flex-col justify-around pl-6">
            <h1 className="font-bold text-2xl ">Apple</h1>
            <p>
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>
        <div className="flex  bg-gray-200 w-1/4 p-5 rounded-md">
          <Image src="/xiaomi.png" height="100" alt="" width="100" />
          <div className="flex flex-col justify-around pl-6">
            <h1 className="font-bold text-2xl ">Xiaomi</h1>
            <p>Xiaomi smart watches are produced by MI company.</p>
          </div>
        </div>
        <div className="flex  bg-gray-200 w-1/4 p-5 rounded-md">
          <Image src="/fitbit.png" height="100" alt="" width="100" />
          <div className="flex flex-col justify-around pl-6">
            <h1 className="font-bold text-2xl ">FitBit</h1>
            <p>
              FitBit smart watches are best for there health and fitness
              features.
            </p>
          </div>
        </div>
      </div>
      <div className="m-32">
        <Testimonial />
      </div>
      <div className="m-32">
        <NewsLetter />
      </div>
    </div>
  );
};

export default MainSection;

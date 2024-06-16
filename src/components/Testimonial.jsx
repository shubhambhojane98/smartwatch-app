import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <p className="text-center text-blue-600 mb-5">
        Here are our some of the best clients.
      </p>
      <h1 className=" text-center text-4xl font-bold mb-10">
        What People Say About Us
      </h1>
      <div className="flex justify-between">
        <div className=" flex  bg-slate-200 p-4 w-2/5 rounded-md">
          <Image src="/testimonial1.png" alt="" height="0" width="162" />
          <div className=" flex flex-col justify-evenly pl-4">
            <h1 className="text-xl font-bold">John Smith</h1>
            <p className="text-gray-600">
              Don’t waste time, just order! This is the best website to puschase
              smart watches.
            </p>
          </div>
        </div>
        <div className=" flex bg-slate-200 p-4 w-2/5 rounded-md">
          <Image src="/testimonial2.png" alt="" height="162" width="162" />
          <div className=" flex flex-col justify-evenly pl-4 ">
            <h1 className="text-xl font-bold">Hafiz Huzaifa</h1>
            <p className="text-gray-600">
              I’ve been purchasing smart watches of Mohid for a long time. All
              the products are good quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

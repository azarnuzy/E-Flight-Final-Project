import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function UserFlight() {
  return (
    <div className=" w-1/4 mt-24 h-fit shadow-md border-gray-100 border-solid border-[1px] py-3">
      <div className="ml-30">
        <h2 className="text-lg font-bold pl-3 mb-2">Your Flight</h2>
        <div className="w-full shadow flex mb-1">
          <div className="mr-4 h-14 w-1 bg-primary"></div>
          <div className="">
            <span className="text-sm">Sat, 26 Nov 2022</span>
            <span className="flex items-center font-bold gap-1">
              Jakarta <AiOutlineArrowRight className="text-sm" /> Yogyakarta
            </span>
          </div>
        </div>
        <div className="w-full shadow-sm flex text-gray-400">
          {/* <div className="mr-4 h-14 w-1 bg-primary"></div> */}
          <div className="ml-4">
            <span className="text-sm">Sun, 27 Nov 2022</span>
            <span className="flex items-center font-bold gap-1">
              Yogyakarta <AiOutlineArrowRight className="text-sm" /> Jakarta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

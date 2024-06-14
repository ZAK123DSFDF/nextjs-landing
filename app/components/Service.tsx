import { Landmark } from "lucide-react";
import React from "react";

export default function Service() {
  return (
    <div className="flex flex-col items-center w-full mt-5">
      <div className="flex flex-wrap lg:justify-between justify-center gap-4 lg:px-80 md:px-14 sm:px-10 w-full md:justify-between">
        <div className="flex flex-col rounded-md w-48 h-48 bg-slate-100 justify-center items-center group hover:bg-orange-400 cursor-pointer">
          <Landmark
            className="text-orange-400 group-hover:text-white"
            size={50}
          />
          <h1 className="font-bold group-hover:text-white">OUR SERVICES</h1>
        </div>
        <div className="flex flex-col rounded-md w-48 h-48 bg-slate-100 justify-center items-center group hover:bg-orange-400 cursor-pointer">
          <Landmark
            className="text-orange-400 group-hover:text-white"
            size={50}
          />
          <h1 className="font-bold group-hover:text-white">BANKRUPTCY</h1>
        </div>
        <div className="flex flex-col rounded-md w-48 h-48 bg-slate-100 justify-center items-center group hover:bg-orange-400 cursor-pointer">
          <Landmark
            className="text-orange-400 group-hover:text-white"
            size={50}
          />
          <h1 className="font-bold group-hover:text-white">CONSULTATION</h1>
        </div>
        <div className="flex flex-col rounded-md w-48 h-48 bg-slate-100 justify-center items-center group hover:bg-orange-400 cursor-pointer">
          <Landmark
            className="text-orange-400 group-hover:text-white"
            size={50}
          />
          <h1 className="font-bold group-hover:text-white">SPECIAL SERVICES</h1>
        </div>
      </div>
    </div>
  );
}

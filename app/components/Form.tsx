import React from "react";

export default function Form() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full mt-4 gap-4 lg:px-80 md:px-14 sm:px-10 py-20 bg-slate-400 px-10">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Bio"
        ></textarea>
        <button className="btn w-full hover:text-white hover:bg-orange-400">
          Message us
        </button>
      </div>
    </div>
  );
}

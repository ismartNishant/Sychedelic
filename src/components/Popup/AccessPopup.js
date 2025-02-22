"use client";
import React from "react";
import { X } from "lucide-react";
import { psychedelic } from "@/app/fonts";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${psychedelic.variable}`}
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-r from-[#B90000] to-[#FF0000] text-white rounded-lg p-6 w-[25rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Greetings from</h2>
          <div className="flex gap-x-1 items-center">
            <p className="text-black font-black">Close</p>
            <button className=" font-black text-black" onClick={onClose}>
              <X size={24} />
            </button>
          </div>
        </div>
        <h1 className="font-psychedelic text-5xl font-semibold tracking-wider">
          Sychedelic
        </h1>
        <div className="pt-10">
          <p className="mb-3 font-medium">Register to join waitlist</p>
          <input
            type="email"
            placeholder="type your email address"
            className="w-full py-2 px-4 rounded-full border-none text-black text-sm"
          />
          <div className="flex justify-end">
            <button className="mt-4 bg-black text-white rounded-full py-2 px-4 font-bold cursor-pointer font-psychedelic">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

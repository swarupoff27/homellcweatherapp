"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Geolocation } from "../icons";

export default function EnterCityName({ city }) {
  const ref = useRef();
  const router = useRouter();

  const submitCity = (e) => {
    e.preventDefault(e);
    if (ref?.current?.value) {
      router.push(`/weather/?city=${ref?.current?.value}`);
    } else {
      alert("Enter city name");
    }
  };

  return (
    <form className="relative z-[1] flex flex-col gap-[24px]">
      <div className="bg-[#0000000D] p-[12px] rounded-[12px] flex flex-col gap-[8px] justify-center items-center">
        <div className="flex justify-center items-center  gap-[8px]">
          <Geolocation />
          CURRENT LOCATION
        </div>
        <p className="text-center text-[24px]">{city}</p>
      </div>
      {/* <label
        className="bg-[#0000000D] p-[12px] rounded-[12px] flex gap-[8px] justify-center items-center"
        htmlFor="city"
      ></label> */}
      <input
        className="p-[12px] rounded-[12px] font-[500] outline-none text-[#003339]"
        ref={ref}
        type="text"
        id="city"
        name="city"
        placeholder="Enter city name"
      />
      <button
        className="border-[#ffffff] font-[500] border-[1px] p-[12px] rounded-[12px] hhover:text-[#003339] hover:bg-[#ffffff0D]"
        onClick={submitCity}
      >
        Check Weather
      </button>
    </form>
  );
}

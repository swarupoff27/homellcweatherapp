"use client";

import Image from "next/image";
import { Clouds, Hamburger, Search } from "../icons";

export default function WeatherDetails({
  temp,
  city,
  description,
  humidity,
  pressure,
  wind,
}) {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "short" });

  return (
    <div className="flex flex-col gap-[48px]">
      <div className="flex justify-between items-center">
        <button>
          <Hamburger />
        </button>

        <button>
          <Search />
        </button>
      </div>
      <div className="  flex gap-[24px] ">
        <div className=" ">
          <p className="text-[25px] font-[700]">{city}</p>
          <p className="text-[34px] font-[700] mb-[12px]">{temp} °C</p>
          <div className="flex gap-[8px] items-center mb-[4px]">
            <Clouds stroke="#057BFF" />
            <p className="font-[500] text-[#057BFF]">
              {capitalizeFirstLetter(description)}
            </p>
          </div>
          <p className="text-[#96969A]">
            <span>{month}</span> <span>{date.getDate()}</span>,{" "}
            <span>{date.getFullYear()}</span>
          </p>
        </div>
        <div className="rounded-[24px] bg-[#F1F1F3] overflow-hidden">
          <Image
            className="s"
            src={
              city
                ? `https://source.unsplash.com/random/200x150/?${city}`
                : `/vercel.svg`
            }
            alt="Picture of the city."
            width={200}
            height={150}
            placeholder="blur"
            blurDataURL="data:image/jpeg..."
          />
        </div>
      </div>

      <div className=" text-[13px] py-[14px] px-[27px] font-[700] flex gap-[24px] justify-between bg-[#003339] rounded-[24px]">
        <div className="  flex flex-col justify-between items-center   gap-[8px]">
          <p className=" text-[#ffffff]">12:00</p>{" "}
          {/* Kept this data static purposely because the API does NOT have hourly data for free subscribers. */}
          <Clouds stroke="#ffffff" />
          <p className="text-[#ffffff]">{temp}</p>
        </div>
        <div className=" flex flex-col  justify-between items-center  gap-[8px]">
          <p className=" text-[#ffffff]">12:00</p>{" "}
          {/* Kept this data static purposely because the API does NOT have hourly data for free subscribers. */}
          <Clouds stroke="#ffffff" />
          <p className="text-[#ffffff]">{temp}</p>
        </div>
        <div className=" flex flex-col justify-between items-center  gap-[8px]">
          <p className=" text-[#ffffff]">12:00</p>{" "}
          {/* Kept this data static purposely because the API does NOT have hourly data for free subscribers. */}
          <Clouds stroke="#ffffff" />
          <p className="text-[#ffffff]">{temp}</p>
        </div>
        <div className=" flex flex-col justify-between items-center  gap-[8px]">
          <p className=" text-[#ffffff]">12:00</p>{" "}
          {/* Kept this data static purposely because the API does NOT have hourly data for free subscribers. */}
          <Clouds stroke="#ffffff" />
          <p className="text-[#ffffff]">{temp}</p>
        </div>
        <div className=" flex flex-col  justify-between items-center gap-[8px]">
          <p className="text-[#ffffff]">12:00</p>{" "}
          {/* Kept this data static purposely because the API does NOT have hourly data for free subscribers. */}
          <Clouds stroke="#ffffff" />
          <p className="text-[#ffffff]">{temp}</p>
        </div>
      </div>

      <div className="py-[24px] border-[#F1F1F3] border-t-[1px] border-b-[1px]   flex flex-col">
        <p className=" mb-[8px] text-[18px] font-[700]">Additional Info</p>
        <div className="  flex justify-between gap-[24px]">
          <div className=" flex flex-col gap-[4px]">
            <p className=" text-[#96969A]">Humidity</p>
            <p>{humidity}%</p>
          </div>
          <div className=" flex flex-col gap-[4px]">
            <p className="text-[#96969A]">Wind</p>
            <p>{wind} m/s</p>
          </div>
          <div className=" flex flex-col gap-[4px]">
            <p className="text-[#96969A]">Pressure</p>
            <p>{pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

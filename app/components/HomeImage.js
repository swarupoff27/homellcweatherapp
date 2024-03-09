"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function HomeImage({ lat, lon, city }) {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const router = useRouter();

  const succ = (data) => {
    setLatitude(data?.coords?.latitude);
    setLongitude(data?.coords?.longitude);
    if (data) {
      routerPush();
    }
  };

  const err = (err) => {
    console.log(err);
  };

  const routerPush = () => {
    router.push(`/?lat=${latitude}&lon=${longitude}`);
  };

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(succ, err);
  });

  //   const test = async () => {
  //     const res = await fetch(
  //       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=18.5858984&longitude=73.7520909`
  //     );
  //     const data = await res.json();
  //     return data;
  //   };

  //api.bigdatacloud.net/data/reverse-geocode-client?latitude=18.5858984&longitude=73.7520909

  return (
    <div className="absolute z-[0] w-[100vw] h-[100vh] ">
      <Image
        className="relative object-cover"
        src={`https://source.unsplash.com/random/?${city}`}
        alt="alt"
        fill
      />
      <div className="imgWrapper"></div>
    </div>
  );
}

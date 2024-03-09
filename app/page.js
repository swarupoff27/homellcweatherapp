import Image from "next/image";
import EnterCityName from "./components/EnterCityName";
import { Close } from "./icons";
import HomeImage from "./components/HomeImage";

export default async function Home(context) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${context?.searchParams?.lat}&longitude=${context?.searchParams?.lon}`
  );
  const data = await res.json();

  return (
    <main className="relative bg-[#003339] text-[#ffffff] flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <button className="absolute left-[7%] top-[10%] z-[2]">
        <Close />
      </button>
      <span className="absolute right-[7%] top-[10%] z-[2] px-[12px] py-[6px] rounded-[8px] bg-[#FF2D55] text-[#ffffff] text-[12px] font-[700]">
        LIVE
      </span>
      <HomeImage
        city={data?.city}
        // lat={context?.searchParams?.lat}
        // lon={context?.searchParams?.lon}
      />
      {/* <div className="absolute z-[0] w-[100vw] h-[100vh] ">
        <Image
          className="relative object-cover"
          src={`https://source.unsplash.com/random/?${data?.city}`}
          alt="alt"
          fill
        />
        <div className="imgWrapper"></div>
      </div> */}
      <EnterCityName city={data?.city} />
    </main>
  );
}

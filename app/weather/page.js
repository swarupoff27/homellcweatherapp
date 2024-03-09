import WeatherDetails from "../components/WeatherDetails";

export default async function weather(context) {
  const city = context?.searchParams?.city;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f237134ac86c33baf49625f3b9e2aee4`
  );
  const data = await res.json();

  return (
    <main className="bg-[#ffffff]  text-[#003339] flex mmin-h-screen flex-col items-center justify-between p-10">
      <WeatherDetails
        temp={data?.main?.temp}
        humidity={data?.main?.humidity}
        pressure={data?.main?.pressure}
        wind={data?.wind?.speed}
        city={data?.name}
        description={
          data?.weather[0]?.description ? data?.weather[0]?.description : " "
        }
      />
    </main>
  );
}

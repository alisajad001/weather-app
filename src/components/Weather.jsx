import React from "react";

const Weather = ({ data }) => {
  return (
    <div className="m-auto mt-4 w-80 sm:w-[25rem] h-[35rem] sm:h-[30rem] flex flex-col justify-between p-3 rounded-md">
      <div className="flex justify-between">
        <h2 className="text-cyan-400 text-sm">
          {data?.location.name}, {data?.location.country}
        </h2>
        <span className="text-slate-100 text-sm uppercase">
          {data?.current.condition.text}
        </span>
      </div>

      <div className="flex justify-center items-center flex-col">
        <img src={data?.current.condition.icon} className="m-auto mb-3" />
        <h1 className="text-7xl text-gray-200 ">
          {data?.current.temp_c}
          <span className="text-cyan-400">°</span>C
        </h1>
        <h3 className="text-slate-500 mt-3">
          Feels like {data?.current.feelslike_c}°C
        </h3>
      </div>

      <div className="flex justify-evenly gap-3">
        <div className="border border-slate-700 p-2 w-24 text-center text-slate-300 rounded-md text-sm">
          <h3>{data?.current.wind_kph} kph</h3>
          <span className="text-[0.8rem] text-cyan-400">Wind Speed</span>
        </div>

        <div className="border border-slate-700 p-2 w-24 text-center text-slate-300 rounded-md text-sm">
          <h3>{data?.current.humidity}</h3>
          <span className="text-[0.8rem] text-cyan-400">Humidity</span>
        </div>

        <div className="border border-slate-700 p-2 w-24 text-center text-slate-300 rounded-md text-sm">
          <h3>{data?.current.cloud}</h3>
          <span className="text-[0.8rem] text-cyan-400">Cloud</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;

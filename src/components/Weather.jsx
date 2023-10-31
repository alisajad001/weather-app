import React from "react";

const Weather = () => {
  return (
    <div className="m-auto mt-7 w-96 h-[25rem] flex flex-col justify-between p-3 rounded-md">
      <div className="flex justify-between">
        <h2 className="text-cyan-400">Palestine</h2>
        <span className="text-slate-100">Rainy</span>
      </div>

      <div className="flex justify-center items-center flex-col">
        <img src="sada" className="m-auto mb-3" />
        <h1 className="text-7xl text-gray-200 ">10C</h1>
      </div>

      <div className="flex justify-evenly">
        <div className="border border-slate-700 p-2 w-24 text-center text-slate-300 rounded-md text-sm">
          <h3>23 k/m</h3>
          <span className="text-[0.8rem] text-cyan-400">Wind Speed</span>
        </div>

        <div className="border border-slate-700 p-2 w-24 text-center text-slate-300 rounded-md text-sm">
          <h3>23 k/m</h3>
          <span className="text-[0.8rem] text-cyan-400">Humidity</span>
        </div>

        <div className="border border-slate-700 p-2 w-24 text-center text-slate-300 rounded-md text-sm">
          <h3>23 k/m</h3>
          <span className="text-[0.8rem] text-cyan-400">asdasdasd</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;

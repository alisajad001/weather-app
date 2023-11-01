import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "f0ce3f6377524cfa8a0172632232910";

const Search = ({ setData }) => {
  const [query, setQuery] = useState("kabul");

  // Make a request using Axios
  const { data, refetch } = useQuery(["weather"], () => {
    return Axios.get(`${URL}?key=${API_KEY}&q=${query}`).then(
      (res) => res.data
    );
  });

  useEffect(() => {
    setData(data);
  }, [data]);

  const handleClick = () => {
    refetch();
    setQuery("");
  };

  return (
    <div className="mt-10 m-auto p-2 w-80 sm:w-[30rem] bg-slate-800 rounded-md">
      <form
        className="flex justify-between w-full gap-1"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={query}
          placeholder="location..."
          className="w-full rounded-md p-3 outline-none text-white bg-slate-700 border-slate-600 border"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleClick}>
          <span className="material-symbols-outlined text-slate-200 bg-cyan-500 p-3 rounded-md">
            search
          </span>
        </button>
      </form>
    </div>
  );
};

export default Search;

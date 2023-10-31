import { Axios } from "axios";
import React from "react";
import { useQuery } from "react-query";

const Search = () => {
  const { data } = useQuery(["weather"], () => {
    return Axios.get();
  });
  return (
    <div className="mt-5 p-2 w-96 bg-slate-800 rounded-md">
      <form
        className="flex justify-between w-full gap-1"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="location..."
          className="w-full rounded-md p-3 outline-none text-white bg-slate-700 border-slate-600 border"
        />
        <button>
          <span className="material-symbols-outlined text-slate-200 bg-cyan-500 p-3 rounded-md">
            search
          </span>
        </button>
      </form>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Search from "./components/Search";
import Weather from "./components/Weather";

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
      },
    },
  });
  const [data, setData] = useState();
  return (
    <div>
      <QueryClientProvider client={client}>
        <Search setData={setData} />
        <Weather data={data} />
      </QueryClientProvider>
    </div>
  );
};

export default App;

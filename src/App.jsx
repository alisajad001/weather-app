import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Search from "./components/Search";

const App = () => {
  const client = new QueryClient();
  const [data, setData] = useState([]);
  return (
    <div>
      <QueryClientProvider client={client}>
        <Search setData={setData} />
      </QueryClientProvider>
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import SportsMarket from "./components/SportsMarket";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./components/store/store";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SportsMarket />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

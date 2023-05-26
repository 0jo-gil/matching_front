import "./App.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

import PageRouter from "./common/routes";
import ToastList from "./components/toast/ToastList";
import { Suspense } from "react";
import BottomNavigation from "@components/common/BottomNavigation/BottomNavigation";
import Popup from "@components/popup/Popup";
import Header from "@components/common/header/Header";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>LOADING...</div>}>
          <BrowserRouter>
            <Header />
            <PageRouter />
            <ToastList />
            <Popup />

            <BottomNavigation />
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;

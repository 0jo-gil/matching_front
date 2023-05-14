import "./App.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

import PageRouter from "./common/routes";
import ToastList from "./components/toast/ToastList";
import { Suspense } from "react";
import BottomNavigation from "@components/common/BottomNavigation/BottomNavigation";
import Popup from "@components/popup/Popup";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>LOADING...</div>}>
        <BrowserRouter>
          <PageRouter />
          <ToastList />
          <Popup />

          <BottomNavigation />
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;

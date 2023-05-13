import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { userState } from "./store/user/atoms/userState";
import { BrowserRouter } from "react-router-dom";

import PageRouter from "./common/routes";
import ToastList from "./components/toast/ToastList";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>LOADING...</div>}>
        <BrowserRouter>
          <PageRouter />
          <ToastList />
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;

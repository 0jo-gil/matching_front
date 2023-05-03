import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { BrowserRouter } from "react-router-dom";

import PageRouter from "./common/routes";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <PageRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

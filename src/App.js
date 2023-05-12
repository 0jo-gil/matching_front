import './App.css';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userState } from './recoil/user/atoms/userState';
import { BrowserRouter } from 'react-router-dom';

import PageRouter from './common/routes';
import ToastList from './components/toast/ToastList';

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <PageRouter />
                <ToastList />
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;

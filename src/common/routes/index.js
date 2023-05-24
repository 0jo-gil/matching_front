import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthRouter from './AuthRouter';
import PostRouter from './PostRouter';

const Main = lazy(() => import('@pages/main/Main'));
const Chat = lazy(() => import('@pages/chat/Chat'));

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/post/*" element={<PostRouter />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    );
};

export default PageRouter;

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Main = lazy(() => import('@pages/main/Main'));
const MainHome = lazy(() => import('@pages/main/home/Home'));
const MainNew = lazy(() => import('@pages/main/new/New'));
const MainPopular = lazy(() => import('@pages/main/popular/Popular'));

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route path="/home" element={<MainHome />} />
                <Route path="/new" element={<MainNew />} />
                <Route path="/popular" element={<MainPopular />} />
            </Route>
        </Routes>
    );
};

export default MainRouter;

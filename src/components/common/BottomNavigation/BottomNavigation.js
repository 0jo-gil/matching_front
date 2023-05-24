import { bottomNaviState } from '@state/bottomNavigation/atom/bottomNavigationState';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { BottomNavWrap } from './style';

const BottomNavigation = ({ isHide = false }) => {
    const [bottomNaviList] = useRecoilState(bottomNaviState);
    return (
        <BottomNavWrap>
            <ul>
                {bottomNaviList?.map((list, index) => (
                    <li key={index}>
                        <Link to={list?.src}>{list?.name}</Link>
                    </li>
                ))}
            </ul>
        </BottomNavWrap>
    );
};

export default BottomNavigation;

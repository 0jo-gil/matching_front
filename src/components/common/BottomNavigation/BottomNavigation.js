import { bottomNaviState } from "@state/bottomNavigation/atom/bottomNavigationState";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SBottomNavWrap } from "./style";

const BottomNavigation = ({ isHide = false }) => {
  const [bottomNaviList] = useRecoilState(bottomNaviState);
  return (
    <SBottomNavWrap>
      {bottomNaviList?.map((list, index) => (
        <div key={index}>
          <Link to={list?.src}>{list?.name}</Link>
        </div>
      ))}
    </SBottomNavWrap>
  );
};

export default BottomNavigation;

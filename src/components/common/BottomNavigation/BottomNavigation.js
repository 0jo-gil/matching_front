import { bottomNaviState } from "@state/bottomNavigation/atom/bottomNavigationState";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SBottomNavWrap } from "./style";
import usePost from "@hooks/usePost";

const BottomNavigation = ({ isHide = false }) => {
  const location = useLocation();

  // 하단 공통 네비 리스트
  const [bottomNaviList] = useRecoilState(bottomNaviState);
  // 임시: 참가 신청 하단 네비 , 공통 네비 상태
  const [bottoNavState, setBottomNavState] = useState(false);

  const {
    data: { postDetailData },
  } = usePost();

  useEffect(() => {
    let result = location.pathname.includes("/post/detail") ? true : false;
    setBottomNavState(result);
  }, [location.pathname]);

  return (
    <SBottomNavWrap>
      {bottoNavState ? (
        <>
          <div>
            <p>기간</p>
            <span>{postDetailData?.startedAt}</span> ~{" "}
            <span>{postDetailData?.endedAt}</span>
          </div>
          <button>참가신청</button>
        </>
      ) : (
        <>
          {bottomNaviList?.map((list, index) => (
            <div key={index}>
              <Link to={list?.src}>{list?.name}</Link>
            </div>
          ))}
        </>
      )}
    </SBottomNavWrap>
  );
};

export default BottomNavigation;

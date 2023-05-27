import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import usePopup from "@hooks/usePopup";
import useTab from "@hooks/useTab";
import { STabList, STabWrap } from "@styled/common";

const mainTabList = [
  {
    title: "홈",
    link: "/main/home",
  },
  {
    title: "신규",
    link: "/main/new",
  },
  {
    title: "인기",
    link: "/main/popular",
  },
];

const Main = () => {
  const { showPopup } = usePopup();
  const { currentItem, changeItem } = useTab(0, mainTabList);

  const popupHandler = () => {
    showPopup({
      content: <Link to="/post/write">글쓰기</Link>,
    });
  };

  return (
    <div>
      <h1>MAIN</h1>
      <STabWrap className="tab-wrap">
        {mainTabList?.map((list, index) => (
          <STabList
            isActive={list.title === currentItem.title}
            // className={list.title === currentItem.title && "active"}
            key={index}
            onClick={() => changeItem(index)}
          >
            {list.title}
          </STabList>
        ))}
      </STabWrap>

      <Outlet />

      {/* <button onClick={popupHandler}>글쓰기</button>
      <button onClick={logoutHandler}>로그아웃</button> */}
    </div>
  );
};

export default Main;

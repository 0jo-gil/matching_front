import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import usePopup from "@hooks/usePopup";
import useTab from "@hooks/useTab";
import { STabList, STabWrap } from "@styled/common";
import useCategory from "@hooks/useCategory";
import FormRadio from "@components/formInput/FormRadio";
import usePost from "@hooks/usePost";

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

  const { data } = useCategory();
  const {
    data: { postByCategoryList },
    action: { setCategoryId },
  } = usePost();

  const popupHandler = () => {
    showPopup({
      content: <Link to="/post/write">글쓰기</Link>,
    });
  };

  return (
    <div>
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

      <FormRadio
        list={data?.categoryListValue}
        name="categoryId"
        setValue={setCategoryId}
      />

      {postByCategoryList?.map((item, index) => (
        <div>
          <div className="img">
            <img src={item.photoList[0]} alt="썸네일 이미지" />
          </div>
          <div className="title">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;

// author
// :
// null
// categoryName
// :
// "개발"
// content
// :
// "테스트 내용"
// createdAt
// :
// "2023-05-10T21:15:58.310679"
// endedAt
// :
// "2023-05-31"
// id
// :
// 1
// photoList
// :
// ["https://mymatching.s3.ap-northeast-2.amazonaws.com/1d095ef1-0c2c-4528-9393-a95cc703c833.png",…]
// plan
// :
// null
// startedAt
// :
// "2023-05-09"
// title
// :
// "테스트 제목"

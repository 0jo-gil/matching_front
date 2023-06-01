import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { SPagSubTitle, STabList, STabWrap } from "@styled/common";
import usePopup from "@hooks/usePopup";
import useTab from "@hooks/useTab";
import useCategory from "@hooks/useCategory";
import FormRadio from "@components/formInput/FormRadio";
import usePost from "@hooks/usePost";
import ThumbnailCard from "@components/thumbnailCard/ThumbnailCard";
import "swiper/css";

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

      <SPagSubTitle>챌린지 인기 카테고리</SPagSubTitle>
      <FormRadio
        list={data?.categoryListValue}
        name="categoryId"
        setValue={setCategoryId}
      />
      <Swiper slidesPerView={4.5} spaceBetween={20}>
        {postByCategoryList?.length > 0 ? (
          <>
            {postByCategoryList?.map((item, index) => (
              <SwiperSlide>
                <ThumbnailCard
                  id={item.id}
                  title={item.title}
                  category={item.categoryName}
                  src={item.photoList[0]}
                  count={item.participateCount}
                />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <p>해당 카테고리 리스트가 없습니다.</p>
        )}
      </Swiper>
    </div>
  );
};

export default Main;

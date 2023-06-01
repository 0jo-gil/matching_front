import { SColFlexBox } from "@styled/common";
import React, { useCallback } from "react";
import styled from "styled-components";
import { icon_user } from "../../common/assets/img/common";
import { useNavigate } from "react-router-dom";

const ThumbnailCard = ({
  id = 0,
  title = "challenge",
  category = "",
  count = 0,
  src = "",
}) => {
  const navigate = useNavigate();
  const onClickDetailNav = useCallback(() => {
    navigate(`/post/detail/${id}`);
  }, [id]);
  return (
    <SThumbnailCardWrap onClick={onClickDetailNav}>
      <SThumnailImg src={src} />
      <SColFlexBox>
        <div>
          <SThumnailLabel type="category">{category}</SThumnailLabel>
          <SThumnailLabel type="count">
            <img src={icon_user} alt="사람 아이콘" />
            {count}
          </SThumnailLabel>
        </div>
        <SThumnailTitle>{title}</SThumnailTitle>
      </SColFlexBox>
    </SThumbnailCardWrap>
  );
};

export default ThumbnailCard;

const SThumbnailCardWrap = styled.div`
  width: 154px;
  height: 88px;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;

  > div {
    padding: 10px;

    > div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
const SThumnailImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  filter: brightness(0.5);
`;
const SThumnailLabel = styled.div`
  ${(props) =>
    props.type === "category"
      ? "background: rgba(256, 256, 256, 0.7); width: 52px;"
      : "background: rgba(0, 0, 0, 0.7); color: #fff;"}
  height: 16px;
  padding: 2px 5px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  > img {
    height: 100%;
  }
`;
const SThumnailTitle = styled.p`
  font-size: 14px;
  color: #fff;
`;

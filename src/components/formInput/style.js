import styled from "styled-components";

export const SFormElementWrap = styled.div``;

// 섹션별 설명
export const SDescText = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

// 라디오 버튼 라벨
export const SRadioLabel = styled.label`
  font-size: 14px;
  color: #000;
`;
// 인풋 라디오
export const SInputRadio = styled.input`
  display: none;

  &:checked {
    + label {
      background: red;
    }
  }
`;

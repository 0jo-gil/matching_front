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
  padding: 0.6vw 2vw;
  border: 1px solid #aaa;
  border-radius: 2vw;

  &:not(:last-of-type) {
    margin-right: 2vw;
  }
`;
// 인풋 라디오
export const SInputRadio = styled.input`
  display: none;

  &:checked {
    + label {
      background: #000;
      color: #fff;
    }
  }
`;

// form
export const SFormWrap = styled.div``;

export const SInputLabel = styled.label`
  display: block;

  &::after {
    content: "${(props) => props.test && "*"}";
    color: red;
  }
`;

export const SInputElement = styled.input``;

export const STextArea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  border: 1px solid #aaa;
  padding: 0.7vw;
  border-radius: 0.3vw;
`;

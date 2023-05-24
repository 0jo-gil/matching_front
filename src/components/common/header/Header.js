import { useNavigate } from "react-router-dom";
import { HeaderWrap } from "./style";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrap>
      <h1>헤더</h1>
    </HeaderWrap>
  );
};

export default Header;

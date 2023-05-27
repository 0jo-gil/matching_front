import { Link } from "react-router-dom";
import { SHeaderWrap, SIconWrap, SLogo } from "./style";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

const list = [
  { icon: <AiOutlineSearch />, link: "/search" },
  { icon: <AiOutlinePlus />, link: "post/register" },
];

const Header = () => {
  return (
    <SHeaderWrap>
      <SLogo>로고</SLogo>
      <SIconWrap>
        {list.map((item, index) => (
          <Link to={item.link} key={index}>
            {item.icon}
          </Link>
        ))}
      </SIconWrap>
    </SHeaderWrap>
  );
};

export default Header;

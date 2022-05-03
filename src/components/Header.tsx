import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 20px 60px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  width: 80px;
  margin-right: 30px;
  fill: ${props => props.theme.color.main};
  path {
    stroke: ${props => props.theme.color.main};
    stroke-width: 1;
  }
`;

const Lists = styled.ul`
  display: flex;
`;

const List = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  margin-right: 10px;
  color: ${props => props.theme.white.normal};
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${props => props.theme.white.darker};
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10px;
  width: 5px;
  height: 5px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${props => props.theme.white.lighter};
`;

const Search = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${props => props.theme.white.normal};
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${props => props.theme.white.darker};
  }
  svg {
    height: 25px;
  }
`;

const Input = styled(motion.input)`
  position: absolute;
  right: 0;
  z-index: -1;
  padding: 10px 20px 10px 40px;
  color: white;
  border: 1px solid ${props => props.theme.white.normal};
  border-radius: 5px;
  background-color: transparent;
  transform-origin: right center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.white.darker};
  }
`;

const logoMotion = {
  hidden: {
    fill: "rgba(144, 254, 6, 0)",
    pathLength: 0,
  },
  active: {
    fill: "rgba(144, 254, 6, 1)",
    pathLength: 1,
  },
}

const navMotion = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
}

interface IForm {
  keyword: string;
}

function Header() {
  const homeMatch = useMatch("/react-watflix");
  const tvMatch = useMatch("tv");
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => setSearchOpen(prev => !prev);
  const { register, handleSubmit, setFocus, setValue } = useForm<IForm>();
  const navigate = useNavigate();
  const onValid = (data: IForm) => {
    navigate(`/search?keyword=${data.keyword}`);
    setValue("keyword", "")
  }
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Nav
      variants={navMotion}
      initial="top"
      animate={navAnimation}
    >
      <Col>
        <Link to="/">
          <Logo
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 214 82"
          >
            <motion.path
              variants={logoMotion}
              initial="hidden"
              animate="active"
              transition={{
                default: { duration: 2 },
                fill: { duration: 1, delay: 1 },
              }}
              d="M21.1077 33.5095L15.0369 64.1588L14.9214 64.1914L13.8893 35.5453L3.4948 38.4769L7.35771 79.2116L19.1382 75.8891L24.8578 46.1589L24.9733 46.1264L26.4143 73.837L38.1948 70.5146L48.4222 25.806L38.0277 28.7376L32.9386 59.11L32.8231 59.1426L30.8093 30.7734L21.1077 33.5095ZM63.786 30.0253L59.4904 48.9856L65.4961 47.2918L63.9015 29.9927L63.786 30.0253ZM71.2509 19.3677L78.1167 59.2555L66.6827 62.4802L66.1426 55.3103L57.596 57.7207L55.9417 65.5094L44.681 68.6853L57.738 23.1787L71.2509 19.3677ZM88.3712 23.7944L85.8932 57.0623L96.6342 54.033L99.1122 20.7652L107.197 18.4851L107.901 9.03124L81.1063 16.5881L80.4021 26.042L88.3712 23.7944Z" />
            <motion.path
              variants={logoMotion}
              initial="hidden"
              animate="active"
              transition={{
                default: { duration: 2 },
                fill: { duration: 1, delay: 1 },
              }}
              d="M109.258 29.7354L106.426 72.4817L117.167 69.4525L118.333 51.851L131.153 48.2355L131.732 39.4946L118.912 43.1102L119.396 35.8062L133.082 31.9463L133.685 22.8463L109.258 29.7354ZM138.793 21.4058L135.961 64.1521L159.926 57.3933L160.529 48.2932L147.305 52.0228L149.534 18.3765L138.793 21.4058ZM166.851 13.4924L164.02 56.2387L174.761 53.2094L177.592 10.4631L166.851 13.4924ZM181.448 9.37574L189.118 27.8926L178.096 52.2686L189.935 48.9299L194.887 34.9018L195.003 34.8692L198.25 46.5847L210.262 43.1971L202.054 24.2444L212.4 0.646211L200.389 4.03379L196.161 17.3875L196.045 17.4201L193.459 5.98816L181.448 9.37574Z" />
          </Logo>
        </Link>
        <Lists>
          <List>
            <Link to="/">Home{homeMatch && <Circle layoutId="circle" />}</Link>
          </List>
          <List>
            <Link to="tv">Tv Show{tvMatch && <Circle layoutId="circle" />}</Link>
          </List>
        </Lists>
      </Col>
      <Col>
        <Search
          onClick={toggleSearch}
          onSubmit={handleSubmit(onValid)}
        >
          <motion.svg
            onClick={() => setFocus("keyword")}
            initial={{ x: 0 }}
            animate={{ x: searchOpen ? -166 : 0 }}
            transition={{ type: "linear" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </motion.svg>
          <Input
            {...register("keyword",
              { required: "2자 이상 입력해주세요.", minLength: 2 }
            )}
            initial={false}
            animate={{ scaleX: searchOpen ? 1 : 0 }}
            transition={{ type: "linear" }}
            placeholder="Search a Movie or Tv show"
          />
        </Search>
      </Col>
    </Nav>
  );
}

export default Header;
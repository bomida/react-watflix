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
  height: 25px;
  margin-right: 30px;
  fill: ${props => props.theme.color.red};
  path {
    stroke: ${props => props.theme.color.red};
    stroke-width: 4;
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
  color: ${props => props.theme.white.lighter};
  transition: .3s ease-in-out;
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
  background-color: ${props => props.theme.color.red};
`;

const Search = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${props => props.theme.white.normal};
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
    fill: "rgba(229, 16, 19, 0)",
    pathLength: 0,
  },
  active: {
    fill: "rgba(229, 16, 19, 1)",
    pathLength: 1,
  },
}

const navMotion = {
  top: {
    backgroundColor: "rgba(20, 20, 20, 0)"
  },
  scroll: {
    backgroundColor: "rgba(20, 20, 20, 1)"
  },
}

interface IForm {
  keyword: string;
}

function Header() {
  const homeMatch = useMatch("/");
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
  }, []);
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
            viewBox="0 0 1024 276.742"
          >
            <motion.path
              variants={logoMotion}
              initial="hidden"
              animate="active"
              transition={{
                default: { duration: 2 },
                fill: { duration: 1, delay: 1 },
              }}
              d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
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
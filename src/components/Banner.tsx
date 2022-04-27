import { AnimatePresence, motion } from "framer-motion";
import { type } from "os";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MakeImgPath } from "../api/Utility";
import ModalMovie from "./ModalMovie";
import ModalTv from "./ModalTv";

const BannerWrap = styled.div<{ bgphoto: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 90vh;
  padding: 0 60px;
  background-image: linear-gradient(rgba(20, 20, 20, 0.5) 0%, rgba(20, 20, 20, 0) 12%, rgba(20, 20, 20, 0) 35%, rgba(20, 20, 20, 1) 99%), url(${props => props.bgphoto});
  background-size: cover;
`;

const TopTitle = styled.h6`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  /* background-color: ${props => props.theme.color.red}; */
`;

const BannerTitle = styled.h2`
font-size: 60px;
font-weight: 600;
`;

const BannerOverview = styled.span`
  width: 40vw;
  margin: 20px 0 30px;
  line-height: 1.3;
`;

const BannerDetail = styled(motion.span)`
  padding: 10px 25px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.white.darker};
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: .3s ease-in-out;
  &:hover{
    color: ${props => props.theme.white.normal};
    border: 1px solid ${props => props.theme.white.lighter};
  }
`;

interface IBanner {
  data: any;
  category?: string;
  type: string;
  title: string;
}

function Banner({ data, category, type, title }: IBanner) {
  const navigate = useNavigate();
  const onBoxClicked = (categoryId: number) => {
    navigate(`/${category}/${type}/${categoryId}`);
  };
  return (
    <BannerWrap
      bgphoto={MakeImgPath(data?.results[0].backdrop_path || "")}
    >
      <TopTitle>{title} 1</TopTitle>
      <BannerTitle>{data?.results[0].title || data?.results[0].name}</BannerTitle>
      <BannerOverview>{data?.results[0].overview.length > 100 ? `${data?.results[0].overview.slice(0, 100)}...` : data?.results[0].overview}</BannerOverview>
      <AnimatePresence>
        <BannerDetail
          layoutId={`${data.id}${category}${type}`}
          onClick={() => onBoxClicked(data?.results[0].id!)}
        >Detail</BannerDetail>
      </AnimatePresence>
    </BannerWrap>
  );
}

export default Banner;
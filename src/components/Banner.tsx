import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MakeImgPath } from "../api/Utility";

const BannerWrap = styled.div<{ bgphoto: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 90vh;
  padding: 0 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 12%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 1) 99%), url(${props => props.bgphoto});
  background-size: cover;
`;

const TopTitle = styled.h6`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
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
          onClick={() => onBoxClicked(data?.results[0].id!)}
          layoutId={`${data?.id}${category}${type}`}
        >Detail</BannerDetail>
      </AnimatePresence>
    </BannerWrap>
  );
}

export default Banner;
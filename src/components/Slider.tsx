import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MakeImgPath } from "../api/Utility";
import { useMatch, useNavigate } from "react-router-dom";
import { ISliderCommon } from "../api/api";
import ModalMovie from "./ModalMovie";
import ModalTv from "./ModalTv";

const SliderTitle = styled.h4`
  position: relative;
  margin-bottom: 25px;
  padding-left: 60px;
  font-size: 18px;
  font-weight: 600;
`;

const ItemSlider = styled.div`
  position: relative;
  height: 26vw;
`;

const SliderBtnContainer = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
z-index: 1;
width: 60px;
height: 275px;
cursor: pointer;
`;

const SliderLists = styled(motion.div)`
display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 10px;
position: absolute;
width: 100%;
padding: 0 60px;
`;

const ListBoxItems = styled(motion.div) <{ bgphoto: string }>`
aspect-ratio: 3 / 4.5;
cursor: pointer;
border-radius: 5px;
background-image: url(${props => props.bgphoto});
background-size: cover;
`;

const BoxItemTitle = styled(motion.span)`
position: absolute;
bottom: -35px;
padding: 0 5px;
font-size: 14px;
opacity: 0;
`;

const sliderMotion = {
  hidden: (back: boolean) => ({
    x: back ? -window.outerWidth : window.outerWidth,
  }),
  visible: {
    x: 0,
  },
  exit: (back: boolean) => ({
    x: back ? window.outerWidth : -window.outerWidth,
  }),
}

const movieMotion = {
  normal: {
    scale: 1,
  },
  hover: {
    y: -10,
    scale: 1.1,
    transition: {
      delay: 0.4,
    },
  },
}

const movieTitleMotion = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  }
}

interface ISlider {
  data: any;
  category?: string;
  type: string;
  title: string;
}


function Slider({ data, category, type, title }: ISlider) {
  const offset = 6;
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving(prev => !prev);
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setBack(true);
      toggleLeaving();
      const totalMovies = data?.results.length - 1;
      const MaxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex(prev => prev === MaxIndex ? 0 : prev + 1);
    }
  }
  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      setBack(false);
      toggleLeaving();
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex(prev => prev === 0 ? maxIndex : prev - 1);
    }
  }
  const categoryMatch = useMatch(`/${category}/${type}/:categoryId`);
  const navigate = useNavigate();
  const onBoxClicked = (categoryId: number) => {
    navigate(`/${category}/${type}/${categoryId}`);
  }


  return (
    <>
      <SliderTitle>{title}</SliderTitle>
      <ItemSlider>
        <SliderBtnContainer
          style={{ left: 0 }}
          variants={sliderMotion}
        >
          <FontAwesomeIcon
            onClick={decreaseIndex}
            icon={faAngleLeft} size="2x" />
        </SliderBtnContainer>
        <SliderBtnContainer
          style={{ right: 0 }}
          variants={sliderMotion}
        >
          <FontAwesomeIcon
            onClick={increaseIndex}
            icon={faAngleRight} size="2x" />
        </SliderBtnContainer>
        <AnimatePresence
          initial={false}
          onExitComplete={toggleLeaving}
        >
          <SliderLists
            key={index}
            variants={sliderMotion}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              type: "tween",
              duration: 1.3
            }}
          >
            {data?.results
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((source: ISliderCommon) =>
                <ListBoxItems
                  key={source.id}
                  onClick={() => onBoxClicked(source.id)}
                  variants={movieMotion}
                  whileHover="hover"
                  transition={{ type: "tween" }}
                  layoutId={`${source.id}${category}${type}`}
                  bgphoto={MakeImgPath(source.poster_path)}
                >
                  <BoxItemTitle variants={movieTitleMotion}>
                    {source.title || source.name}
                  </BoxItemTitle>
                </ListBoxItems>
              )}
          </SliderLists>
        </AnimatePresence>
      </ItemSlider>
      {categoryMatch && category === "movie" ? <ModalMovie data={data} category="movie" type={type} /> : null}
      {categoryMatch && category === "tv" ? <ModalTv data={data} category="tv" type={type} /> : null}
    </>
  );
}

export default Slider;
import { motion } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ISliderCommon } from "../api/api";
import { MakeImgPath } from "../api/Utility";
import ModalMovie from "./ModalMovie";
import ModalTv from "./ModalTv";

const SearchWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px 10px ;
`;

const Keyword = styled.p`
  margin-bottom: 20px;
  strong {
    font-weight: 600;
  }
`;

const ResultBox = styled(motion.div)`
  `;

const ResultImg = styled.div<{ bgphoto: string }>`
  aspect-ratio: 3 / 4.5;
  cursor: pointer;
  border-radius: 5px;
  background-image: url(${props => props.bgphoto});
  background-size: cover;
`;

const ResultTitle = styled(motion.div)`
  opacity: 0;
  padding: 20px 5px 0;
`;

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

interface IResult {
  data: any;
  category: string;
  type: string | null;
  url: string;
}

function SearchResults({ data, category, type, url }: IResult) {
  const categoryMatch = useMatch(`/${url}/${category}/:searchId`);
  const navigate = useNavigate();
  const onBoxClicked = (searchId: number) => {
    navigate(`/${url}/${category}/${searchId}`);
  }

  return (
    <>
      <Keyword>
        Result of <strong>"{type}"</strong>
      </Keyword>
      {data && <>
        <SearchWrap>
          {data?.results
            .map((result: ISliderCommon) =>
              <ResultBox
                key={result.id}
                onClick={() => onBoxClicked(result.id)}
                variants={movieMotion}
                whileHover="hover"
                transition={{ type: "tween" }}
                layoutId={`${result.id}${category}${type}`}
              >
                <ResultImg bgphoto={MakeImgPath(result.poster_path)}></ResultImg>
                <ResultTitle variants={movieTitleMotion}>
                  {result.name || result.title}
                </ResultTitle>
              </ResultBox>
            )}
        </SearchWrap>
      </>}
      {categoryMatch && category === "movie" ? <ModalMovie data={data} category="movie" type={type} /> : null}
      {categoryMatch && category === "tv" ? <ModalTv data={data} category="tv" type={type} /> : null}
    </>);
}

export default SearchResults;
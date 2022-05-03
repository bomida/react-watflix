import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "react-query";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  getTvCredits,
  getTvDetail,
  getTvSimilar,
  ICast,
  ICredit,
  IResults,
  ISliderCommon,
  ITvDetail
} from "../api/api";
import { MakeImgPath } from "../api/Utility";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(24, 24, 24, 0.8);
  `;

const ModalWrap = styled(motion.div)`
  position: fixed;
  overflow: scroll;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 99;
  min-width: 800px;
  width: 900px;
  height: 85vh;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${props => props.theme.black.normal};
  box-shadow: 0px 0px 8px 3px rgba(24, 24, 24, 0.3);
`;

const ModalImg = styled.div<{ bgphoto: string }>`
  display: flex;
  align-items: flex-end;
  height: 450px;
  padding: 0 0 40px 40px;
  background-image: linear-gradient(180deg, rgba(34,34,34,0) 65%, rgba(34,34,34,1) 100%), url(${props => props.bgphoto});
  background-size: cover;

  h3{
    font-size: 40px;
    font-weight: 600;
  }
`;

const ModalTextInfo = styled.div`
  display: flex;
  padding: 40px;
`;

const TextInfoLeft = styled.div`
  width: 60%;
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-weight: 200;
    line-height: 1.3;
  }
`;

const ModalBedge = styled.div`
  margin-bottom: 30px;
  span:nth-child(1){
    margin-right: 10px;
  }
  span:nth-child(3) {
    margin: 0 10px;
    color: ${props => props.theme.color.main};
  }
`;

const TextInfoRight = styled.div`
  width: 40%;
  padding-left: 30px;
  color: ${props => props.theme.white.darker};
  font-size: 14px;
`;

const Credit = styled.div`
  margin-bottom: 10px;
  line-height: 1.3;
    font-weight: 300;
    span {
    font-weight: normal;
    color: ${props => props.theme.white.normal};
  }
`;

const Genres = styled.div`
  font-weight: 300;
  line-height: 1.3;
  span {
    font-weight: normal;
    color: ${props => props.theme.white.normal};
  }
`;

const SimilarTitle = styled.div`
  padding: 0 40px 20px 40px;
  font-size: 20px;
  font-weight: 600;
`;

const SimilarWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 0 40px 40px 40px;
`;

const SimilarBox = styled(motion.div)`
  overflow: hidden;
  border-radius: 5px;
  background-color: ${props => props.theme.black.lighter};
  box-shadow: 0px 0px 8px 3px rgba(24, 24, 24, 0.5);
`;

const SimilarBoxImg = styled.div <{ bgphoto: string }>`
  padding-top: 150px;
  background-image: url(${props => props.bgphoto});
  background-size: cover;
`;

const SimilarBoxInfo = styled.div`
  padding: 20px;
  color: ${props => props.theme.white.darker};
  font-size: 14px;
  background-color: ${props => props.theme.black.lighter};
  h6 {
    margin-bottom: 10px;
    color: ${props => props.theme.white.lighter};
  }
  p {
    font-weight: 300;
    line-height: 1.2;
  }
`;

interface IModal {
  data: any;
  category?: string;
  type: string | null;
}

function Modal({ data, category, type }: IModal) {
  const navigate = useNavigate();
  const onOverlayClick = () => navigate('/tv');
  const tvMatch = useMatch(`/${category}/${type}/:tvId`);
  const clickedTv =
    tvMatch?.params.tvId &&
    data?.results.find(
      (source: ISliderCommon) => String(source.id) === tvMatch?.params.tvId
    );
  const { data: detail } = useQuery<ITvDetail>(
    ["details", `detail${tvMatch?.params.tvId}`],
    () => getTvDetail(tvMatch?.params.tvId)
  );
  const { data: credit } = useQuery<ICredit>(
    ["credits", `credit${tvMatch?.params.tvId}`],
    () => getTvCredits(tvMatch?.params.tvId)
  );

  const { data: similar } = useQuery<IResults>(
    ["similars", `similar${tvMatch?.params.tvId}`],
    () => getTvSimilar(tvMatch?.params.tvId)
  );

  return (
    <AnimatePresence>
      {tvMatch && data ?
        <>
          <Overlay
            onClick={onOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <ModalWrap
            layoutId={`${tvMatch.params.tvId}${category}${type}`}
          >
            {clickedTv && detail ? <>
              <ModalImg bgphoto={MakeImgPath(clickedTv.backdrop_path)}>
                <h3>{clickedTv?.name}</h3>
              </ModalImg>
              <ModalTextInfo>
                <TextInfoLeft>
                  <ModalBedge>
                    <span>{`${detail?.first_air_date.slice(0, 4)}-${detail?.last_air_date.slice(0, 4)}`}</span>
                    <span>{detail.episode_run_time}min</span>
                    <span>
                      <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faStar} />
                      {detail?.vote_average}
                    </span>
                    <span>{detail.number_of_seasons} Season / {detail.number_of_episodes} episodes</span>
                  </ModalBedge>
                  <h4>{detail.tagline}</h4>
                  <p>{detail?.overview}</p>
                </TextInfoLeft>
                <TextInfoRight>
                  {credit &&
                    <Credit>
                      Credit : {credit?.cast.slice(0, 3).map(cast => <span key={cast.id}>{cast.name}, </span>)}
                    </Credit>
                  }
                  {detail &&
                    <Genres>
                      Genres : {detail?.genres.map((genre: ICast) => <span key={genre.id}>{genre.name}, </span>)}
                    </Genres>
                  }
                </TextInfoRight>
              </ModalTextInfo>
            </> : null}
            <SimilarTitle>Recommend</SimilarTitle>
            <SimilarWrapper>
              {similar?.results.slice(0, 9).map(source =>
                <SimilarBox
                  key={source.id}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", delay: 0.3, }}
                >
                  <SimilarBoxImg bgphoto={MakeImgPath(source.backdrop_path, "w300")} />
                  <SimilarBoxInfo>
                    <h6>{source.name.length > 30 ? `${source.name.slice(0, 30)}...` : source.name}</h6>
                    <p>{source.overview.length <= 0 ? "No Overview" : (source.overview.length > 100 ? `${source.overview.slice(0, 100)}...` : source.overview)}</p>
                  </SimilarBoxInfo>
                </SimilarBox>
              )}
            </SimilarWrapper>
          </ModalWrap>
        </>
        : null}
    </AnimatePresence>
  );
}

export default Modal;
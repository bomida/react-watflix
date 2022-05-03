import { useQuery } from "react-query";
import styled from "styled-components";
import {
  getNowPlaying,
  getPopular,
  getUpcoming,
  IResults,
} from "../api/api";
import { Loader } from "../components/Loader";
import Banner from "../components/Banner";
import Slider from "../components/Slider";

const Wrapper = styled.div`
  height: max-content;
  padding-bottom: 40px;
`;

const SliderContainer = styled.div`
  position: relative;
  margin-top: -80px;
`;

function Home() {
  const { isLoading, data: nowPlaying } = useQuery<IResults>(
    ["movies", "nowPlaying"], getNowPlaying
  );

  const { data: popular } = useQuery<IResults>(
    ["movies", "popular"], getPopular
  );

  const { data: upcoming } = useQuery<IResults>(
    ["movies", "upcoming"], getUpcoming
  );

  return (
    <Wrapper>
      {isLoading ? <Loader /> :
        <>
          <Banner data={nowPlaying} category="movie" type="nowPlaying" title="Now Playing" />
          <SliderContainer>
            <Slider data={nowPlaying} category="movie" type="nowPlaying" title="Now Playing" />
            <Slider data={popular} category="movie" type="popular" title="Popular" />
            <Slider data={upcoming} category="movie" type="upcoming" title="Upcoming" />
          </SliderContainer>
        </>
      }
    </Wrapper >
  );
}

export default Home;
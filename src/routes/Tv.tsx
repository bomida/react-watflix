import { useQuery } from "react-query";
import styled from "styled-components";
import { getTvOnAir, getTvTopRate, ITvResults } from "../api/api";
import Banner from "../components/Banner";
import { Loader } from "../components/Loader";
import Slider from "../components/Slider";

const Wrapper = styled.div`
  height: max-content;
`;

const SliderContainer = styled.div`
  position: relative;
  top: -100px;
`;

function Tv() {
  const { isLoading, data: onAir } = useQuery<ITvResults>(
    ["tvs", "onAir"], getTvOnAir
  );

  const { data: topRate } = useQuery<ITvResults>(
    ["tvs", "topRate"], getTvTopRate
  );

  return (
    <Wrapper>
      {isLoading ? <Loader /> :
        <>
          <Banner data={onAir} category="tv" type="onAir" title="On Air" />
          <SliderContainer>
            <Slider data={onAir} category="tv" type="onAir" title="on Air" />
            <Slider data={topRate} category="tv" type="topRate" title="Top Rate" />
          </SliderContainer>
        </>
      }
    </Wrapper>
  );
}

export default Tv;
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSizeAtom } from "./atom";
import Router from "./Router";
import useWindowSize from "./useWindowSize";

const MobileWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 20px;
  background-color: ${props => props.theme.black.lighter};
`;

function App() {
  useWindowSize();
  const windowSize = useRecoilValue(windowSizeAtom);
  return (
    <>
      {windowSize.width > 960 ?
        <Router />
        : <MobileWarning
          style={{
            width: window.innerWidth,
            height: window.innerHeight
          }}
        >
          <h4>모바일 버전은 아직 지원되지 않습니다.</h4>
        </MobileWarning>
      }
    </>
  );
}

export default App;

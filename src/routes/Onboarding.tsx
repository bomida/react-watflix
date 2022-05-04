import { AnimatePresence, motion, useAnimation, useMotionValue, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OnboardingWrap = styled(motion.div)`
  height: 100%;
  position: relative;
  z-index: 20;
  button {
    padding: 20px 40px;
  }
`;

const MainHeader = styled.div`
  position: absolute;
  width: 100vw;
  padding: 20px 60px;
`;

const Logo = styled.span`
  cursor: pointer;
  svg {
    width: 80px;
    fill: ${props => props.theme.color.main};
    path {
      stroke: ${props => props.theme.color.main};
      stroke-width: 1;
    }
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 12%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 1) 99%),  url(https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/58dcc237-af68-4571-a876-9dc52e1c06f7/KR-en-20220425-popsignuptwoweeks-perspective_alpha_website_large.jpg);

`;

const MainTextContainer = styled.div`
  text-align: center;
  h2 {
    font-size: 60px;
    font-weight: 600;
    line-height: 1.2;
  }
  h3 {
    margin: 20px 0 40px;
    color: ${props => props.theme.white.darker};
    font-size: 26px;
  }
  span {
    display: inline-block;
    padding: 15px 60px;
    cursor: pointer;
    color: ${props => props.theme.black.normal};
    border-radius: 5px;
    background-color: ${props => props.theme.color.main};
  }
`;

const StoryCards = styled.div`
  /* display: flex; */
  /* height: 400px; */
  /* overflow-y: scroll; */
  background-color: ${props => props.theme.black.darker};
`;

const StoryCardItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 50px 60px;
`;

const StoryText = styled.div`
  width: 40vw;
  margin-right: 10vw;
  h3 {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 20px;
  }
  p {
    line-height: 1.3;
  }
`;

const StoryImg = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 300px;
  }
`;

const ScrollMotion = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  }
}

const changePageMotion = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

function Onboarding() {
  const firstAnimate = useAnimation();
  const secondAnimate = useAnimation();
  const thirdAnimate = useAnimation();
  const { scrollY } = useViewportScroll()
  useEffect(() => {
    scrollY.onChange((y) => {
      // console.log(y)
      if (scrollY.get() > 150) {
        firstAnimate.start("visible");
      } else {
        firstAnimate.start("hidden")
      }
      if (scrollY.get() > 550) {
        secondAnimate.start("visible");
      } else {
        secondAnimate.start("hidden")
      }
      if (scrollY.get() > 950) {
        thirdAnimate.start("visible");
      } else {
        thirdAnimate.start("hidden")
      }
    });
  }, [scrollY, firstAnimate, secondAnimate, thirdAnimate]);

  return (
    <OnboardingWrap>
      <MainHeader>
        <Logo onClick={() => window.open("https://github.com/bomida/react-watflix", "_blank")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 214 82"
          >
            <path
              d="M21.1077 33.5095L15.0369 64.1588L14.9214 64.1914L13.8893 35.5453L3.4948 38.4769L7.35771 79.2116L19.1382 75.8891L24.8578 46.1589L24.9733 46.1264L26.4143 73.837L38.1948 70.5146L48.4222 25.806L38.0277 28.7376L32.9386 59.11L32.8231 59.1426L30.8093 30.7734L21.1077 33.5095ZM63.786 30.0253L59.4904 48.9856L65.4961 47.2918L63.9015 29.9927L63.786 30.0253ZM71.2509 19.3677L78.1167 59.2555L66.6827 62.4802L66.1426 55.3103L57.596 57.7207L55.9417 65.5094L44.681 68.6853L57.738 23.1787L71.2509 19.3677ZM88.3712 23.7944L85.8932 57.0623L96.6342 54.033L99.1122 20.7652L107.197 18.4851L107.901 9.03124L81.1063 16.5881L80.4021 26.042L88.3712 23.7944Z" />
            <path
              d="M109.258 29.7354L106.426 72.4817L117.167 69.4525L118.333 51.851L131.153 48.2355L131.732 39.4946L118.912 43.1102L119.396 35.8062L133.082 31.9463L133.685 22.8463L109.258 29.7354ZM138.793 21.4058L135.961 64.1521L159.926 57.3933L160.529 48.2932L147.305 52.0228L149.534 18.3765L138.793 21.4058ZM166.851 13.4924L164.02 56.2387L174.761 53.2094L177.592 10.4631L166.851 13.4924ZM181.448 9.37574L189.118 27.8926L178.096 52.2686L189.935 48.9299L194.887 34.9018L195.003 34.8692L198.25 46.5847L210.262 43.1971L202.054 24.2444L212.4 0.646211L200.389 4.03379L196.161 17.3875L196.045 17.4201L193.459 5.98816L181.448 9.37574Z" />
          </svg>
        </Logo>
      </MainHeader>
      <Main>
        <MainTextContainer>
          <div>
            <h2>Unlimited movies,<br />TV shows, and more.</h2>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <Link to="movie"><span>Get Started</span></Link>
          </div>
        </MainTextContainer>
      </Main>
      <StoryCards>
        <StoryCardItem
          variants={ScrollMotion}
          initial="hidden"
          animate={firstAnimate}
        >
          <StoryText>
            <h3>Enjoy on your TV.</h3>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </StoryText>
          <StoryImg>
            <img src={process.env.PUBLIC_URL + '/img/1.png'} alt="card_img_1" />
          </StoryImg>
        </StoryCardItem>
        <StoryCardItem
          variants={ScrollMotion}
          initial="hidden"
          animate={secondAnimate}
        >
          <StoryText>
            <h3>Download your shows to watch offline.</h3>
            <p>Save your favorites easily and always have something to watch.</p>
          </StoryText>
          <StoryImg>
            <img src={process.env.PUBLIC_URL + '/img/2.png'} alt="card_img_2" />
          </StoryImg>
        </StoryCardItem>
        <StoryCardItem
          variants={ScrollMotion}
          initial="hidden"
          animate={thirdAnimate}
        >
          <StoryText>
            <h3>Watch everywhere.</h3>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          </StoryText>
          <StoryImg>
            <img src={process.env.PUBLIC_URL + '/img/3.png'} alt="card_img_" />
          </StoryImg>
        </StoryCardItem>
      </StoryCards>
    </OnboardingWrap>
  );
}

export default Onboarding;
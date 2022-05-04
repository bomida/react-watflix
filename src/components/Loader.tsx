import styled from "styled-components";

const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Svg = styled.svg`
  width: 50vw;
  fill: rgba(0,0,0,0.2);
`;

export function Loader() {
  return (
    <LoaderDiv>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 214 82"
      >
        <path d="M21.1077 33.5095L15.0369 64.1588L14.9214 64.1914L13.8893 35.5453L3.4948 38.4769L7.35771 79.2116L19.1382 75.8891L24.8578 46.1589L24.9733 46.1264L26.4143 73.837L38.1948 70.5146L48.4222 25.806L38.0277 28.7376L32.9386 59.11L32.8231 59.1426L30.8093 30.7734L21.1077 33.5095ZM63.786 30.0253L59.4904 48.9856L65.4961 47.2918L63.9015 29.9927L63.786 30.0253ZM71.2509 19.3677L78.1167 59.2555L66.6827 62.4802L66.1426 55.3103L57.596 57.7207L55.9417 65.5094L44.681 68.6853L57.738 23.1787L71.2509 19.3677ZM88.3712 23.7944L85.8932 57.0623L96.6342 54.033L99.1122 20.7652L107.197 18.4851L107.901 9.03124L81.1063 16.5881L80.4021 26.042L88.3712 23.7944Z" />
        <path d="M109.258 29.7354L106.426 72.4817L117.167 69.4525L118.333 51.851L131.153 48.2355L131.732 39.4946L118.912 43.1102L119.396 35.8062L133.082 31.9463L133.685 22.8463L109.258 29.7354ZM138.793 21.4058L135.961 64.1521L159.926 57.3933L160.529 48.2932L147.305 52.0228L149.534 18.3765L138.793 21.4058ZM166.851 13.4924L164.02 56.2387L174.761 53.2094L177.592 10.4631L166.851 13.4924ZM181.448 9.37574L189.118 27.8926L178.096 52.2686L189.935 48.9299L194.887 34.9018L195.003 34.8692L198.25 46.5847L210.262 43.1971L202.054 24.2444L212.4 0.646211L200.389 4.03379L196.161 17.3875L196.045 17.4201L193.459 5.98816L181.448 9.37574Z" />
      </Svg>
    </LoaderDiv>
  );
}
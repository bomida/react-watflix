import styled from "styled-components";

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  color: ${props => props.theme.white.darker};
  font-size: 14px;
  background-color: ${props => props.theme.black.lighter};
    svg {
      width: 60px;
      fill: ${props => props.theme.white.darker};
    }
    p {
      line-height: 1.2;
    }
`;

const GithubLink = styled.button`
  all: unset;
  float: right;
  margin-top: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: .2s ease-in;
  &:hover {
    color: ${props => props.theme.white.normal};
  }
`;

function Footer() {
  return (
    <FooterWrap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 199 80"
      >
        <path
          d="M21.7079 31.4942L15.6371 62.1435L15.5216 62.1761L14.4895 33.53L4.09498 36.4616L7.95789 77.1963L19.7383 73.8738L25.458 44.1436L25.5735 44.1111L27.0145 71.8217L38.795 68.4993L49.0224 23.7907L38.6279 26.7223L33.5388 57.0947L33.4233 57.1273L31.4095 28.7581L21.7079 31.4942ZM60.9213 28.9871L56.6258 47.9475L62.6315 46.2537L61.0368 28.9546L60.9213 28.9871ZM68.3862 18.3296L75.252 58.2174L63.818 61.4421L63.278 54.2722L54.7314 56.6826L53.077 64.4713L41.8163 67.6472L54.8734 22.1406L68.3862 18.3296ZM81.771 23.8099L79.293 57.0777L90.034 54.0484L92.512 20.7806L100.597 18.5005L101.301 9.04667L74.5061 16.6036L73.8019 26.0574L81.771 23.8099Z" />
        <path
          d="M100.338 27.8669L97.5061 70.6132L108.247 67.584L109.413 49.9825L122.233 46.367L122.812 37.6261L109.992 41.2417L110.476 33.9377L124.162 30.0778L124.765 20.9778L100.338 27.8669ZM128.14 20.0259L125.308 62.7722L149.273 56.0133L149.876 46.9133L136.652 50.6429L138.881 16.9966L128.14 20.0259ZM154.466 12.6011L151.635 55.3474L162.376 52.3181L165.207 9.5718L154.466 12.6011ZM167.331 8.97302L175.001 27.4899L163.979 51.8659L175.817 48.5272L180.77 34.4991L180.886 34.4665L184.133 46.1819L196.144 42.7944L187.936 23.8417L198.283 0.243491L186.272 3.63107L182.044 16.9848L181.928 17.0174L179.342 5.58544L167.331 8.97302Z" />
      </svg>
      <div>
        <p>If you want see more project click the link!</p>
        <GithubLink onClick={() => window.open('https://github.com/bomida', '_blank')}>My GitHub</GithubLink>
      </div>
    </FooterWrap>
  );
}

export default Footer;
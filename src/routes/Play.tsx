import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileWrap = styled.div`
    width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lavender;
  button {
    padding: 20px 40px;
  }
`;

function Play() {
  return (
    <ProfileWrap>
      <Link to="movie">
        <button>go to Movie</button>
      </Link>
    </ProfileWrap>
  );
}

export default Play;
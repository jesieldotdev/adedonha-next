import styled from "styled-components";

const GameFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  justify-content: center;
  /* background-color: red; */
  height: 92vh;

  .lottie{
    width: 500px;
    z-index: -999;
    position: relative;
    bottom: -50px;
    left: 1vw;
    display: none;
  }

  @media (min-width: 601px) {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-around;

    .title {
      /* width: 700px; */
      display: flex;
      /* background-color: red; */
    }

    .lottie{
      display: block;
    }

  }
  .title {
    font-size: 24px;
    font-weight: 900;
    margin: 0;
    padding: 0;
    text-align: center;
    /* background-color: red; */
    /* width: 300px; */
    margin: 8px;
    text-transform: uppercase;
    line-height: 1.2;
  }

  .letter {
    font-size: 64px;
    font-weight: 900;
    text-align: center;

    margin: 0;
    margin-bottom: 8px;
  }
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: yellow; */
  margin-top: auto;
  gap: 8px;
`;

export { GameFormContainer, GridContainer };

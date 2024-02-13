import styled from "styled-components";

export const RoundPanelContainer = styled.div`
  background-color: #29a655;
  color: #fefefe;
  padding: 16px;
  border-radius: 16px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;

  @media screen and (orientation: landscape) {
    /* Estilos para telas em orientação paisagem */
    width: 50vw;
  }

  .row {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .room_name {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }

  .align_center {
    justify-content: center;
  }

  .mt-16 {
    margin-top: 16px;
  }
  .mt-8 {
    margin-top: 8px;
  }

  .mt-auto {
    margin-top: auto;
  }
`;

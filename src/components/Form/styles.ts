import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;

  font-family: 'Poppins', sans-serif !important;

  .title {
    font-size: 64px;
    font-weight: 900;
    margin: 0;
    text-align: center;
  }

  span {
    font-weight: 600;
  }

  .correct_answer{
    color: green;
  }

  .wrong_answer{
    color: red;
  }

  .points{
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif !important;
  }
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  

  @media (min-width: 601px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (orientation: landscape) {
    /* Estilos para telas em orientação paisagem */
    width: 50vw;
    margin: auto;
  }

  .form-control{
    padding-top: 0;
    margin-top: 0;
  }
`;
export const FormItem = styled.div`
  margin-top: 0;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  padding-top: 0;
  font-family: 'Poppins', sans-serif !important;

  .text-field {
    width: 320px;
    display: flex;
    margin: auto;
    justify-content: center;
    margin-bottom: 0px;
    padding-top: 0;
    border-radius: 4px;
    color: #fefefe;
    
  }

  .left-icon {
   /* position: relative;
   top: 10px;
   left: 0px; */
   font-size: 24px;
  }

  #my-helper-text{
  
  }
`;


import styled from "styled-components";

const ModalContainer = styled.div`
  /* border-radius: 16px; */
  background-color: #29a655;
  color: #f4f4f4;
  height: 100%;
  padding: 0px;
  margin: 0px;
  padding: 16px;
  display: flex;
  flex-direction: column;

  gap: 8px;

  .room_list{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .room_btn{
    color: #363636;
    background-color: #f4f4f4;
    font-size: 18px;
    width: fit-content;
    align-items: center;
    display: flex;
    gap: 8px;
  }

  .close_btn{
    /* background-color: #eee; */
    /* padding: 16px;
    width: 56px;
    height: 56px; */

    position: relative;
    top: -52px;
    left: 564px;
  }

  .label {
    font-size: 24px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
  }
  .sub {
    margin-top: 8px;
    width: 100%;
    font-size: 14px;
    font-weight: 2300;
    margin-top: 0;
    margin-bottom: 16px;
  }

  .name-input {
    font-size: 24px;
    width: 100%;
    color: #f4f4f4;
  }

  .lottie {
    max-width: 300px;
    margin: auto;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .button{
    margin-top: 16px;
    margin-bottom: 16px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
`;

const Input = styled.input`
  padding: 16px;

  font-size: 24px;
  display: flex;
  /* width: 300px; */
  border-radius: 8px;
  border: 0;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;

  &:focus {
    border-width: 0;
    outline: none;
  }
`;

export { ModalContainer, Input };

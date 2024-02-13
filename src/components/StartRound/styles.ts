import styled from "styled-components";

export const StartRoundContainer = styled.div`
      background-color: #29a655;
    color: #fefefe;
    padding: 16px;
    border-radius: 16px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    /* height: 300px; */
    display: flex;
    flex-direction: column;

    .row{
        display: flex;
        gap: 8px;
    }

    .room_name{
        font-size: 20px;
        font-weight: 600;
        text-align: center;
    }

    .align_center{
        justify-content: center;
    }

    .mt-16{
        margin-top: 16px;
    }
    .mt-8{
        margin-top: 8px;
    }

    .mt-auto{
        margin-top: auto;
    }
`
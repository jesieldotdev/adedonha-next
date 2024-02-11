import styled from "styled-components";

export const HomeScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 16px;
    width: 100%;

    .title{
        font-weight: 900;
        color: #262626;
        margin-bottom: 24px;
    }

    .lottie{
        width: 67vw;
        max-width: 300px;
    }

    .button{

        width: 100%;
        height: 120px;
        border-radius: 16px;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.2;
    }
`


export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`
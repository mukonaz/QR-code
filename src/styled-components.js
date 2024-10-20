import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: hsl(212, 45%, 89%);
    padding: 20px;
`;

export const Card = styled.div`
    background-color: hsl(0, 0%, 100%);
    border-radius: 15px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);
    text-align: center;

    @media(min-width: 768px) {
        width: 400px;
    }
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
`;

export const QRImage = styled.img`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #eee;
    border-radius: 15px;
`;

export const CardContent = styled.div`
    padding: 20px;
`;

export const Title = styled.h1`
    font-family: 'Outfit', sans-serif;
    font-size: 1.2em;
    font-weight: 700;
    color: hsl(218, 44%, 22%);
    margin-bottom: 10px;
`;

export const Text = styled.p`
    font-family: 'Outfit', sans-serif;
    font-size: 0.9em;
    font-weight: 400;
    color: hsl(220, 15%, 55%);
    line-height: 1.4;
`;

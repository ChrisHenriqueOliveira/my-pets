import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1280px;

  margin: 0 auto;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 80px 0;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;

    margin: 0;

    img {
      margin-bottom: 32px;
    }
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  margin-right: 16px;
  width: 100%;
  max-width: 500px;

  color: #000;

  animation: ${appearFromRight} 1s;

  h2 {
    font: 24px Roboto, sans-serif;
    font-weight: 400;
  }

  h1 {
    margin-top: 24px;

    font: 40px Roboto, sans-serif;
    font-weight: 700;
  }

  p {
    margin-top: 24px;

    font: 24px Roboto, sans-serif;
    font-weight: 300;
  }

  .buttons {
    width: 100%;

    a {
      text-decoration: none;
      color: #fff;
    }

    p {
      margin-top: 16px;

      text-align: right;

      font: 18px Roboto, sans-serif;
      font-weight: 400;
      color: #000;

      span {

       > a {
          cursor: pointer;

          font-weight: 500;
          color: #838bc5;

          transition: color 0.2s;

          &:hover {
            color: ${shade(0.2, '#838bc5')};
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    h1 {
      font-size: 32px;
    }

    h2,
    p {
      font-size: 16px;
    }

    .buttons {
      width: 100%;

      p {
        text-align: center;
        width: 100%;
        margin: 8px 0 16px 0;
      }
    }
  }
`;

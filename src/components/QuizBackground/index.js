// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  /* background-image: none; */
      /* background-image: url(${({ backgroundImageMobile }) => backgroundImageMobile}); */
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image:
        linear-gradient(transparent 70%, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      min-height: 680px;
      /* min-height: 600px; */
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 0;
    

  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      /* background-image: url(${({ backgroundImageMobile }) => backgroundImageMobile}); */
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 200px;
      /* min-height: 600px; */
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    
    
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;

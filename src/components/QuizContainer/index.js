import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 1px;
  margin: auto 10%;
  position: absolute;
  z-index: 2;

  @media screen and (max-width: 500px) {
    margin: 10% auto;
    padding: 15px;
  }
`;

export default QuizContainer;

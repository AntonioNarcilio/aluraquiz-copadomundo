import styled from 'styled-components'
import Widget from '../src/components/Widget'
import db from '../db.json'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 70px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: 10% auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground 
      backgroundImage={db.bg} 
      backgroundImageMobile={db.bg_mobile}>
      <QuizContainer>
      <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Em breve ...</p>
          </Widget.Content>
        </Widget>

       <Footer />

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/antonionarcilio" />
    </QuizBackground>
  );
}

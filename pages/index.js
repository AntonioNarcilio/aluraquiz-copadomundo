import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import db from '../db.json';
import HeadPage from '../src/components/Head';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 60px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: 10% auto;
    padding: 15px;
  }
`;

export default function Home() {
  const ROUTER = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <HeadPage />

      <QuizBackground
        backgroundImage={db.bg}
        backgroundImageMobile={db.bg_mobile}
      >
        <QuizContainer>

          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={(e) => {
                e.preventDefault();
                ROUTER.push(`/quiz?name=${name}`);
              }}
              >
                <input
                  onChange={(infosDoEvento) => {
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Digite o seu nome"
                />

                <button type="submit" disabled={name.length === 0}>
                  Jogar&ensp;
                  {name}
                </button>
              </form>
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

        <GitHubCorner projectUrl={db.others.github} />
      </QuizBackground>
    </>
  );
}

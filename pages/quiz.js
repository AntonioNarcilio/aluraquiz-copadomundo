/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import HeadPage from '../src/components/Head';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import db from '../db.json';

export default function quizPage() {
  return (
    <>
      <HeadPage />

      <QuizBackground
        backgroundImage={db.bg}
      >
        <QuizContainer>

          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Pergunta 1 de 5</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
                when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header>
              <h1>Em Desenvolvimento ...</h1>
            </Widget.Header>
          </Widget>

          <Footer />

        </QuizContainer>

        <GitHubCorner projectUrl={db.others.github} />
      </QuizBackground>
    </>
  );
}

import React from 'react';
import { useRouter } from 'next/router';

import HeadPage from '../src/components/Head';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Form from '../src/components/Form';
import db from '../db.json';

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
              <Form onSubmit={(e) => {
                e.preventDefault();
                ROUTER.push(`/quiz?name=${name}`);
              }}
              >
                <input
                  onChange={(infosDoEvento) => {
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Digite o seu nome para começar a jogar 🕹"
                />

                <button type="submit" disabled={name.length === 0}>
                  JOGAR&ensp;
                  {name}
                </button>
              </Form>
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

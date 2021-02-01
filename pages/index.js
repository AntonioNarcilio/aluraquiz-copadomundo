import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import HeadPage from '../src/components/Head';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import db from '../db.json';

export default function Home() {
  const ROUTER = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <HeadPage />

      <QuizBackground
        backgroundImage={db.bg}
        // backgroundImageMobile={db.bg_mobile}
      >
        <QuizContainer>

          <QuizLogo />
          <Widget
            // trocando a tag, a ser usada
            as={motion.section}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, x: '0' },
              hidden: { opacity: 0, x: '-100%' },
            }}
            initial="hidden"
            animate="show"
          >
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
                <Input
                  name="NomeDoUsuario"
                  onChange={(infosDoEvento) => {
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Diga o seu nome para começar a jogar !"
                  value={name}
                />

                <Button type="submit" disabled={name.length === 0}>
                  {`JOGAR ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget
            as={motion.section}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1, x: '0' },
              hidden: { opacity: 0, x: '-100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>Quizzes da Galera</h1>
            </Widget.Header>
            <Widget.Content>

              <ul>
                {db.external.map((linkExterno) => {
                  const [projectName, githubUserName] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUserName}`}
                      >
                        {`${githubUserName} | ${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>

            </Widget.Content>
          </Widget>

          <Footer
            as={motion.footer}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              show: { opacity: 1, x: '0' },
              hidden: { opacity: 0, x: '-100%' },
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>

        <GitHubCorner projectUrl={db.others.github} />
      </QuizBackground>
    </>
  );
}

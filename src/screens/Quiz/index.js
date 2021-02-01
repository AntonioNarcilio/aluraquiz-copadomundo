import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
// import db from '../../../db.json';
import Widget from '../../components/Widget';
// import QuizLogo from '../../components/QuizLogo';
import Footer from '../../components/Footer';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import Button from '../../components/Button';
import AlternativeForm from '../../components/AlternativeForm';
import BackLinkArrow from '../../components/BackLinkArrow';

import loadingAnimation from '../../components/Animations/loading.json';
import correctAnimation from '../../components/Animations/icon_check.json';
import errorAnimation from '../../components/Animations/icon_error.json';

function ResultWidget({ results }) {
  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '-100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          Seu resultado:
        </h3>
      </Widget.Header>

      <Widget.Content>
        <p>
          Voce acertou&ensp;
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)}
          {/* Ou de forma mais simplificada ↓↓ */}
          {/* {results.filter((x) => x).length} */}

          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          &ensp;de&ensp;{results.length}&ensp;perguntas !
        </p>
        <ul>
          {results.map((result, index) => (
            <Widget.Topic>
              <li key={`result__${result}`}>
                {index + 1}
                {/* &ensp;Resultado:&ensp; */}
                {result === true
                  ? '°  Acertou'
                  : '°  Errou'}
              </li>
            </Widget.Topic>
          ))}

        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <>
      <Widget
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
          Aguarde !!!
        </Widget.Header>

        <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginLeft: '-9px', marginBottom: '-9px' }}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: loadingAnimation,
              }}
              height={100}
              width={100}
            />
          </div>
        </Widget.Content>
      </Widget>
    </>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [isQuestionSubmited, serIsQuestionSubmited] = useState();
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);

  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '-100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativeForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            serIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              serIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button style={{ marginTop: '0px' }} type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>

          { isQuestionSubmited && isCorrect
          && (
            <div style={{ marginTop: '24px', marginBottom: '-10px' }}>
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: correctAnimation,
                }}
                height={50}
                width={50}
              />
            </div>
          )}
          { isQuestionSubmited && !isCorrect
          && (
            <div style={{ marginTop: '24px', marginBottom: '-10px' }}>
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: errorAnimation,
                }}
                height={50}
                width={50}
              />
            </div>
          )}
        </AlternativeForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage({ externalQuestions, externalBg }) {
  // React.useState => Defini o estado inicial (aqui começaremos com o estado da tela loading)
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 6 * 1000);
  // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        {/* <QuizLogo /> */}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}

        <Footer
          as={motion.footer}
          transition={{ delay: 7, duration: 0.5 }}
          variants={{
            show: { opacity: 1, x: '0' },
            hidden: { opacity: 0, x: '-100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
    </QuizBackground>
  );
}

QuestionWidget.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  addResult: PropTypes.func.isRequired,
};

ResultWidget.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array.isRequired,
};

QuizPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  externalQuestions: PropTypes.array.isRequired,
  externalBg: PropTypes.string.isRequired,
};

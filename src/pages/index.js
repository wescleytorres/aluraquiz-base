import React, { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import QuizLogo from '../components/QuizLogo';
import Input from '../components/Input';
import Button from '../components/Button';
import { QuizContainer } from '../components/QuizContainer';

import db from '../../db.json';

const Home = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Nordestequiz</title>
        <link rel="icon" href="https://photos.enjoei.com.br/fantasia-cosplay-chapeu-lampiao-cangaceiro-couro/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81NDAxMDE4LzBjOGY5OTI2NDIwYTY2MDRkMzcxMWRhMjJmZjc5OTNkLmpwZw" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/wescleytorres/aluraquiz-base" />
    </QuizBackground>
  );
};

export default Home;

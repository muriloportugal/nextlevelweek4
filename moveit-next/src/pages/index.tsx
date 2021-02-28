import Head from 'next/head';
import {GetServerSideProps} from 'next';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Perfil';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from '../styles/pages/Home.module.css';

interface HomeProps{
  level: number
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props:HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar  />

        <CountdownProvider>
          <section>
            <div className="">
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

// Função do next que faz uma chamada ao backend, só funciona em páginas não em componentes e ela precisa ser
// obrigatoriamente async.
// É utilizada para otimizar a página para os motores de busca, ela quem vai buscar os
// os dados na hora que um dos motores de busca tentarem acessar a página.
export const getServerSideProps:GetServerSideProps = async(ctx) => {
  
  const { level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
    level:Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted:  Number(challengesCompleted)
  }
  }
}
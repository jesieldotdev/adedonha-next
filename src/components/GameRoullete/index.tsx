import { Button } from "@mui/material";
import * as S from "./styles";
import { Suspense, useState } from "react";
// import Roullete from "../Roullete";
const RoulleteLazy = React.lazy(() => import('../Roullete'));
import GameFormViewController from "./viewController";
// import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Question from '../../assets/Lotties/question.json'
import MusicPlayer from "../MusicPlayer";
import React from "react";
import { useRouter } from "next/router";

interface RoundRoulleteProps {
  startButton: () => void
  setLetter: (l: string) => void
}

const RoundRoullete = ({ startButton, setLetter }: RoundRoulleteProps) => {
  const {
    handleSpinClick,
    data,
    letters,
    mustSpin,
    prizeNumber,
    selectedLetter,
    setMustSpin,
    alreadySpin,
    isPlaying,
    setIsPlaying,
    togglePlay,
    audioRef
  } = GameFormViewController();


  React.useEffect(() => {
    if (prizeNumber) {
      setLetter(letters[prizeNumber])

    }
  }, [prizeNumber])

  return (
    <S.GameFormContainer>
      <div>
        <p className="title">Gire a roleta para escolher a letra inicial</p>
        <p id="letraEscolhida">{selectedLetter || null}</p>

        <Lottie className="lottie" animationData={Question} />
      </div>

      <div style={{
        // backgroundColor:'red'
      }}>
        <Suspense fallback={<div>Carregando...</div>}>
          <RoulleteLazy
            letters={data}
            mustSpin={mustSpin}
            prizeNumber={prizeNumber}
            setMustSpin={setMustSpin}
            handleSpinClick={undefined}
          />
        </Suspense>


        {!mustSpin ? (
          <>
            <p className="letter">{letters[prizeNumber]}</p>
          </>
        ) : null}

        <MusicPlayer isPlaying={mustSpin} setIsPlaying={setIsPlaying} togglePlay={() => togglePlay(true)} audioRef={audioRef} />

        <S.GridContainer>
          <Button
            disabled={mustSpin}
            variant="contained"
            onClick={() => handleSpinClick()}
          >
            Girar Roleta
          </Button>
          <Button
            color="success"
            disabled={mustSpin}
            variant="contained"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              startButton()
            }}
          >
            Começar
          </Button>
          {/* {alreadySpin && !mustSpin ? (
            <Link
              style={{
                textDecoration: "none",
              }}
              to={`/game/start/${letters[prizeNumber]}`}
            >
              <Button
                disabled={mustSpin}
                color="secondary"
                variant="contained"
                onClick={() => handleSpinClick()}
              >
                Continuar
              </Button>
            </Link>
          ) : null} */}
        </S.GridContainer>
      </div>
    </S.GameFormContainer>
  );
};

export default RoundRoullete;

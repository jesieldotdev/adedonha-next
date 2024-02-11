import { Button } from "@mui/material";
import * as S from "./style";
import { useState } from "react";
import Roullete from "../Roullete";
import GameFormViewController  from "./viewController";
// import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Question from '../../assets/Lotties/question.json'
import MusicPlayer from "../MusicPlayer";

const GameForm = () => {
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
        <Roullete
          letters={data}
          mustSpin={mustSpin}
          prizeNumber={prizeNumber}
          setMustSpin={setMustSpin}
          handleSpinClick={undefined}
        />

        {!mustSpin ? (
          <>
            <p className="letter">{letters[prizeNumber]}</p>
          </>
        ) : null}

        <MusicPlayer isPlaying={mustSpin} setIsPlaying={setIsPlaying} togglePlay={() => togglePlay()} audioRef={audioRef}  />

        <S.GridContainer>
          <Button
            disabled={mustSpin}
            variant="contained"
            onClick={() => handleSpinClick()}
          >
            Girar Roleta
          </Button>
          {alreadySpin && !mustSpin ? (
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
          ) : null}
        </S.GridContainer>
      </div>
    </S.GameFormContainer>
  );
};

export default GameForm;

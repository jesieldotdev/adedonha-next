import React, { useState, useRef, useEffect } from "react";
import Music from "../../assets/Sounds/";
import { Button } from "@mui/material";

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: any;
  togglePlay: any
  audioRef: any
}

const MusicPlayer = ({isPlaying, setIsPlaying, togglePlay, audioRef}:MusicPlayerProps) => {
    // const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <audio ref={audioRef}>
        <source src={Music} type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      {/* <button onClick={togglePlay}>
        {isPlaying ? "Pausar" : "Reproduzir"}
      </button> */}
    </div>
  );
};

export default MusicPlayer;

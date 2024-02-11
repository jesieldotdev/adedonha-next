import { useEffect, useRef, useState } from "react";

const GameFormViewController = () => {
  const [selectedLetter, setSelectedLetter] = useState<any>();

  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let data: any = [];

  letters.map((item: any) => {
    data.push({
      option: item,
    });
  });

  const [mustSpin, setMustSpin] = useState(false);
  const [alreadySpin, setAlreadySpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<any>(null);

  const togglePlay = (toggle:boolean) => {
    if (!toggle) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * letters.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setIsPlaying(true);
      setAlreadySpin(true);
      togglePlay(true)
    }
  };

  useEffect(() => {
    if(!mustSpin){
      togglePlay(false)
    }

  }, [mustSpin])
  return {
    data,
    letters,
    mustSpin,
    selectedLetter,
    setMustSpin,
    prizeNumber,
    setPrizeNumber,
    handleSpinClick,
    alreadySpin,
    isPlaying,
    setIsPlaying,
    audioRef,
    togglePlay,
  };
};

export default GameFormViewController 

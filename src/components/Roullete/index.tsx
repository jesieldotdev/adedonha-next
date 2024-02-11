import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import {
  ImageProps,
  StyleType,
} from "react-custom-roulette/dist/components/Wheel/types";
import * as S from "./styles";

interface RoulleteProps {
  letters: any;
  mustSpin: any;
  prizeNumber: any;
  setMustSpin: any;
  handleSpinClick: any;
  option?: string;
  image?: ImageProps;
  style?: StyleType; // Optional
  optionSize?: number; // Optional

}

const data = [{ option: "0" }, { option: "1" }, { option: "2" }];

const Roullete = ({
  letters,
  handleSpinClick,
  mustSpin,
  prizeNumber,
  setMustSpin,
}: RoulleteProps) => {
  return (
    <S.RoulleteContainer>
      <Wheel
        textDistance={90}
        textColors={["#fff"]}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={letters}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        spinDuration={0.85}
        backgroundColors={[
          "#EE4040",
          "#F0CF50",
          "#815CD1",
          "#3DA5E0",
          "#34A24F",
          "#F9AA1F",
          "#EC3F3F",
          "#FF9000",
        ]}
      />
        </S.RoulleteContainer>
  );
};

export default Roullete;

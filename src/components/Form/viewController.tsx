import { Topic } from "@/models/General";
import { useEffect, useState } from "react";

const FormViewController = () => {
  const [color, setColor] = useState<any>();

  const topics: Topic[] = [
    {
      name: "Nome",
      icon: "✒️",
    },
    {
      name: "Lugar",
      icon: "🌏",
    },
    {
      name: "Animal",
      icon: "🦝",
    },
    {
      name: "Cor",
      icon: "🧮",
    },
    {
      name: "Comida",
      icon: "🍕",
    },
    {
      name: "Objeto",
      icon: "🛠️",
    },
    {
      name: "Profissão",
      icon: "👮🏼",
    },
    {
      name: "FDN",
      icon: "📺",
    },
    {
      name: "Parte do corpo",
      icon: "🫀",
    },
  ];

  const colors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];

  function ramdomColor() {
    let c = colors[Math.floor(Math.random() * colors.length)];
    return c;
  }

  return {
    topics,
    colors,
    ramdomColor,
    color,
  };
};

export default FormViewController;

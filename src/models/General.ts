export interface Player {
    id: string
    name: string
}

export interface Score extends Player {
    hits: number
    points: number
  }
export interface Room {
    id: string;
    name: string;
    players: Player[];
    currentRound: number;
    duration: number;
    timer: number;
    letter: string
    answers: Answers[]
    score: Score | undefined
    winner: Score | undefined
}

export interface Topic {
    name: string
    icon: string
}

export interface UserFormTopics {
    Nome: string;
    Lugar: string;
    Animal: string;
    Cor: string;
    Comida: string;
    Objeto: string;
    'Profissão': string;
    FDN: string;
    'Parte do corpo': string;
  }

  export interface SendForm{
    userID: string
    userName: string
    form: UserFormTopics
  }

  export interface Answers {
    userID: string;
    form: UserFormTopics;
    hits: number;
  }
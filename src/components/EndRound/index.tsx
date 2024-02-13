import IconButton from "@mui/material/IconButton"
import * as S from './styles'
import { People, PersonFill, PlayCircleFill } from "styled-icons/bootstrap"
import {House} from '@styled-icons/fa-solid/House'
import { Timer } from "styled-icons/boxicons-regular"
import { TargetArrow } from "styled-icons/fluentui-system-filled"
import { TrophyFill } from "@styled-icons/bootstrap/TrophyFill"
import { Medal } from "@styled-icons/boxicons-solid/Medal"
import { Answers, Player, Room } from "@/models/General"
import { resolve } from "styled-jsx/macro"
import React from "react"

interface EndRoundProps {
    startFunction: (roomID: string) => void
    homeFunction: () => void
    room: Room
    playerAnswer: Answers | undefined
    answers: Answers[]
    players: Player[]
    clientID: string
    endRound: number | undefined
}

interface Winner {
    userID: string
    name: string
    hits: number
}

const EndRound = ({
    startFunction,
    homeFunction,
    room,
    playerAnswer,
    answers,
    players,
    clientID,
    endRound
}: EndRoundProps) => {


    console.log(room)
    console.log(endRound)
    return (
        <S.EndRoundContainer>
            {/* <p className="room_name">{roomName}</p> */}
            <p className="room_name">A partida {endRound} acabou!</p>
            <div className="row mt-16">
                <Timer size={18} /><p>{room.duration} segundos</p>
            </div>
            {/* <div className="row mt-16">
                <TargetArrow size={18} /><p>{room.currentRound}</p>
            </div> */}

            {/* {
                room && room.players && room.players.map(player =>
                    <div className="row mt-8">
                        <PersonFill size={18} color="#fefefe" /> <p key={player.id}>{player.name}</p>
                    </div>
                )
            } */}

            <div className="row mt-8">
                <TargetArrow size={18} color="#fefefe" /><p>{room.winner?.hits} acertos</p>
            </div>
            <div className="row mt-8">
                <TrophyFill size={18} color="#fefefe" /><p>{room.winner?.name} {room.winner?.id === clientID ? '(você)' : null}</p>
            </div>
            <div className="row mt-8">
                <Medal size={18} color="#fefefe" /><p>{room.winner?.points} pontos</p>
            </div>

            <div className="row align_center mt-16">
                <IconButton
                    onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        startFunction(room.id)
                    }} ><PlayCircleFill size={32} color="#fefefe" /></IconButton>
                <IconButton
                    onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        homeFunction()
                    }}
                ><House color="#fefefe" size={32} /></IconButton>
            </div>

        </S.EndRoundContainer>
    )
}

export default EndRound
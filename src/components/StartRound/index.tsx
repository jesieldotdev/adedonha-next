import IconButton from "@mui/material/IconButton"
import { People, PersonFill, PlayCircleFill, House } from "styled-icons/bootstrap"
import * as S from './styles'
import { Timer } from "styled-icons/boxicons-regular"
import { TargetArrow } from "@styled-icons/fluentui-system-regular/TargetArrow"
import { Player, Room } from "@/models/General"

interface StartRoundProps {
    startFunction: (roomID: string) => void
    homeFunction: () => void
    room: Room
}

const StartRound = ({
    startFunction,
    homeFunction,
    room
}: StartRoundProps) => {


    return (
        <S.StartRoundContainer>
            <p className="room_name">{room.name}</p>
            <div className="row mt-16">
                <Timer size={18} /><p>{room.duration} segundos</p>
            </div>
            <div className="row mt-16">
                <TargetArrow size={18} /><p>{room.currentRound}</p>
            </div>

            {
                room && room.players && room.players.map(player =>
                    <div className="row mt-8">
                        <PersonFill size={18} color="#fefefe" /> <p key={player.id}>{player.name}</p>
                    </div>
                )
            }

            <div className="row align_center mt-auto">
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

        </S.StartRoundContainer>
    )
}

export default StartRound
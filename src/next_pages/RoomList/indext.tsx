import { useRouter } from "next/router"
import RoomListViewController from "./viewController"
import { Button, TextField } from "@mui/material"
import { DoorOpenFill } from "styled-icons/bootstrap"
import * as S from './styles'
import React from "react"
import { useGameContext } from "@/context/GameContext"

const RoomList = () => {

    const {
        players,
        rooms,
        handleCreateRoom,
        joinRoom
    } = useGameContext()
    const viewController = RoomListViewController()
    const router = useRouter()
    const [roomName, setRoomName] = React.useState<string>('')

    function handleJoinRoom(roomId: string): void {
        if (roomId) {
            joinRoom(roomId)
            router.push(`/rooms/${roomId}`);
        }
    }

    return (
        <S.Container>
            {
                rooms.length ?
                    <div>
                        <p className="label">Salas disponiveis</p>
                        <div className="room_list">
                            {
                                rooms.map(room => <Button onClick={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    if (room && room.id) {
                                        handleJoinRoom(room.id)
                                    }
                                }} className="room_btn" key={room.id}>{room.name} <DoorOpenFill size={18} color='#323232' /></Button>)
                            }
                        </div>
                    </div> : null
            }



            <div>
                <h2>Criar Nova Sala</h2>
                <TextField
                    variant="outlined"
                    className="nome-input"
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 8,
                        width: '100%',
                        color: '#343434',
                        fontSize: '32px',

                    }}
                    type="text"
                    placeholder="Nome da Sala"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                />
                <Button className="room_btn" onClick={() => {
                    handleCreateRoom(roomName)
                    setRoomName('')
                }}>Criar Sala</Button>
            </div>
        </S.Container>
    )
}

export default RoomList
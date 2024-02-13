import { Input, ModalContainer } from "./styles";
import Thinking from '../../assets/Lotties/thinking.json'
import Lottie from "lottie-react";
import { Button, IconButton, TextField } from "@mui/material";
import ReactModal from 'react-modal'
// import { Link } from "react-router-dom";
import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle'
import React from "react";
import { Socket } from "socket.io-client";
import { Player, Room } from "../../models/General";
import { DoorOpenFill } from '@styled-icons/bootstrap/DoorOpenFill'
import Steps from "../Steps";
import { useRouter } from "next/router";
import { useGameContext } from "@/context/GameContext";

interface AddPlayerModalProps {
  isOpen: boolean;
  close?: any;
  rooms: Room[]
  players: Player[]
}

const AddPlayerModal = ({ isOpen, close, rooms, players, }: AddPlayerModalProps) => {
  const router = useRouter()
  const { changePlayerName, handleCreateRoom, joinRoom, startRound } = useGameContext()
  const [actualStep, setActualStep] = React.useState<number>(1)
  const [playerName, setPlayerName] = React.useState<string>('')
  const [roomName, setRoomName] = React.useState<string>('')


  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (playerName && playerName.trim() !== '') {
      changePlayerName(playerName)
      setActualStep(2)
    }
  };

  function handleJoinRoom(roomId: string): void {
    if (roomId) {
        joinRoom(roomId)
        router.push(`/rooms/${roomId}`);
    }
}

  const items = [
    {
      id: 1,
      content: <>  <Lottie className="lottie" animationData={Thinking} />

        <p className="label">Nome do jogador</p>
        <p className="sub">Esse será o nome que ficara visivel os outros jogadores</p>

        <form>
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
            onChange={(e) => setPlayerName(e.currentTarget.value)}
            placeholder="Seu Nome Aqui"
          />
          <br></br>
          {/* <Link
        style={{
          textDecoration: 'none'
        }}
        to='/game'
      > */}
        </form>
        <Button onClick={(e) => {
          handleSubmit(e)
          // setActualStep(prev => {
          //   if (prev === 1) {
          //     return 2
          //   } else {
          //     return 1
          //   }
          // })
        }} className="button" variant="contained">Confirmar</Button>
        {/* </Link> */}</>
    },
    {
      id: 2,
      content: <>

        {
          rooms.length ?
            <div>
              <p className="label">Salas disponiveis</p>
              <div className="room_list">
                {
                  rooms.map(room => <Button onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    handleJoinRoom(room.id)
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
          <button onClick={() => {
            handleCreateRoom(roomName)
            setRoomName('')
          }}>Criar Sala</button>
        </div>
        <Button onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setActualStep(prev => {
            if (prev === 1) {
              return 2
            } else {
              return 1
            }
          })
        }} className="button" variant="contained">Voltar</Button>
        {/* </Link> */}</>
    },
  ]


  return (
    <ReactModal
      style={{
        content: {
          position: "absolute",
          top: "2vh",
          left: "8vw",
          // right: "40px",
          bottom: "40px",
          borderRadius: "32px",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          padding: "0px",
          maxHeight: '81vh',
          minWidth: '300px',
          maxWidth: '50vw',
          margin: 'auto'

        },
      }}
      isOpen={isOpen}
      onRequestClose={() => close()}
    >
      <ModalContainer>
        <div style={{
          maxWidth: 400,
          margin: 'auto'
        }}>
          {/* <IconButton
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              close()
            }}
            className="close_btn">
            <CloseCircle size={64} color="#eee" />
          </IconButton> */}

          <Steps actualItem={actualStep} items={items} />


        </div>
      </ModalContainer>
    </ReactModal>
  );
};

export default AddPlayerModal;

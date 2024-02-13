import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

import * as S from "./styles"
import FormViewController from "./viewController";
import { useParams } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { SendForm, Topic, UserFormTopics } from "@/models/General";
import PlayersPanel from "../PlayersPanel";
import React from "react";
import { useGameContext } from "@/context/GameContext";
import { useRouter } from "next/router";
import { Play } from "styled-icons/bootstrap";
import StartRound from "../StartRound";
import EndRound from "../EndRound";
import { People, PersonFill, PlayCircleFill } from "styled-icons/bootstrap"
import { House } from '@styled-icons/fa-solid/House'
import { Timer } from "styled-icons/boxicons-regular"
import { TargetArrow } from "styled-icons/fluentui-system-filled"
import { TrophyFill } from "@styled-icons/bootstrap/TrophyFill"
import RoundPanel from "../RoundPanel";
import Roullete from "../Roullete";
import GameRoullete from "../GameRoullete";

const FormGame = () => {
  const router = useRouter()
  const [userForm, setUserForm] = React.useState<UserFormTopics | FieldValues>()
  const [startedRound, setStartedRound] = React.useState<boolean>()
  const [letter, setLetter] = React.useState<string>('a')
  const [showRoullete, setShowRoullete] = React.useState<boolean>(false)
  const {
    players,
    rooms,
    clientID,
    sendForm,
    socket,
    forms,
    timer,
    currentRound,
    startRound,
    actualRoomState,
    endRound
  } = useGameContext()
  const selectedLetter = "J";
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset
    ,
    formState: { errors } } = useForm();
  const { slug } = router.query

  const existRoom = rooms.findIndex(room => room.id === slug)
  const actualRoom = rooms?.find(item => item.id === slug)
  const playerAnswer = actualRoom?.answers.find(item => item.userID === clientID)

  const onSubmit = (data: Topic) => {
    console.log(data); // Aqui você terá acesso aos dados do formulário após o envio
  };

  function getUserName(): string {

    if (players && players.findIndex(item => item.id === socket.id)) {
      const x = players.find(item => item.id === socket.id)
      return x?.name ? x.name : ''
    }
    return ''
  }

  const { topics, ramdomColor, color } = FormViewController();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    setValue(fieldName, e.target.value);
    if (socket.id && fieldName) {
      setUserForm(getValues())
      const data = {
        userID: socket.id,
        userName: getUserName(),
        form: userForm
      } as SendForm
      sendForm(data)
    }

  };

  function handleClickHome() {
    router.push('/')
  }
  function handleClickStart() {
    if (actualRoom) {
      setShowRoullete(false)
      startRound(actualRoom.id, letter)
      reset()
    }
  }

  React.useEffect(() => {
    if (!actualRoom) {
      router.push('/')
    }
  }, [actualRoom, router])

  React.useEffect(() => {
    if (actualRoom && actualRoom.timer < actualRoom.duration && actualRoom.timer !== 0) {
      setStartedRound(true)
    }
    else
      setStartedRound(false)


  }, [actualRoom])

  console.log(playerAnswer)
  console.log(players)
  console.log(startedRound)

  return (


    existRoom !== -1 && actualRoom ?
      <S.FormContainer>

        {
          actualRoom.timer === 0 && !showRoullete && !startedRound ?
            <EndRound
              homeFunction={handleClickHome}
              startFunction={()=> {
                setShowRoullete(true)
              }}
              room={actualRoom}
              playerAnswer={playerAnswer}
              answers={actualRoom.answers}
              players={actualRoom.players}
              clientID={clientID}
              endRound={endRound}
            /> : null
        }
        { actualRoom.timer === actualRoom.duration && !showRoullete  ? 
        <StartRound
          startFunction={() =>{
            setShowRoullete(true)

          }}
          homeFunction={handleClickHome}
          room={actualRoom}
        />
          : null
        }

        {showRoullete ? <GameRoullete setLetter={setLetter} startButton={()=>{
          handleClickStart()
        }}/> : null}


        {actualRoom.timer < actualRoom.duration ? <>

          {actualRoom.timer !== 0 ? <RoundPanel
            actualRoom={actualRoom}
            clientID={clientID}
            forms={forms}
            players={actualRoom.players}
            userForm={userForm}
            letter={actualRoom.letter.toUpperCase()}
          /> : null}


          <form
          // onSubmit={e =>  handleSubmit(e)}
          >

            <S.FormWrapper>
              {topics.map((item) => (
                <S.FormItem className="form-item" key={item.name}>
                  <FormControl className="form-control">
                    <TextField
                      disabled={!!endRound}
                      id={item.name}
                      className="text-field"
                      placeholder={item.name}
                      aria-describedby="my-helper-text"
                      {...register(item.name)}
                      onChange={(e) => handleInputChange(e, item.name)} // Atualiza o valor do campo no evento onChange
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <p className="left-icon">{item.icon}</p>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="start">
                            {
                              playerAnswer?.form[item?.name] ?
                                <p className="points correct_answer">
                                  10pts
                                </p> :
                                <p className="points wrong_answer">
                                  0pts
                                </p>
                            }

                          </InputAdornment>
                        ),
                      }}
                    />
                    {actualRoom.answers && actualRoom.timer === 0 ?
                      <FormHelperText id="my-helper-text">
                        {
                          playerAnswer?.form[item.name] ?
                            <p className="correct_answer">
                              A resposta está correta
                            </p> :
                            <p className="wrong_answer">
                              Não começa com a letra <span>{actualRoom.letter.toLocaleUpperCase()}</span>
                            </p>
                        }

                      </FormHelperText> :
                      <FormHelperText color="red" id="my-helper-text">

                        {item.name} com a letra <span>{actualRoom.letter.toLocaleUpperCase()}</span>
                      </FormHelperText>}
                  </FormControl>
                </S.FormItem>
              ))}
            </S.FormWrapper>
            {/* <Button
              type="submit"
              style={{
                width: 200,
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                marginTop: 16,
                marginBottom: 16,
              }}
              variant="contained"
              color="error"
            >
              Concluir
            </Button> */}
          </form>
        </> : null}
      </S.FormContainer>

      : <>
        <p>Sala não existe</p>
        <Button onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          router.push('/')
        }}>Tela Inicial</Button>
      </>


  )
}

export default FormGame

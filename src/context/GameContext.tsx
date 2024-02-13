// themesContext.tsx
import { Answers, Player, Room, SendForm } from '@/models/General';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Socket, io } from 'socket.io-client';

type Theme = 'light' | 'dark';

type GameContextProps = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    players: Player[]
    setPlayers: (player: Player[]) => void
    rooms: Room[]
    setRooms: (player: Room[]) => void
    joinRoom: (roomId: string) => void
    handleCreateRoom: (roomName: string) => void
    changePlayerName: (name: string) => void
    clientID: string
    sendForm: (userForm: SendForm) => void
    socket: Socket
    forms: SendForm[]
    startRound: (roomID: string)=>void
    currentRound: number | undefined
    endRound: number | undefined
    timer: number | undefined
    actualRoomState: Room | undefined
    answers: SendForm[]
};

const GameContext = createContext<GameContextProps | undefined>(undefined);
const socket = io('http://192.168.1.19:3001');

export function GameProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    const [players, setPlayers] = React.useState<Player[]>([]);
    const [rooms, setRooms] = React.useState<Room[]>([]);
    const [forms, setForms] = React.useState<SendForm[]>([]);
    const [answers, setAnswers] = React.useState<SendForm[]>([]);
    const [clientID, setClientID] = React.useState<string>('');
    const [currentRound, setCurrentRound] = React.useState<number>();
    const [endRound, setEndRound] = React.useState<number>();
    const [timer, setTimer] = React.useState<number>();
    const [actualRoomState, setActualRoomState] = React.useState<Room>();

    function joinRoom(roomId: string) {
        socket.emit('joinRoom', roomId);
    }

    function changePlayerName(name: string) {
        if (name && name.trim() !== '') {
            socket.emit('updateName', name);
        }
    }

    function sendForm(userForm: SendForm) {
        if (userForm) {
            socket.emit('sendForm', userForm);
        }
    }

    const handleCreateRoom = (roomName: string) => {
        if (roomName && roomName.trim() !== '') {
            socket.emit('createRoom', roomName);
        }
    };

    function startRound(roomID: string) {
        socket.emit('startGame', roomID)
    }

    React.useEffect(() => {
        socket.connect();

        socket.on('updatePlayers', (updatedPlayers: Player[]) => {
            setPlayers(updatedPlayers);
        });
        socket.on('updateRooms', (updatedRooms: Room[]) => {
            setRooms(updatedRooms);
        });
        socket.on('updateForms', (updatedForms: SendForm[]) => {
            setForms(updatedForms);
        });
        socket.on('updateAnswers', (updatedForms: SendForm[]) => {
            setAnswers(updatedForms);
        });
        socket.on('client_id', function (clientId) {
            setClientID(clientId)
        });
        socket.on('gameStarted', function (currentRound) {
            setCurrentRound(currentRound)
        });
        // socket.on('endRound', function (currentRound) {
        //     setEndRound(currentRound)
        // });
        socket.on('updateTimer', function (timer) {
            setTimer(timer);
        });
        socket.on('updateRoomState', function (room) {
            setActualRoomState(room);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

console.log(forms)
console.log(rooms)
console.log(answers)
    return (
        <GameContext.Provider
            value={{
                theme,
                setTheme,
                players,
                setPlayers,
                rooms,
                setRooms,
                joinRoom,
                handleCreateRoom,
                changePlayerName,
                clientID,
                sendForm,
                socket,
                forms,
                timer,
                currentRound,
                endRound,
                startRound,
                actualRoomState,
                answers
            }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGameContext(): GameContextProps {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useThemes must be used within a GameContext');
    }
    return context;
}

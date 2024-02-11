// themesContext.tsx
import { Player, Room } from '@/models/General';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { io } from 'socket.io-client';

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
};

const GameContext = createContext<GameContextProps | undefined>(undefined);
const socket = io('http://localhost:3001');

export function GameProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    const [players, setPlayers] = React.useState<Player[]>([]);
    const [rooms, setRooms] = React.useState<Room[]>([]);

    function joinRoom(roomId: string) {
        socket.emit('joinRoom', roomId);
    }

    function changePlayerName(name: string) {
        if (name && name.trim() !== '') {
            socket.emit('updateName', name);
        }
    }

    const handleCreateRoom = (roomName: string) => {
        if (roomName && roomName.trim() !== '') {
            socket.emit('createRoom', roomName);
        }
    };

    React.useEffect(() => {
        socket.connect();

        socket.on('updatePlayers', (updatedPlayers: Player[]) => {
            setPlayers(updatedPlayers);
        });
        socket.on('updateRooms', (updatedRooms: Room[]) => {
            setRooms(updatedRooms);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

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
                changePlayerName
            }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGameContext(): GameContextProps {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useThemes must be used within a ThemesProvider');
    }
    return context;
}

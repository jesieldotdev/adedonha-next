import React from "react";
import { useState } from "react"
import io from 'socket.io-client';
import { Player, Room } from "../../models/General";
import { useGameContext } from "@/context/GameContext";



const RoomListViewController = () => {
    const {
        players,
        rooms,
    } = useGameContext()
    const [open, setOpen] = React.useState(false)


    function closeModal() {
        setOpen(false)
    }


    return {
        open,
        setOpen,
        closeModal,
        players,
        rooms,
    }
}

export default RoomListViewController
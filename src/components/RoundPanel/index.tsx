import { Player, Room, SendForm, UserFormTopics } from '@/models/General'
import * as S from './styles'
import { Timer, User } from 'styled-icons/boxicons-regular'
import { TargetArrow } from 'styled-icons/fluentui-system-filled'
import { People, PeopleFill } from 'styled-icons/bootstrap'
import { FieldValues } from 'react-hook-form'

interface RoundPanelProps {
    actualRoom: Room
    userForm: UserFormTopics | undefined | FieldValues
    players: Player[]
    clientID: string
    forms: SendForm[]
    letter: string
}

const RoundPanel = ({
    actualRoom,
    players,
    userForm,
    clientID,
    forms,
    letter
}: RoundPanelProps) => {


    const actualPlayer = players.find(player => player.id === clientID)
    function getScoreBoard(playerID: string) {
        let keysWithValue = 0;
        const actualPlayerForm = forms.find(form => form.userID === playerID)
        // const allKeys = userForm ? Object?.keys(userForm)?.length : 9;
        // const completedKeys = actualPlayerForm ? Object.keys(actualPlayerForm.form)?.length : 9;
        if (actualPlayerForm) {
            for (const key in actualPlayerForm.form) {
                console.log(key)
                if (actualPlayerForm.form && actualPlayerForm.form[key] !== '') {
                    keysWithValue++;
                }
                console.log(keysWithValue);
            }
        }

        return keysWithValue
    }

    return (
        <S.RoundPanelContainer>

            <div className='column'>
                <p className='mt-8'><Timer size={24} /> {actualRoom.timer}s</p>
                <p className='mt-8'><TargetArrow size={22} /> Partida: {actualRoom.currentRound}</p>
                <p className='title row mt-16'>{letter}</p>
            </div>
            {/* <div className='column'>
            </div> */}
            <div className='column'>

                {
                    players.length && players.map(player => <p key={player.id} className='mt-8'><User size={18} /> {actualPlayer?.id === player.id ? 'Você' : player.name} {`(${getScoreBoard(player.id)} / ${9})`}</p>)
                }
            </div>

        </S.RoundPanelContainer>

    )
}

export default RoundPanel
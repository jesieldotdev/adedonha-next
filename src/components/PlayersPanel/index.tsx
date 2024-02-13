import { Player, SendForm, Topic, userFormTopics } from '@/models/General'
import * as S from './styles'
import { PeopleFill } from 'styled-icons/bootstrap'

interface PlayersPanelProps {
    userForm: userFormTopics
    players: Player[]
    clientID: string
    forms: SendForm[]
}

const PlayersPanel = ({ userForm, players, clientID, forms }: PlayersPanelProps) => {

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
        <S.Container>
            {
                players.length && players.map(player => <p><PeopleFill size={24} /> {actualPlayer?.id === player.id ? 'Você' : player.name} {`(${getScoreBoard(player.id)} / ${9})`}</p>)
            }
        </S.Container>
    )
}

export default PlayersPanel
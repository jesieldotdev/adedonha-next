import { Player, Topic, userFormTopics } from '@/models/General'
import * as S from './styles'

interface PlayersPanelProps {
    userForm: userFormTopics
    players: Player[]
}

const PlayersPanel = ({ userForm, players }: PlayersPanelProps) => {
    let keysWithValue = 0;
    const allKeys = userForm ? Object?.keys(userForm)?.length : 9;
    if (userForm) {
        for (const key in userForm) {
            if (userForm && userForm[key] !== '') {
                keysWithValue++;
            }
            console.log(keysWithValue);
        }
    }

    return (
        <S.Container>
            {
                players.length && players.map(player => <p>{player.name} {`(${keysWithValue} / ${allKeys})`}</p>)
            }
        </S.Container>
    )
}

export default PlayersPanel
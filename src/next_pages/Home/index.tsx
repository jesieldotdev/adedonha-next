import Lottie from 'lottie-react'
import * as S from './styles'
import { Button, Typography } from '@mui/material'
import StopLottie from '../../assets/Lotties/stop-lottie.json'
import HomeViewController from './viewController'
import AddPlayerModal from '@/components/AddPlayerModal'
import { useRouter } from 'next/router'

const HomePage = () => {

    const router = useRouter()
    const viewController = HomeViewController()

    return (
        <S.HomeScreenContainer>
            <Lottie className="lottie" animationData={StopLottie} />
            <Typography className="title" variant="h5">
                Jogo Da Adedonha
            </Typography>

            <AddPlayerModal
                isOpen={viewController.open}
                close={viewController.closeModal}
                rooms={viewController.rooms}
                players={viewController.players}
            />

            <S.GridContainer>
                <Button
                    onClick={() => viewController.setOpen(true)}
                    sx={{
                        backgroundColor: "#29A655",
                    }}
                    className="button"
                    variant="contained"
                    color="primary"
                >
                    Jogar
                </Button>
                {/* <Button
                    sx={{
                        backgroundColor: "#6524BF",
                    }}
                    className="button"
                    variant="contained"
                    color="primary"
                >
                    Adicionar Jogador
                </Button> */}
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        router.push('/rooms')
                    }}
                    sx={{
                        backgroundColor: "#6524BF",
                    }}
                    className="button"
                    variant="contained"
                    color="primary"
                >
                    Salas
                </Button>
                <Button
                    sx={{
                        backgroundColor: "#F27D16",
                    }}
                    className="button"
                    variant="contained"
                    color="primary"
                >
                    Configurações
                </Button>
            </S.GridContainer>

        </S.HomeScreenContainer>

    )
}

export default HomePage
import { BellContainer } from "./bell.styles"
import BellImg from './assets/bell.svg'

const Bell = () => {
    return (
        <BellContainer>
            <img src={BellImg} alt="Notification" />
        </BellContainer>
    )
}

export default Bell
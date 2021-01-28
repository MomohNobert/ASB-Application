import { LogoContainer } from "./logo.styles"
import LogoImg from './assets/logo.png'
import { LogoFont } from "../../../styles/Typography"

const Logo = () => {
    return (
        <LogoContainer>
            <img src={LogoImg} alt="logo" />
            <LogoFont>FE Engineer Test 1</LogoFont>
        </LogoContainer>
    )
}

export default Logo
import { MenuFont } from "../../../styles/Typography"
import { BCContainer, BCContent } from "./breadcrumbs.styles"
import ArrowImg from './assets/arrow.svg'

const Breadcrumbs = () => {
    return (
        <BCContainer>
            <BCContent>
                <MenuFont>Divisions</MenuFont>
                <img src={ArrowImg} alt="Arrow" />
                <MenuFont>Module</MenuFont>
            </BCContent>
        </BCContainer>
    )
}

export default Breadcrumbs;
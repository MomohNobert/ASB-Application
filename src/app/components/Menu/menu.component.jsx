import { MenuContainer, MenuItem } from "./menu.styles"
import HomeImg from './assets/home.svg'
import EntryImg from './assets/entry.svg'
import DivideImg from './assets/divide.svg'
import { MenuFont } from "../../../styles/Typography"

const Menu = () => {
    return (
        <MenuContainer>
            <MenuItem>
                <img src={HomeImg} alt="Home" />
                <MenuFont>Home</MenuFont>
            </MenuItem>
            <MenuItem>
                <img src={EntryImg} alt="Entries" />
                <MenuFont>Entries</MenuFont>               
            </MenuItem>
            <MenuItem active>
                <img src={DivideImg} alt="Divisions" />
                <MenuFont>Divisions</MenuFont>     
            </MenuItem>
        </MenuContainer>
    )
}

export default Menu
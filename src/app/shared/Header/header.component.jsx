import Breadcrumbs from "../Breadcrumbs/breadcrumbs.component"
import { HeaderStyle } from "./header.styles"

const Header = () => {
    return (
        <HeaderStyle>
            <p>Header</p>
            <Breadcrumbs />
        </HeaderStyle>
    )
}

export default Header;
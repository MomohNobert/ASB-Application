import Logo from "../../atoms/Logo/logo.atom"
import Bell from '../../atoms/Bell/bell.atom'
import Author from "../../components/Author/author.component"
import Menu from "../../components/Menu/menu.component"
import Breadcrumbs from "../Breadcrumbs/breadcrumbs.component"
import { FlexLeft, FlexRight, HeaderStyle, THContent } from "./header.styles"
import Search from "../../molecules/Search/search.component"

const Header = () => {
    return (
        <HeaderStyle>
            <THContent>
                <FlexLeft>
                    <Logo />
                    <Menu />
                </FlexLeft>
                <FlexRight>
                    <Search />
                    <Bell />
                    <Author />
                </FlexRight>
            </THContent>
            <Breadcrumbs />
        </HeaderStyle>
    )
}

export default Header;
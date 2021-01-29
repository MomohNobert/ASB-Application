import {  SearchContainer, InputContainer } from './search.styles'
import SearchImg from './assets/search.svg'

const Search = () => {
    return (
        <SearchContainer>
            <InputContainer  aria-label="Search" />
            <img src={SearchImg} alt="Search" />
        </SearchContainer>
    )
}

export default Search;
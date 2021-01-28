import {  SearchContainer, InputContainer } from './search.styles'
import SearchImg from './assets/search.svg'

const Search = () => {
    return (
        <SearchContainer>
            <InputContainer />
            <img src={SearchImg} alt="Search" aria-label="Search" />
        </SearchContainer>
    )
}

export default Search;
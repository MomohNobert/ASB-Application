import { AuthorContainer } from "./author.styles"

import AuthorImg from './assets/author.svg'
import DownImg from './assets/down.svg'

const Author = () => {
    return (
        <AuthorContainer>
            <img src={AuthorImg} alt="Author" className="author" />
            <img src={DownImg} alt="Down" />
        </AuthorContainer>
    )
}

export default Author
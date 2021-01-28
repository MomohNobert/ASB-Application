import { CDFont, CHFont } from '../../../styles/Typography';
import { CardContainer, CardContent, CardImage } from './card.styles';

import InfoImg from './assets/info.svg';

const Card = ({ card }) => {
    return (
        <CardContainer>
            <CardContent>
                <CHFont>{card.figure}</CHFont>
                <CDFont>{card.text}</CDFont>
            </CardContent>
            <CardImage>
                <img src={InfoImg} alt="info" />
            </CardImage>
        </CardContainer>
    )
}

export default Card
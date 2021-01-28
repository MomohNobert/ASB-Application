import Card from "../../molecules/Card/card.component"
import { CARDS_DATA } from "./cards.data"
import { CardsContainer } from "./cards.styles"

const Cards = () => {
    return (
        <CardsContainer>
            {
                CARDS_DATA.map(card => (
                    <Card key={card.id} card={card} />
                ))
            }
        </CardsContainer>
    )
}

export default Cards
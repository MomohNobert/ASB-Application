import Cards from "../../components/Cards/cards.component"
import Sidebar from "../../components/Sidebar/sidebar.component"
import Table from "../../components/Table/table.component"
import { DivisionContainer, CardsContainer, ContentContainer } from "./division.styles"

const DivisionPage = () => {
    return (
        <DivisionContainer>
            <CardsContainer>
                <Cards />
            </CardsContainer>
            <ContentContainer>
                <Sidebar />
                <Table />
            </ContentContainer>
        </DivisionContainer>
    )
}

export default DivisionPage
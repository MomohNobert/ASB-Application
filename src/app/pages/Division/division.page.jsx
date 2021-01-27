import Cards from "../../components/Cards/cards.component"
import Sidebar from "../../components/Sidebar/sidebar.component"
import Table from "../../components/Table/table.component"
import { DivisionContainer } from "./division.styles"

const DivisionPage = () => {
    return (
        <DivisionContainer>
            <Cards />
            <Sidebar />
            <Table />
        </DivisionContainer>
    )
}

export default DivisionPage
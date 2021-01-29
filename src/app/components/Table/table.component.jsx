import { TTFont } from "../../../styles/Typography"
import TableLine from "../../molecules/TableLine/tableLine.component";
import { TABLE_DATA } from "./table.data";
import { TableContainer } from "./table.styles"

const Table = () => {
    return (
        <TableContainer>
            <tbody>
                <tr className="title-table">
                    <th  className="input-container">
                        <input type="checkbox" aria-label="Table Checkbox" />
                    </th>
                    <th className="name"><TTFont>Name</TTFont></th>
                    <th className="location"><TTFont>Location</TTFont></th>
                    <th className="status"><TTFont>Status</TTFont></th>
                    <th className="entries"><TTFont>Entries</TTFont></th>
                    <th className="risk-profile"><TTFont>Risk Profile</TTFont></th>
                </tr>
                {
                    TABLE_DATA.map(tab => (
                        <TableLine key={tab.name} line={tab} />
                    ))
                }
            </tbody>
        </TableContainer>
    )
}

export default Table;
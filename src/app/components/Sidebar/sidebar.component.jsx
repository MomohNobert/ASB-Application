import DivisionSummary from "../DivisionSummary/divisionSummary.component"
import ModuleHistory from "../ModuleHistory/moduleHistory.component"
import { SidebarContainer } from "./sidebar.styles"

const Sidebar = () => {
    return (
        <SidebarContainer>
            <DivisionSummary />
            <ModuleHistory />
        </SidebarContainer>
    )
}

export default Sidebar;
import { MCDetails, MContent, MHContainer, MHTitle } from "./moduleHistory.styles"

import AnnouncementImg from './assets/announcement.svg'
import LineImg from './assets/line.svg';

import { SBTitle } from "../../../styles/Typography"
import { MODULE_HISTORY } from "./moduleHistory.data";
import HistoryItem from "../../molecules/HistoryItem/historyItem.component";

const ModuleHistory = () => {
    return (
        <MHContainer>
            <MHTitle>
                <img src={AnnouncementImg} alt="announcemment" />
                <SBTitle>Module History</SBTitle>
            </MHTitle>
            <MContent>
                <img src={LineImg} alt="line" />
                <MCDetails>
                    {
                        MODULE_HISTORY.map(item => (
                            <HistoryItem item={item} key={item.id} />
                        ))
                    }
                </MCDetails>
            </MContent>
        </MHContainer>
    )
}

export default ModuleHistory;
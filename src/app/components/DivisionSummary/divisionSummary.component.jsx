import { DSContainer, DSItem, DSTitle } from "./divisionSummary.styles"

import CastleImg from './assets/castle.svg'
import JournalImg from './assets/journal.svg'
import MailImg from './assets/mail.svg'
import MapImg from './assets/map.svg'
import PhoneImg from './assets/phone.svg'
import PrintImg from './assets/print.svg'
import { SBCFont, SBTitle } from "../../../styles/Typography"

const DivisionSummary = () => {
    return (
        <DSContainer>
            <DSTitle>
                <div>
                    <img src={CastleImg} alt="castle" />
                </div>
                <SBTitle>Division Summary</SBTitle>
            </DSTitle>
            <DSItem>
                <div>
                    <img src={PhoneImg} alt="Phone" />
                </div>
                <SBCFont>0801 234 5678</SBCFont>
            </DSItem>
            <DSItem>
                <div>
                    <img src={MailImg} alt="Mail" />
                </div>
                <SBCFont>asbfefr@gmail.com</SBCFont>
            </DSItem>
            <DSItem>
                <div>
                    <img src={MapImg} alt="Phone" />
                </div>
                <SBCFont>Mojidi, Lagos</SBCFont>
            </DSItem>
            <DSItem>
                <div>
                    <img src={JournalImg} alt="Phone" />
                </div>
                <SBCFont className="journal">2 Journal entries</SBCFont>
            </DSItem>
            <DSItem>
                <div>
                    <img src={PrintImg} alt="Phone" />                    
                </div>
                <SBCFont>24 fingerprints enrolled</SBCFont>
            </DSItem>
        </DSContainer>
    )
}

export default DivisionSummary;
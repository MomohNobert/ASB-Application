import { TECFont, TETFont, TLAFont, TLSFont, TNFont } from '../../../styles/Typography'
import UnionImg from './assets/union.svg'
import OptionsImg from './assets/options.svg'
import { TRContainer } from './tableLine.styles'

import Issue from '../../atoms/Issues/issue.atom'
import RiskProfile from '../../atoms/RiskProfile/riskProfile.atom'

const TableLine = ({ line }) => {
    const { 
        name, 
        state, 
        address, 
        issues, 
        entries, 
        type, 
        risk_profile 
    } = line
    return (
        <TRContainer>
            <th  className="th-input-container">
                <input type="checkbox" />
                <img src={UnionImg} alt="union" />
            </th>
            <th className="th-name">
                <TNFont>{name}</TNFont>
            </th>
            <th className="th-location">
                <TLSFont>{state}</TLSFont>
                <TLAFont>{address}</TLAFont>
            </th>
            <th className="th-status">
                <Issue issue={issues} />
            </th>
            <th className="th-entries">
                <TETFont>
                    {
                        entries <= 0 ?
                        "• No Unique Entry"
                        :
                        entries === 1 ?
                        "• 1 Unique Entry"
                        :
                        `• ${entries} Unique Entries`
                    }
                </TETFont>
                <TECFont>
                    {
                        type === 'ho' ?
                        "Homogenous"
                        :
                        "Heterogenous"
                    }
                </TECFont>
            </th>
            <th className="th-risk-profile">
                <RiskProfile risk={risk_profile} />
                <img src={OptionsImg} alt="options" className="options" />
            </th>
        </TRContainer>
    )
}

export default TableLine
import { RPContainer } from "./riskProfile.styles"

import HighImg from './assets/high.svg'
import MidImg from './assets/mid.svg'
import LowImg from './assets/low.svg'
import { TNFont } from "../../../styles/Typography"

const RiskProfile = ({ risk }) => {
    return (
        <RPContainer>
            {
                risk === "high" ?
                (   
                    <>
                    <div>
                        <img src={HighImg} alt="high" />
                    </div>
                    <TNFont className="high">High Risk</TNFont>
                    </>
                )
                 :
                risk === "mid" ?
                (   
                    <>
                    <div>
                        <img src={MidImg} alt="mid" />
                    </div>
                    <TNFont className="mid">Mid Risk</TNFont>
                    </>
                )   
                :
                (   
                    <>
                    <div>
                        <img src={LowImg} alt="low" />
                    </div>
                    <TNFont className="low">Low Risk</TNFont>
                    </>
                )            
            }
        </RPContainer>
    )
}

export default RiskProfile
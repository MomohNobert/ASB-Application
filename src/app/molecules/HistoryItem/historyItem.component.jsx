import { HIContainer, Top, Bottom } from "./historyItem.styles";

const HistoryItem = ({ item }) => {
    const { action, date, platform } = item
    return (
        <HIContainer>
            <Top>
                <p>{action}</p>
            </Top>
            <Bottom>
                <span>{date} • {platform}</span>
            </Bottom>
        </HIContainer>
    )
}

export default HistoryItem;
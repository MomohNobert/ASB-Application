import { IssueContainer } from './issue.styles'

const Issue = ({ issue }) => {
    return (
        <IssueContainer issue={issue} >
            {
                issue <= 0 ?
                <p>No issues</p>
                :
                issue === 1 ?
                <p>1 issue found</p>
                :
                <p>{issue} issues found</p>
            }
        </IssueContainer>
    )
}

export default Issue;
import React from 'react'

const Issue = ({ issueData }) => {
  return(
    <div className="issue-card">
      <h3>{issueData.title}</h3>
      <p>{issueData.body}</p>
      <h4>{`user login: ${issueData.user.login}`}</h4>
      <h4>{issueData.assignee ? `Assigned to: ${issueData.assignee.login}` : 'unassigned!' }</h4>
    </div>
  )
}

export default Issue
import React from "react";

const Issue = ({ issueData }) => {
  return (
    <div className="issue-card">
      <h2>{issueData.title}</h2>
      <div className="issue-card-head">
        <span>
          <b className="highlight">User Login: </b>
          {issueData.user.login}
        </span>
        <p>
          <b className="highlight">Assignee Login: </b>
          {issueData.assignee ? issueData.assignee.login : "No assignee!"}
        </p>
      </div>
      <p>{issueData.body}</p>
    </div>
  );
};

export default Issue;

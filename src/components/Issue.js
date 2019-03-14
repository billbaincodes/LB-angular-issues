import React from "react";

const Issue = ({ issueData }) => {
  return (
    <div className="issue-card">
      <h3>{issueData.title}</h3>
      <div className="issue-card-head">
        <p>
          <b>User Login: </b>
          {issueData.user.login}
        </p>
        <p>
          <b>Assigned to: </b>
          {issueData.assignee ? issueData.assignee.login : "Unassigned!"}
        </p>
      </div>
      <div className="issue-card-body">
        <p>{issueData.body}</p>
      </div>
    </div>
  );
};

export default Issue;

import React from "react";

function SchoolCard(props) {
  const aSchool = props.school;
  // console.log("School", aSchool.props.school);

  const onDeleteSchoolClicked = (e) => {
    e.preventDefault();
    props.deleteSchoolClicked(e, aSchool.id);
    // onNewFriendsClicked
  };

  const editSchoolClicked = (e) => {
    e.preventDefault();
    props.onSchoolClicked(e, aSchool.id);
    // onNewFriendsClicked
  };

  return (
    <div className="col-md-6">
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{aSchool.Name}</li>
          <li className="list-group-item">{aSchool.City}</li>
          <li className="list-group-item">{aSchool.Level}</li>
        </ul>
        <button
          onSchoolClicked={editSchoolClicked}
          className="btn  btn-primary"
          onChange={aSchool.Edit}
          type="clicked"
        >
          Edit
        </button>
        <button
          onClick={onDeleteSchoolClicked}
          className="btn btn-danger"
          // onChange={school.Edit}
          type="clicked"
        >
          Delete
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}
export default React.memo(SchoolCard);

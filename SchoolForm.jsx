import React, { Component } from "react";

class SchoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Location: "",
      Level: "",
    };
  }
  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = newValue;
      return newState;
    });
  };
  onSubmitClick = () => {
    let payload = this.state;
    this.props.addSchoolClicked(payload);

    return payload;
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              School Name
            </label>
            <input
              value={this.state.name}
              onChange={this.onFormFieldChanged}
              type="text"
              className="form-control"
              id="name"
              name="Name"
              aria-describedby="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="locationInput" className="form-label">
              School Location
            </label>
            <input
              value={this.state.location}
              onChange={this.onFormFieldChanged}
              type="text"
              className="form-control"
              name="Location"
              id="location"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="levelInput" className="form-label">
              School Level
            </label>
            <input
              value={this.state.level}
              onChange={this.onFormFieldChanged}
              type="text"
              className="form-control"
              name="Level"
              id="level"
            />
          </div>
          <button
            type="submit"
            onClick={this.onSubmitClick}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default SchoolForm;

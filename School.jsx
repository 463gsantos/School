import React, { useState, useEffect, useCallback } from "react";
import * as schoolService from "../services/schoolService";
import SchoolCard from "./SchoolCard";
import SchoolForm from "../components/SchoolForm";

const School = () => {
  const [pageData, setPageData] = useState({
    arrayOfSchools: [],
    schoolComponents: [],
  });

  const onDeleteClick = useCallback((e, id) => {
    console.log(e, id);
    schoolService.deleteSchool(id).then(onDeleteSuccess).catch(onDeleteError);
  }, []);

  const onDeleteError = (err) => {
    console.log("Delete error", err);
  };
  const onDeleteSuccess = (idToBeDeleted) => {
    console.log("On Delete Success", idToBeDeleted);
    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.arrayOfSchools = [...pd.arrayOfSchools];

      const idxOf = pd.arrayOfSchools.findIndex((school) => {
        let result = false;

        if (school.id === idToBeDeleted) {
          result = true;
        }
        return result;
      });

      if (idxOf >= 0) {
        pd.arrayOfSchools.splice(idxOf, 1);
        pd.schoolComponents = pd.arrayOfSchools.map(mapSchool);
      }
      return pd;
    });
  };

  const mapSchool = (aSchool) => {
    console.log("mapping", aSchool);
    return (
      <SchoolCard
        school={aSchool}
        key={"ListA-" + aSchool.id}
        // editSchoolClicked={onEditSchoolClick}
        deleteSchoolClicked={onDeleteClick}
      />
    );
  };

  const onAddClick = useCallback((data) => {
    console.log(data);
    schoolService.addSchool(data).then(onAddSuccess(data)).catch(onAddError);
  }, []);

  const onAddSuccess = (data) => {
    console.log(data);
  };

  const onAddError = (err) => {
    console.log("Add error", err);
  };

  useEffect(() => {
    console.log("firing useEffect");
    schoolService.getSchool().then(onGetSchoolSuccess).catch(onGetSchoolError);
  }, []);

  const onGetSchoolError = (err) => {
    console.error(err);
  };

  const onGetSchoolSuccess = (data) => {
    const arrayOfsls = data.items;
    console.log(arrayOfsls, "array of schools");

    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.arrayOfSchools = arrayOfsls;
      pd.schoolComponents = arrayOfsls.map(mapSchool);
      return pd;
    });
  };
  const aSchool = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = newValue;
      return newState;
    });
  };
  console.log(aSchool);

  const editSchool = () => {
    this.props.editSchool();
  };
  console.log(editSchool);
  return (
    <div>
      <h1>Schools</h1>
      <SchoolForm
        // editSchoolClicked={onEditSchoolClick}
        addSchoolClicked={onAddClick}
      />
      <div>{pageData.arrayOfSchools.map(mapSchool)}</div>
    </div>
  );
};

export default School;

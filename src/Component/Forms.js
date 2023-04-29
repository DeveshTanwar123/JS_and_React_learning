import React, { useEffect, useState } from 'react';
import { api } from '../modules/endpoints';
import { Loader } from '../modules/components';
import moment from 'moment';

function Forms() {
  const [name, setName] = useState('Devesh');
  const [fullName, setFullName] = useState();
  //event use  in class selection//
  const [selectedClass, setSelectedSlass] = useState(4);
  const [classLoader, setClassLoader] = useState();
  const [subjectsLoader, setSubjectsLoader] = useState();
  const [sectionLoader, setSectionLoader] = useState();
  const [creatingStudentLoader, setCreatingStudentLoader] = useState();
  const [dob, setDob] = useState();

  //use event in section//
  const [selectedSection, setSelectedSection] = useState(2);
  //use event in Subjects//
  const [selectedSubjects, setSelectedSubjects] = useState(1);

  const onChangeStudentClass1 = (e) => {
    setSelectedSlass(e.target.value);
  };

  const onChangeStudentSection = (e) => {
    setSelectedSection(e.target.value);
  };

  const onChangeStudentSubjects = (e) => {
    setSelectedSubjects(e.target.value);
  };

  //class//
  const [classList, setClassList] = useState([]);
  //list of section//
  const [sectionList, setSectionList] = useState([]);
  //list of Subjects//
  const [subjectsList, setSubjectsList] = useState([]);

  useEffect(() => {
    setClassLoader(true);
    api.students.getClassList().then((list) => {
      setClassLoader(false);
      setClassList(list);
    });
  }, []);

  useEffect(() => {
    setSectionLoader(true);
    api.students.getSectionList().then((list) => {
      setSectionLoader(false);
      setSectionList(list);
    });
  }, []);
  //list of subjects//
  useEffect(() => {
    setSubjectsLoader(true);
    api.students.getSubjectsList().then((list) => {
      setSubjectsLoader(false);
      setSubjectsList(list);
    });
  }, []);

  const onChangeStudentName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const onChangeDob = (e) => {
    const dob = e.target.value;
    const dobMoment = moment(dob);
    const dateDiff = dobMoment.diff(new Date(), 'years');
    console.log(dobMoment, dateDiff);
    if (dateDiff < -5) {
      setDob(e.target.value);
    }
  };

  const validateForm = () => {
    if (!name) {
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    debugger;
    const isFormValid = validateForm();

    if (isFormValid) {
      const studentDetails = {
        name: name,
        className: selectedClass,
        subjects: selectedSubjects,
        section: selectedSection,
        dob: dob,
      };

      setCreatingStudentLoader(true);
      api.students.createStudent(studentDetails).then((list) => {
        setName('');
        setSelectedSlass('');
        setSelectedSection('');
        setSelectedSubjects('');
        setCreatingStudentLoader(false);
      });
    }

    setFullName(name);
  };

  return (
    <div className="App">
      <form>
        <label>
          Student Name:
          <input
            type="Text"
            placeholder="Enter the Name"
            onChange={onChangeStudentName}
            value={name}
          />
          <br />
          <br />
        </label>
        <label>
          <input type="date" value={dob} onChange={onChangeDob} />
          Student class:
          <select
            id="studentClass"
            name="studnetClass"
            value={selectedClass}
            onChange={onChangeStudentClass1}
          >
            <option value="">Select class</option>
            {classList.map((item) => (
              <option value={item.id}> {item.display} </option>
            ))}
          </select>
          <Loader isLoading={classLoader} />
          <br />
          <br />
        </label>
        <label>
          Student subjects:
          <select
            id="subjects"
            name="subjects"
            value={selectedSubjects}
            onChange={onChangeStudentSubjects}
          >
            <option value="">Select subjects</option>
            {subjectsList.map((item) => (
              <option value={item.id}> {item.display} </option>
            ))}
          </select>
          <Loader isLoading={subjectsLoader} />
          <br />
          <br />
        </label>

        <label>
          Student section:
          <select
            id="studentSection"
            name="StudentSection"
            value={selectedSection}
            onChange={onChangeStudentSection}
          >
            <option value="">Select section</option>
            {sectionList.map((item) => (
              <option value={item.id}> {item.display} </option>
            ))}
          </select>
          <Loader isLoading={sectionLoader} />
          <br />
          <br />
        </label>
      </form>
      <button onClick={onSubmit}>Create </button>
      <Loader isLoading={creatingStudentLoader} />

      <h1>Welcome{fullName}</h1>
    </div>
  );
}
export default Forms;

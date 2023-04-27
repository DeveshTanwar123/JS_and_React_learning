import React, { useEffect, useState } from 'react';
import { api } from '../modules/endpoints';

function Forms() {
  const [name, setName] = useState('Devesh');
  const [fullName, setFullName] = useState();
  //event use  in class selection//
  const [selectedClass, setSelectedSlass] = useState(4);
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
    api.students.getClassList().then((list) => {
      setClassList(list);
    });
  }, []);

  useEffect(() => {
    api.students.getSectionList().then((list) => {
      setSectionList(list);
    });
  }, []);
  //list of subjects//
  useEffect(() => {
    api.students.getSubjectsList().then((list) => {
      setSubjectsList(list);
    });
  }, []);

  const onChangeStudentName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmit = () => {
    const studentDetails = {
      name: name,
      class: selectedClass,
      subjects: selectedSubjects,
      section: selectedSection,
    };
    setName('');
    setSelectedSlass('');
    setSelectedSection('');
    setSelectedSubjects('');
    api.students.createStudent(studentDetails);

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
          <br />
          <br />
        </label>
      </form>
      <button onClick={onSubmit}>Create </button>
      <h1>Welcome{fullName}</h1>
    </div>
  );
}
export default Forms;

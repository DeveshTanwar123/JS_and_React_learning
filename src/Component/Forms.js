import React, { useEffect, useState } from 'react';
import { api } from '../modules/endpoints';

function Forms() {
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState();
  const [Subjects, setSubjects] = useState('sakshi');

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

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };
  const handleChange = (e) => {
    setSubjects('sakshi');
  };
  return (
    <div className="App">
      <form>
        <label>
          Student Name:
          <input
            type="Text"
            placeholder="Enter the Name"
            onChange={inputEvent}
            value={name}
          />
          <br />
          <br />
        </label>
        <label>
          Student class:
          <select id="studentClass" name="studnetClass">
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
          <select id="subjects" name="subjects">
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
          <select id="section" name="section">
            <option value="">Select section</option>
            {sectionList.map((item) => (
              <option value={item.id}> {item.display} </option>
            ))}
          </select>
          <br />
          <br />
        </label>
      </form>
      <button onClick={onSubmit}>Create data</button>
      <h1>Welcome{fullName}</h1>
    </div>
  );
}
export default Forms;

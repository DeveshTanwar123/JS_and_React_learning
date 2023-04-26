import React, { useEffect, useState } from 'react';
import { api } from '../modules/endpoints';

function Forms() {
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState();
  const [Subjects, setSubjects] = useState('sakshi');

  const [classList, setClassList] = useState([]);
  //list of section//
  const [sectionList, setSectionList] = useState([]);

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
          <select id="class" name="class">
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
            value={Subjects}
            id="Subjects"
            name="Subjects"
            onChange={(e) => setSubjects(e.target.value)}
          >
            <h1>{Subjects}</h1>
            <h1>{Subjects}</h1>
            <option value="">subject</option>
            <option value="English">English</option>
            <h1>{Subjects}</h1>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="Hindi">Hindi</option>
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
      <button onClick={onSubmit}>click me</button>
      <h1>Welcome{fullName}</h1>
    </div>
  );
}
export default Forms;

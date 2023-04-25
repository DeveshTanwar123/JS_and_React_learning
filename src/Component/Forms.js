import React, { useState } from 'react';

class StudentClass {
  constructor(display, value) {
    this.display = display;
    this.value = value;
  }
}

const classList = [
  new StudentClass('I', 1),
  new StudentClass('II', 2),
  new StudentClass('III', 3),
  new StudentClass('IV', 4),
  new StudentClass('V', 5),
];

function Forms() {
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState();
  const [Subjects, setSubjects] = useState('sakshi');

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
              <option value={item.value}> {item.display} </option>
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
          <select id="Section" name="Section">
            <option value="">Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
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

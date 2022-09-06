import axios from "axios";
import React, { useState } from "react";

function Person() {
  const [name, setName] = useState("eyad");
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");

  const handleName = (event) => {
    setName(event.target.value);
    // console.log(name);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
    // console.log(age);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
    // console.log(gender);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://localhost:3001/person";

    const firstData = {
      name: event.target.name.value,
      age: event.target.age.value,
      gender: event.target.gender.value,
    };

    const calls = await axios.post(url, firstData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>enter you information and the age will increase by 5</p>
      <label>{name}</label>
      <br />
      <input
        type="text"
        name="name"
        placeholder="enter your name"
        value={name}
        onChange={handleName}
        data-testid="name-input"
      />
      <br />
      <label>{age}</label>
      <br />
      <input
        type="number"
        name="age"
        placeholder="enter your age"
        value={age}
        onChange={handleAge}
        data-testid="age-input"
      />
      <br />
      <label>{gender}</label>
      <br />
      <input
        type="text"
        name="gender"
        placeholder="enter your gender"
        value={gender}
        onChange={handleGender}
        data-testid="gender-input"
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default Person;

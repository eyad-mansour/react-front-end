import axios from "axios";
import React, { useState } from "react";

function Person() {
  const [name, setName] = useState("eyad");
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [newAge, setNewAge] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  //   const getAge = async () => {
  //     await axios.post(`https://express-server-eyad.herokuapp.com/person`, {
  //       newAge,
  //     }) .then(res => {
  //         console.log(res.data)
  //         setNewAge(res.data)

  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })

  //   }
  //   };

  const handleSubmit = async (e) => {
    // we will fill this in the coming paragraph
    e.preventDefault();

    setName(e.target.name.value);
    setAge(e.target.age.value);
    setGender(e.target.gender.value);

    // getAge(age);

    // const url = "http://localhost:3001/person";

    //   const person = await axios.get(url);
    //   setAge(person.data);
    //   e.target.name.value = "";
    //   e.target.age.value = "";
    //   e.target.gender.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>enter you information and the age will be 5 added</p>
      <input
        type="text"
        name="name"
        placeholder="enter your name"
        value={name}
        onChange={handleName}
      />
      <input
        type="number"
        name="age"
        placeholder="enter your age"
        value={age}
        onChange={handleAge}
      />
      <input
        type="text"
        name="gender"
        placeholder="enter your gender"
        value={gender}
        onChange={handleGender}
      />
      <button type="submit">Login</button>
    </form>
  );
}
export default Person;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Edit = () => {
  const [id, setid] = useState(0);// ye char state ke liye hai
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [age, setage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setid(localStorage.getItem('id'));// jo bhe data localstorage.setitem se laye usko get karke state me store kardo
    setname(localStorage.getItem('name'));
    setemail(localStorage.getItem('email'));
    setage(localStorage.getItem('age'));
  }, []);

  const handleUpdate = (e) => {// hamre api me edit data ko mock api me store karne ke liye ye function 
    e.preventDefault();// page  reload se bachne ke liye
    axios
      .put(`https://6561ba56dcd355c083241cfa.mockapi.io/crud/${id}`, {// id parameter ke hi help se hum mock api me store karedege
        e_name: name,
        e_email: email,
        e_age: age,
      })
      .then((response) => {
        navigate('/');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Edit</h2>
      <form onSubmit={handleUpdate}>{/*jaisi form submit ho ye fuction call karo*/}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Enter Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;

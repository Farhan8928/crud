import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Create = () => {
  const [name, setname] = useState('');// yeh state change kare ke liye hai 
  const [email, setemail] = useState('');
  const [age, setage] = useState('');
  const navigate = useNavigate();//anvigation karne ke liye

  const handleSubmit = (e) => {// form submit me ye fuction call hoga
    e.preventDefault();// page reload se bachane ke liye
    axios//jo bhi data hamare state me ayega usko post request se ye object form me ye mock api me  jama kardo
      .post('https://6561ba56dcd355c083241cfa.mockapi.io/crud', {
        e_name: name,
        e_email: email,
        e_age: age,
      })
      .then((result) => {// uske baad avigate kardo '/ me joke read page hai
        navigate('/');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>{/* jaisi form submbit ho ue handleSbmit ko call karo*/}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            onChange={(e) => setname(e.target.value)}/* yaha se hame name ki value miljayegi*/
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
            onChange={(e) => setemail(e.target.value)}/*yha se email*/
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
            onChange={(e) => setage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default Create;

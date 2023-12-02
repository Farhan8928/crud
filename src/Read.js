import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// create page ke baaad hum direct redirect hoke ye read page me jayege
const Read = () => {
    const [apidata, setapidata] = useState([]);//ye state hum hamare mock api se jo data get karaige uske liye hai

    const getdata = () => {// ye arrow functio se hum data lane wale hai mock api se
        axios.get("https://6561ba56dcd355c083241cfa.mockapi.io/crud")//isse hum hamare mock api se data laye ge 
            .then((response) => {
                setapidata(response.data);// yaha se store kardege hamare apidata me
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    const handledelete = (id) => {
        axios.delete(`https://6561ba56dcd355c083241cfa.mockapi.io/crud/${id}`)// isse hum mock api se data delete karsakte hai id parameter se
            .then(() => {
                getdata(); // ye function call jaisi hi hamari entry delete ho
            })
            .catch((error) => {
                console.error("Error deleting data:", error);
            });
    }

    const setDatatolocal = (id, name, email, age) => {// agar koi edit pe click kare toh jo us entry ko browser ke local storage me show kardo
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('age', age);
    }

    useEffect(() => {// jaisi hi first time page render ho ye getdata() ek baar compulsory chalega
        getdata()
    }, []);

    return (
        <>
            <div>
                <Link to="/create">{/*ye button me hum link lagaya hu take uspe clickkarne par /create page open ho*/}
                    <button className='btn btn-primary'>Create New</button>
                </Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {apidata.map((item) => (// jo apidata state me hai usko map karke read page me dikhao
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.e_name}</td>
                            <td>{item.e_email}</td>
                            <td>{item.e_age}</td>
                            <td>
                                <Link to="/edit">
                                    <button className='btn btn-primary' onClick={() => setDatatolocal(item.id, item.e_name, item.e_email, item.e_age)}>EDIT</button>{/*obclick pe setDatatolocal wala fuction run karwao*/}
                                </Link>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => handledelete(item.id)}>DELETE</button>{/*handle delete wala fuctio call karo jaha hum id parameter diye hai*/}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Read;

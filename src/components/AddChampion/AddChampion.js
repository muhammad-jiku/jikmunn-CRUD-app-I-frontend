import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddChampion() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    const championDetail = { name, email };
    console.log(championDetail);

    // send data to server

    fetch('http://localhost:5000/champion', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(championDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data);
        alert('User added successfully!!');
        e.target.reset();
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div>
      <Link to="/" style={{ color: 'whitesmoke' }}>
        Home
      </Link>
      <h1>Add Champion to the list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="submit" value="Add Champion" />
      </form>
    </div>
  );
}

export default AddChampion;

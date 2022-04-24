import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function UpdateChampion() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [champion, setChampion] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/champion/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setChampion(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    const updateDetail = { name, email };
    console.log(updateDetail);

    // send data to server

    const url = `http://localhost:5000/champion/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data);
        alert('User updated successfully!!');
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
      </Link>{' '}
      &nbsp;
      <Link to="/champion/add" style={{ color: 'whitesmoke' }}>
        Add Champion
      </Link>
      <h1>Updating details of {champion?.name} </h1>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}

export default UpdateChampion;

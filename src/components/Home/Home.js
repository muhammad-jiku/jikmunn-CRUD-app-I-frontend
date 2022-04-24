import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [champions, setChampions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/champion')
      .then((res) => res.json())
      .then((data) => setChampions(data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    navigate(`/updatechamp/${id}`);
  };

  const handleDelete = (id) => {
    const proceed = window.confirm('Sure delete this id?');
    if (proceed) {
      console.log(id);
      const url = `http://localhost:5000/champion/${id}`;

      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            console.log('Success:', data);
            const remainigChamp = champions.filter(
              (champ) => champ?._id !== id
            );
            setChampions(remainigChamp);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
  return (
    <div>
      <Link to="/champion/add" style={{ color: 'whitesmoke' }}>
        Add Champion
      </Link>
      <h3>Champions lists: {champions?.length} </h3>
      <ul>
        {champions.map((champ) => (
          <li key={champ?._id}>
            {champ?.name} :: {champ?.email}
            <input
              type="button"
              value="✎"
              onClick={() => handleEdit(champ?._id)}
            />
            <input
              type="button"
              value="X"
              onClick={() => handleDelete(champ?._id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

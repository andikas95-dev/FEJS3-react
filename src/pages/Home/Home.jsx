import axios from 'axios';
import React, { useEffect } from 'react';

function Home() {
  const [data, setData] = React.useState([]);
  const [id, setId] = React.useState();
  const [newData, setNewData] = React.useState({
    nama: '',
    alamat: '',
  });

  useEffect(() => {
    getDataTodos();
  }, []);

  /**
   * Get data from API with then catch
   */
  // const getDataTodos = () => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => res.json())
  //     .then((json) => setData(json))
  //     .catch((err) => console.log(err));
  // };

  // const getDataTodos = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // };

  /**
   * Get data from API with async/await
   */

  // const getDataTodos = async () => {
  //   try {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     const json = await res.json();
  //     setData(json);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getDataTodos = async () => {
    try {
      const res = await axios.get('http://localhost:3000/tamu');
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createDataPost = async () => {
    try {
      await axios.post('http://localhost:3000/tamu', newData);
      getDataTodos();
      setNewData({
        nama: '',
        alamat: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateDataPost = async () => {
    try {
      await axios.put(`http://localhost:3000/tamu/${id}`, newData);
      getDataTodos();
      setId();
      setNewData({
        nama: '',
        alamat: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDataPost = async (idDelete) => {
    try {
      await axios.delete(`http://localhost:3000/tamu/${idDelete}`);
      getDataTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        placeholder="Nama Tamu"
        value={newData.nama}
        onChange={(e) =>
          setNewData((prev) => ({
            ...prev,
            nama: e.target.value,
          }))
        }
      />
      <input
        placeholder="Alamat Tamu"
        value={newData.alamat}
        onChange={(e) =>
          setNewData((prev) => ({
            ...prev,
            alamat: e.target.value,
          }))
        }
      />
      <button onClick={!id ? createDataPost : updateDataPost}>
        {!id ? 'Create' : 'Update'}
      </button>
      <button
        onClick={() => {
          setId();
          setNewData({
            nama: '',
            alamat: '',
          });
        }}
      >
        cancel
      </button>

      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h1>Nama Tamu: {item.nama}</h1>
              <p>Alamat Rumah: {item.alamat}</p>
              <button
                onClick={() => {
                  setId(item.id);
                  setNewData({
                    nama: item.nama,
                    alamat: item.alamat,
                  });
                }}
              >
                edit
              </button>
              <button onClick={() => deleteDataPost(item.id)}>delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default Home;

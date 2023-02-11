import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {

const [users, setUsers] = useState([]);
const usersRef = collection(db, 'users');

useEffect(() => {
  const getUsers = async () => {
    const data = await getDocs(usersRef);
    console.log(data);
    setUsers(data.docs);
    // setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  getUsers();
}, []);

  return (
    <div className='app'>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h2>Age: {user.age}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default App;
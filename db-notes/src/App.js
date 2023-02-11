import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

function App() {

const [users, setUsers] = useState([]);
const [newName, setNewName] = useState('');
const [newAge, setNewAge] = useState(0);

const usersRef = collection(db, 'users');

const createUser = async () => {
  await addDoc(usersRef, {Name: newName, Age: Number(newAge)});
}


const updateUser = async (id, age) => {
  const userDoc = doc(db, 'users', id);
  const newField = {
    Age: age + 1
  }
  await updateDoc(userDoc, newField)
}

const deleteUser = async (id) => {
  const userDoc = doc(db, 'users', id);
  await deleteDoc(userDoc);

}

useEffect(() => {
  const getUsers = async () => {
    const data = await getDocs(usersRef);
   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  getUsers();
}, [createUser, updateUser, deleteUser]);

  return (
    <div className='app'>
      <input placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}}/>
      <input type="number" placeholder="Age..." onChange={(event) => {setNewAge(event.target.value)}}/>
      <button onClick={createUser}>Create User</button>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>Name: {user.Name}</h1>
            <h2>Age: {user.Age}</h2>
            <button onClick={() => {updateUser(user.id, user.Age)}}>Increase Age</button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        )
      })}
    </div>
  )
}

export default App;
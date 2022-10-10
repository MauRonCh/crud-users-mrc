import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers';
import UserCard from './components/UserCard';

const baseURL = 'https://users-crud1.herokuapp.com';

function App() {
  const [users, setUsers] = useState();

  // Pass info from UserCard to FormUser
  const [updateInfo, setUpdateInfo] = useState();
  // Close menu
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  // Get all users
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`

    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  // Create new user
  const createNewuser = (data) => {
    const URL = `${baseURL}/users/`

    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        })
      .catch(err => console.log(err))
  }

  // Delete specific user

  const deleteUserById = (id) => {
    const URL = `${baseURL}/users/${id}/`

    axios.delete(URL)
      .then(res => {
        console.log(res.data);
        getAllUsers();
      })
      .catch(err => console.log(err))
  }

  // Update specific user
  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`

    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        })
      .catch(err => console.log(err))
  }

  const handleMenuOpen = () => {
    // setUpdateInfo();
    setMenuIsOpen(false);
  } 

  return (
    <div className="App">
      <div className='App__header'>
        <h1 className='App__title'>Users CRUD</h1>
        <button className='App__button' onClick={handleMenuOpen}>Create a New User</button>
      </div>
      <div className={`form-container ${menuIsOpen && 'disable__form'}`}>
        <FormUsers
          createNewuser={createNewuser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setMenuIsOpen={setMenuIsOpen}
        />
      </div>
      <div className="users-container">
      {
        users?.map(user => (
          <UserCard 
            user={user}
            key={user.id}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setMenuIsOpen={setMenuIsOpen}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App

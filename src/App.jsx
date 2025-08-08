import { useEffect, useRef, useState } from "react"
import Form from "./components/Form"
import UserList from "./components/UserList";
import { ToastContainer, toast } from 'react-toastify';
import 'remixicon/fonts/remixicon.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    let oldUsers = JSON.parse(localStorage.getItem("userData")) || [];
    setUsers(oldUsers);
  }, []);
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(users));
  }, [users])

  const addUser = (user) => {
     if (editUser) {
            updateUser(user); 
        } else {
            setUsers([...users, user]);
        }
  }

  const deleteUser = (userId) => {
    const newUsers = users.filter((user) => {
      return user.id !== userId;
    })
       setUsers(newUsers)
    if (userId == editUser.id) {
      setEditUser(null);
    }
  }

  const updateUser = (editedUser) => {
    const updatedUsers = users.map((user) => {
      return user.id === editedUser.id ? editedUser : user;
    });

    setUsers(updatedUsers);
    setEditUser(null);
    toast.success("Updated Successfully!");
  }

  const getEditUser = (user) => {
    console.log(user);
    setEditUser(user);
  }

  
  return (
    <>
      <Form addUser={addUser} deleteUser={deleteUser} editUser={editUser} updateUser={updateUser} />
      <UserList users={users} deleteUser={deleteUser} getEditUser={getEditUser} />
      <ToastContainer />
    </>
  )
}

export default App
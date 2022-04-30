import { useState } from 'react';
import './App.css';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';
import Delet from './component/Users/Delet';

function App() {
  
  const [userList,setUserList] = useState([]);

  const addUserHandler = (uName,uAge) => {
 
    setUserList((prevUserList) => {
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }

  

  return (
    <div className="App">
     <AddUser onAddUser={ addUserHandler } />
     <UserList users={userList} setUserList={setUserList} />

    </div>
  );
}

export default App;

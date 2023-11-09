import { useState } from 'react'
import Create from './users/create';
import {UserModel} from './users/create';
import { Users } from './users/user';
import './App.css'

const App = () => {
  const [users, setUsers] = useState(new Array<UserModel>());
  const [createdUser, setUser] = useState(new UserModel("","", 0, false));
  const addUser = () => {
    const usersCopy = [...users];
    usersCopy.push(createdUser);
    setUser(new UserModel("","", 0, false));
    setUsers(usersCopy);
  };

  return (
    <div>
      <Create CreatedUser={createdUser} CreateHandler={addUser} SetHandler={setUser}/>
      <Users users={users}/>
    </div>
  )
}

export default App;

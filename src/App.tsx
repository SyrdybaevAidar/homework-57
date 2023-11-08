import { useState } from 'react'
import { UserModel, Create } from './users/create';
import { Users } from './users/user';
import './App.css'

const App = () => {
  const [users, setUsers] = useState(new Array<UserModel>());
  const addUser = (user: UserModel) => {
    const usersCopy = [...users];
    usersCopy.push(user);
    setUsers(usersCopy);
  };

  return (
    <div>
      <Create CreateHandler={addUser}/>
      <Users users={users}/>
    </div>
  )
}

export default App;

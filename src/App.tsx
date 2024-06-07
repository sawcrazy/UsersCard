import React, {useEffect, useState} from "react";
import {Button} from "./components/Button/Button";
import {Card} from "./components/Card/Card";
import {IUser} from "./common/types/user";
import './App.css'

export const App = () => {
  const [users , setUsers] = useState<IUser[]>([]);
  const [page , setPage] = useState(0);

  useEffect(()=>{
      const fetchUsers = async () =>{
        const usersNameJson = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersNameJson.json();
        setUsers(users as IUser[]);
      };

      fetchUsers();
    },
    []
  );

  const renderUsers = () =>{
    return users.slice(page*5,(page+1)*5)
      .map((item) =>{
        return (
          <Card key={item.id} user={item} delUser={delUser}/>
        )
      })
  }
  const delUser = (id) =>{
    const deleteUser = users.filter((item) => item.id !== id);
    setUsers(deleteUser);
  }
  const next = () =>{
    setPage(prev => prev + 1);
  }
  const back = () =>{
    setPage(prev => prev - 1);
  }
  return (
    <div className='main'>
      <div className="main__userCard">
        {renderUsers()}
      </div>
      <div className="footer__button">
        {page !== 0 && (
          <Button onClick={back}>
            back
          </Button>
        )}
        {users.length - ((page + 1)*5) > 0 && (
          <Button onClick={next}>
            next
          </Button>
        )}
      </div>
    </div>
  )
}


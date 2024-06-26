import React, {useEffect, useState} from 'react';
import {Button} from './components/Button/Button';
import {Card} from './components/Card/Card';
import {IUser} from './common/types/user';
import s from './style.module.css';

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
          <Card key={item.id} user={item} deleteUser={deleteUser}/>
        )
      })
  }
  const deleteUser = (id) =>{
    const newUser = users.filter((item) => item.id !== id);
    setUsers(newUser);
  }
  const next = () =>{
    setPage(prev => prev + 1);
  }
  const back = () =>{
    setPage(prev => prev - 1);
  }
  if(users.length === 0) {
    return (
      <div className={s.no_data}>
        Нет данных
      </div>
    )
  }
  return (
    <div className={s.main}>
      <div className={s.userCard}>
        {renderUsers()}
      </div>
      <div>
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


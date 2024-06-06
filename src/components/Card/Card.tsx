import React, {FC} from "react";
import s from './style.module.css';
import {IUser} from "../../common/types/user";

interface ICard {
  user: IUser;
}

export const Card: FC<ICard> = ({user}) => {
  return (
    <div>
      <ul>
        <li>Имя : {user.name}</li>
        <li>Никнейм : {user.username}</li>
        <li>email : {user.email}</li>
        <li>улица : {user.address.street}</li>
        <li>suite : {user.address.suite}</li>
        <li>город : {user.address.city}</li>
        <li>zipcode : {user.address.zipcode}</li>
        <li>lat : {user.address.geo.lat}</li>
        <li>lng : {user.address.geo.lng}</li>
        <li>телефон : {user.phone}</li>
        <li>website : {user.website}</li>
        <li>name : {user.company.name}</li>
        <li>catchPhrase : {user.company.catchPhrase}</li>
        <li>bs : {user.company.bs}</li>
      </ul>
    </div>
  )
}
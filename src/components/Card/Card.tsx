import React, {FC} from "react";
import s from './style.module.css';
import {IUser} from "../../common/types/user";
import {Button} from "../Button/Button";

interface ICard {
  user: IUser;
  deleteUser(id: string): void;
}

export const Card: FC<ICard> = ({user,deleteUser}) => {
  return (
    <div className={s.list}>
      <dl className={s.holiday}>
        <dt>Имя</dt>
        <dd>{user.name}</dd>
        <dt>Никнейм</dt>
        <dd>{user.username}</dd>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>Улица</dt>
        <dd>{user.address.street}</dd>
        <dt>Suite</dt>
        <dd>{user.address.suite}</dd>
        <dt> Город</dt>
        <dd>{user.address.city}</dd>
        <dt>zipcode</dt>
        <dd>{user.address.zipcode}</dd>
        <dt>Долгота</dt>
        <dd>{user.address.geo.lat}</dd>
        <dt>Ширина</dt>
        <dd>{user.address.geo.lng}</dd>
        <dt>телефон</dt>
        <dd>{user.phone}</dd>
        <dt>website</dt>
        <dd>{user.website}</dd>
        <dt>Компания</dt>
        <dd>{user.company.name}</dd>
        <dt>catchPhrase</dt>
        <dd>{user.company.catchPhrase}</dd>
        <dt>BS</dt>
        <dd>{user.company.bs}</dd>
      </dl>
        <Button onClick={()=>deleteUser(user.id)}>
          удалить
          </Button>
    </div>
  )
}
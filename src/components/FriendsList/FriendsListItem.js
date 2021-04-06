import React from 'react';

import styles from './FriendsListItem.module.css';

const FriendsListItem = ({ id, avatar, name, isOnline }) => {
  const StatusClassName = isOnline ? styles.online : styles.offline;
  return (
    <li key={id} className={styles.item}>
      <span className={StatusClassName}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={name}></p>
    </li>
  );
};

export default FriendsListItem;

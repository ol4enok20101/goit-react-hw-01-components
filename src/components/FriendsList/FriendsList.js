import React from 'react';

import FriendListItem from './FriendsListItem';

import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={styles.friendsList}>{friends.map(FriendListItem)}</ul>;
};

export default FriendsList;

import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friendslist from './FriendsList/FriendsList';
import TransactionHistory from './Transactions/TransactionHistory';

import userData from '../data/user.json';
import statsData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics items={statsData} />
      <Friendslist friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;

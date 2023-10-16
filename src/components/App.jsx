import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './Friends/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './Transaction/TransactionHistory';
import transactions from '../data/transactions.json';

import style from './App.module.css';

export const App = () => {
  return (
    <div className={style.container}>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

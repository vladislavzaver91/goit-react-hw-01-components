import {Profile} from '../Profile/Profile';
import {Statistics} from '../Statistics/Statistics';
import {FriendList} from '../FriendList/FriendList';
import {TransactionHistory} from '../TransactionHistory/TransactionHistory';

import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </Container>
  );
};


// display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//         background: '#ebe6e6',
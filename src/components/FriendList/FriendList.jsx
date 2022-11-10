import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem';
import { FriendsListUl } from "./FriendList.styled";

export function FriendList({ friends }) {
    return (
        <FriendsListUl>
            {friends.map((friend) => (
                <FriendListItem key={friend.id} friend={friend}/>
            ))}
        </FriendsListUl>
    );
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};
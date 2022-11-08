import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map((friend) => (
                <FriendListItem key={friend.id} friend={friend}/>
            ))}
        </ul>
    );
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};
import PropTypes from 'prop-types';

export default function FriendListItem({ friend }) {
    const { avatar, name, isOnline } = friend;
    return (
        <li className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
};
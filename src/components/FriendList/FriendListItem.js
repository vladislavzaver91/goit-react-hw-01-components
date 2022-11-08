import PropTypes from 'prop-types';

export default function FriendListItem({ friend }) {
    const { avatar, name, isOnline } = friend;
    return (
        <li class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
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
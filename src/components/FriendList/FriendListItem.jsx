import PropTypes from 'prop-types';
import { FriendsItem, Status, FriendsName } from "./FriendList.styled";

export function FriendListItem({ friend }) {
    const { avatar, name, isOnline } = friend;
    return (
        <FriendsItem>
            <Status isOnline={isOnline}/>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <FriendsName>{name}</FriendsName>
        </FriendsItem>
    );
};

FriendListItem.propTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
};
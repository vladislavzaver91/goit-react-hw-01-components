import PropTypes from 'prop-types';
import { Card, Description, UserName, Tag, Location, ListStats, ListItem, ListLabel, ListQuantity } from "./Profile.styled";

export function Profile (props) {
    const { username, tag, location, avatar, stats:{followers, views, likes} } = props;
    return (
    <Card>
    <Description>
        <img
        src={avatar}
        alt={tag}
        className="avatar"
        width={200}
        />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
    </Description>

    <ListStats>
        <ListItem>
        <ListLabel>Followers</ListLabel>
        <ListQuantity>{followers}</ListQuantity>
        </ListItem>
        <ListItem>
        <ListLabel>Views</ListLabel>
        <ListQuantity>{views}</ListQuantity>
        </ListItem>
        <ListItem>
        <ListLabel>Likes</ListLabel>
        <ListQuantity>{likes}</ListQuantity>
        </ListItem>
    </ListStats>
    </Card>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
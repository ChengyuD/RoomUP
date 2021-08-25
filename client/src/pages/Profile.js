import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../utils/mutations';
import { QUERY_MATCHUPS } from '../utils/queries';

const UserCard = props => {
    const { avatarUrl, title, subtitle, description, imageUrl } = props;
    return (
      <Card>
        <CardHeader
          avatar={<Avatar src={avatarUrl} />}
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title={title}
          subheader={subtitle}
        />
        <CardMedia style={{ height: "150px" }} image={imageUrl} />
        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add</Button>
          <Button size="small">Message</Button>
        </CardActions>
      </Card>
    );
  };
  
  export default UserCard;
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import Button from '@material-ui/core/Button';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const handleButtonClick = () => {
    console.log("click")
  };

  const matchupList = data?.matchups || [];

  return (
    <div>
      <container className="title">
        <Col>
        <h1>RoomUP</h1>
        <h2>Find your next place</h2>
        </Col>
      </container>

      <container>
        <Row>
          <Col className="search">
          <input placeholder="insert text"></input>
          <Button color="" variant="" onClick={ () => {handleButtonClick()}}>Search</Button>
          </Col>
        </Row>
      </container>

      
    </div>
  );
};

export default Home;

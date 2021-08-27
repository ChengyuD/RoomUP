import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../utils/mutations';
import { QUERY_MATCHUPS } from '../utils/queries';

function Home() {
    return (
     <div>
         <h1>Yo</h1>
     </div>
    );
  }
  
  export default Home;
import React from 'react';
import './profile.css'
import { ProfileBlock } from '../components/Profile';
import Container from '@material-ui/core/Container';
import { HeroHeader } from '../components/Home';
import { QUERY_PROFILE } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'



const Profile = () => {
    const profileId = "61284e701628134e2e508484";

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { data } = useQuery(
    QUERY_PROFILE
  );

  const profile = data?.profile || {};

    return (
        <body>
        <Container className="main" maxWidth="xl">

        <HeroHeader 
        header={"RoomUP"}
        subHeader={"User Profile"}
        />
    
         <ProfileBlock 
         name={profile.name}
        //  phone={profile.phoneNumber}
         email={profile.email}
        //  price={profile.budget}
        //  bookmark={"Bookmarks"}
        //  roomies={profile.roomies}
         />
          
        </Container>
      </body> 
    )
}

export default Profile;

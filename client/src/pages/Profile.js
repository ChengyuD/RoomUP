import React from 'react';
import './profile.css'
import { ProfileBlock } from '../components/Profile';
import Container from '@material-ui/core/Container';
import { HeroHeader } from '../components/Home';
import { QUERY_PROFILE } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'



const Profile = () => {
    return (
        <body>
        <Container className="main" maxWidth="xl">

        <HeroHeader 
        header={"RoomUP"}
        subHeader={"User Profile"}
        />
    
         <ProfileBlock 
         name={"Alex"}
         phone={"(555)867-5309"}
         email={"alex@test.com"}
         price={"5000"}
         bookmark={"Bookmarks"}
         roomies={"No matches"}
         />
          
        </Container>
      </body> 
    )
}

export default Profile;

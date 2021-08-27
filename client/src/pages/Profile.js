import React from 'react';
import './Card.css'

<<<<<<< HEAD
function Home() {
    return (
     <div>
         <h1>Yo</h1>
     </div>
    );
  }
  
  export default Home;
=======
function Card({ src, title, description, price }) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card
>>>>>>> dev

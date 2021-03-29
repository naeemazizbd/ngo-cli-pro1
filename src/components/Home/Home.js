import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';



const Home = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://fierce-brook-35170.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
       
        
            <div className="">
                
                <div className="row  ">
                 
                 {
                     events.map(event => <Event  event={event}></Event> )
                 }
             </div>
            </div>
        
    );
};

export default Home;
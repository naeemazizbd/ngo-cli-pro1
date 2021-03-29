import React, { useEffect, useState } from 'react';

const Event = ({event}) => {
    const deleteEvent = id => {
        
    }
    return (
        //  style={{height: '300px', width: '300px'}}
        <div className="col-md-4  ">
            
           <div className=" p-2 shadow m-2">
           <img  style={{height: '300px', width: '300px '}} src={event.imageURL} alt=""/>
            <h4>{event.name} <button className="btn btn-primary" onClick={() => deleteEvent(event._id)}>Delete</button></h4>
           </div>
            
            
        </div>
    );
};

export default Event;
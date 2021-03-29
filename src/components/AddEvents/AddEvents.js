import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL
        };
        const url = `https://fierce-brook-35170.herokuapp.com/addEvent`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '55f1df8fff17cc8f0a6a9d1e9dd028ec');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="d-flex justify-content-center ">
            <div className=" m-5  ">
                <form className="shadow p-3" onSubmit={handleSubmit(onSubmit)}>
                    <h5>Add your awesome Event here</h5>

                    <input className="form-control m-2" name="name" defaultValue="New exciting Event" ref={register} />

                    <input className="form-control m-2" name="exampleRequired" type="file" onChange={handleImageUpload} />

                    {/* <input  type="submit" /> */}
                    <input  type="submit"/>
                </form>
            </div>


        </div>
    );
};

export default AddEvents;
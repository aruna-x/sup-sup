// Libraries
import { useState } from 'react';
import { useHistory } from "react-router-dom";

// Components
import RenderForm from './RenderForm';

function AddNew({setReminders, formatDate}) {

    let history = useHistory();
    const [success, setSuccess] = useState(false);
    const BASE_URL = "http://localhost:4000/reminders";
    
    const [formData, setFormData] = useState({
        supplement: "",
        days: {
            Monday: false,
            Tuesday: false,
            Wednesday: false,
            Thursday: false,
            Friday: false,
            Saturday: false,
            Sunday: false
        },
        times: "10:00",
    })

    function handleSubmit(e) {
        e.preventDefault();
        
        const dateObj = new Date();
        const newdate = formatDate(dateObj);
        const postFormData = {...formData, startDate: newdate.toString()};

        fetch(BASE_URL, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(postFormData)
        })
        .then(resp => resp.json())
        .then(data => {
            setReminders((current)=> [...current, data])
            setFormData({
                supplement: "",
                days: {
                    Monday: false,
                    Tuesday: false,
                    Wednesday: false,
                    Thursday: false,
                    Friday: false,
                    Saturday: false,
                    Sunday: false
                },
                times: "10:00"
            });

            setSuccess(!success);
        })
    }

    if (success) { setTimeout(() => {history.push('/')}, 2000); }
    
    return (
        <RenderForm success={success} handleSubmit={handleSubmit} setFormData={setFormData} formData={formData}/>
    )

}

export default AddNew;
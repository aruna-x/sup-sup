// Libraries
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// Components
import RenderForm from './RenderForm';

function EditReminder({setReminders}) {
    let history = useHistory();
    const { id } = useParams();
    const BASE_URL = `http://localhost:4000/reminders/${id}`;
    
    const [success, setSuccess] = useState(false);
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
        startDate: ""
    })

    useEffect(()=>{
        fetch(BASE_URL)
        .then(r=>r.json())
        .then(data=>setFormData(data))
    }, [id]);

    function handleSubmit(e) {
        e.preventDefault()
        fetch(BASE_URL, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            setReminders(current => [...current].map(reminder => (reminder.id === data.id) ? data : reminder));
            setSuccess(!success);
        });
    }

    if (success) { setTimeout(() => {history.push('/')}, 2000); }

    return (
        <RenderForm success={success} handleSubmit={handleSubmit} setFormData={setFormData} formData={formData}/>
    )
}


export default EditReminder;
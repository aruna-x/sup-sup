import {useState} from 'react';
import TimePicker from 'react-time-picker';

function AddNew({setReminders}) {
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

    function handleChange(e) {
        let key, value;
        // Times
        if (e.target === undefined) {
            key = "times";
            value = e;
            setFormData({...formData, [key]: value});
        } 
        // Supplement
        else if (e.target.name === "supplement") {
            key = e.target.name;
            value = e.target.value;
            setFormData({...formData, [key]: value});
        }
        // Days
        else {
            key = "days";
            value = {[e.target.name]: e.target.checked};
            setFormData({...formData, [key]: {...formData.days, ...value}});
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        const newdate = year + "/" + month + "/" + day;

        const postFormData = {...formData, startDate: newdate.toString()};
        fetch("http://localhost:4000/reminders", {
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
            })
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label> Supplement: <input name="supplement" type="text" value={formData.supplement} onChange={handleChange}></input></label>
            <label> <input name="Monday" type="checkbox" checked={formData.days.Monday} onChange={handleChange}></input> Monday</label>
            <label> <input name="Tuesday" type="checkbox" checked={formData.days.Tuesday} onChange={handleChange}></input> Tuesday</label>
            <label> <input name="Wednesday" type="checkbox" checked={formData.days.Wednesday} onChange={handleChange}></input> Wednesday</label>
            <label> <input name="Thursday" type="checkbox" checked={formData.days.Thursday} onChange={handleChange}></input> Thursday</label>
            <label> <input name="Friday" type="checkbox" checked={formData.days.Friday} onChange={handleChange}></input> Friday</label>
            <label> <input name="Saturday" type="checkbox" checked={formData.days.Saturday} onChange={handleChange}></input> Saturday</label>
            <label> <input name="Sunday" type="checkbox" checked={formData.days.Sunday} onChange={handleChange}></input> Sunday</label>
            <TimePicker id="time" onChange={handleChange} value={formData.times} />
            <button type="submit">Submit</button>
        </form>
    )

}

export default AddNew;

// ROUTE
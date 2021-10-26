import {useState} from 'react';
import TimePicker from 'react-time-picker';

function AddNew({setReminders}) {
    const [formData, setFormData] = useState({
        supplement: "",
        days: [],
        times: "10:00",
    })

    function handleChange(e) {
        const key = e.target === undefined ? "times" : e.target.name;
        const value = e.target === undefined ? e : e.target.value;
        switch (key) {
            case "times":
            case "supplement":
                setFormData({...formData, [key]: value});
                break;
            case "day":
                setFormData({...formData, days: [...formData.days, value]});
                break;
            default:
                break;
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
                days: [],
                times: "10:00"
            })
        })
    } 
    
    return (
        <form onSubmit={handleSubmit}>
            <label> Supplement: <input name="supplement" type="text" value={formData.supplement} onChange={handleChange}></input></label>
            <label> <input name="day" type="checkbox" value="Monday" onChange={handleChange}></input> Monday</label>
            <label> <input name="day" type="checkbox" value="Tuesday" onChange={handleChange}></input> Tuesday</label>
            <label> <input name="day" type="checkbox" value="Wednesday" onChange={handleChange}></input> Wednesday</label>
            <label> <input name="day" type="checkbox" value="Thursday" onChange={handleChange}></input> Thursday</label>
            <label> <input name="day" type="checkbox" value="Friday" onChange={handleChange}></input> Friday</label>
            <label> <input name="day" type="checkbox" value="Saturday" onChange={handleChange}></input> Saturday</label>
            <label> <input name="day" type="checkbox" value="Sunday" onChange={handleChange}></input> Sunday</label>
            <TimePicker id="time" onChange={handleChange} value={formData.times} />
            <button type="submit">Submit</button>
        </form>
    )

}

export default AddNew;

// ROUTE
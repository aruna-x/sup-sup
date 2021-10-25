import {useState} from 'react';
import TimePicker from 'react-time-picker';

function AddNew() {

    const [time, setTime] = useState('10:00');
    const [formData, setFormData] = useState({
        supplement: "",
        days: [],
        times: time
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        switch (key) {
            case "supplement":
                setFormData({...formData, [key]: value});
                break;
            default:
                setFormData({...formData, days: [...formData.days, value]});
                break;
        }
    }

    console.log(formData);
    
    return (
        <form>
            <label> Supplement: <input name="supplment" type="text" value={formData.supplement} onChange={handleChange}></input></label>
            <label> <input name="day" type="checkbox" value="Monday" onChange={handleChange}></input> Monday</label>
            <label> <input name="day" type="checkbox" value="Tuesday" onChange={handleChange}></input> Tuesday</label>
            <label> <input name="day" type="checkbox" value="Wednesday" onChange={handleChange}></input> Wednesday</label>
            <label> <input name="day" type="checkbox" value="Thursday" onChange={handleChange}></input> Thursday</label>
            <label> <input name="day" type="checkbox" value="Friday" onChange={handleChange}></input> Friday</label>
            <label> <input name="day" type="checkbox" value="Saturday" onChange={handleChange}></input> Saturday</label>
            <label> <input name="day" type="checkbox" value="Sunday" onChange={handleChange}></input> Sunday</label>
            <TimePicker onChange={setTime} value={formData.times} />
        </form>
    )

}

export default AddNew;

// ROUTE
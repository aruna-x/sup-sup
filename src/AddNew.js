import {useState} from 'react';
import TimePicker from 'react-time-picker';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

function AddNew({setReminders, formatDate}) {

    let history = useHistory();

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
        if (e.target === undefined) {
            key = "times";
            value = e;
            setFormData({...formData, [key]: value});
        } 
        else if (e.target.name === "supplement") {
            key = e.target.name;
            value = e.target.value;
            setFormData({...formData, [key]: value});
        }
        else {
            key = "days";
            value = {[e.target.name]: e.target.checked};
            setFormData({...formData, [key]: {...formData.days, ...value}});
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        const dateObj = new Date();
        const newdate = formatDate(dateObj);

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
        .then(() => history.push("/"))
    }
    
    return (
        <Fill onSubmit={handleSubmit}>
            <label> Supplement:<input className="sup" name="supplement" type="text" value={formData.supplement} onChange={handleChange} placeholder="ex: Steroids" required></input></label>
            <TimePicker id="time" onChange={handleChange} value={formData.times} />
            <CheckBox>
                <label> <input name="Monday" type="checkbox" checked={formData.days.Monday} onChange={handleChange}></input> Monday</label>
                <label> <input name="Tuesday" type="checkbox" checked={formData.days.Tuesday} onChange={handleChange}></input> Tuesday</label>
                <label> <input name="Wednesday" type="checkbox" checked={formData.days.Wednesday} onChange={handleChange}></input> Wednesday</label>
                <label> <input name="Thursday" type="checkbox" checked={formData.days.Thursday} onChange={handleChange}></input> Thursday</label>
                <label> <input name="Friday" type="checkbox" checked={formData.days.Friday} onChange={handleChange}></input> Friday</label>
                <label> <input name="Saturday" type="checkbox" checked={formData.days.Saturday} onChange={handleChange}></input> Saturday</label>
                <label> <input name="Sunday" type="checkbox" checked={formData.days.Sunday} onChange={handleChange}></input> Sunday</label>
                </CheckBox>
            <button className='submit' type="submit">SUBMIT</button>
        </Fill>
    )

}

export default AddNew;

const Fill = styled.form`
    font-family: 'Zen Kaku Gothic New', sans-serif;
    margin: auto;
    text-align: center;
    .sup{
        margin-left: 10px;
        margin-right: 15px;
        font-size: 17px;
    }
    .submit{
        padding: 10px 15px;
        font-size: 13px;
        margin-top: 10px;
        margin-bottom: 20px;
        font-weight: 900;
        font-family: 'Carter One', cursive;
        letter-spacing: 2px;
    }
    label{
        display: inline-flex;
        justify-content: center;
        margin: 13px 10px;
    }
    button{
        text-align: center;
        background-color: #ABC01D;
        border: none;
        padding: 5px;
        cursor: pointer;
        :hover{
            background-color: rgba(171, 192, 29, 0.5);
        }
    }
`
const CheckBox = styled.div`
    input{
        height: 35px;
        margin-right: 5px;
        }
    }
`
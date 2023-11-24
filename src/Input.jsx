import React, { useState } from "react";
import Button from "./images/icon-arrow.svg";
import { differenceInYears, differenceInMonths,  differenceInDays} from 'date-fns';


const Input = (prop) => {
    const [userdate, setDate] = useState({
        day: "",
        month:  "",
        year: ""
    });

    const [userdata, setData] = useState({});

    const changeEvent = (event) => {
       const {name, value} = event.target;
       setDate((prev) => {
        return {
            ...prev,
            [name]: value
        }
       });
    }


    const setEvent = (event) => {
        event.preventDefault();
        const error = {};
        
        const day = daysInMonth(parseInt(userdate.month), parseInt(userdate.year));
console.log(day);

        if (!userdate.day) {
            error.day = "This field is required";
        } else if (userdate.day<0 || userdate.day > day) {
            error.day = "Must be a valid date";
        }
      
        if (!userdate.month) {
         error.month = "This field is required";
        } else if (userdate.month< 0 || userdate.month>12) {
          error.month = "Must be a valid month";
        }
        if (!userdate.year) {
             error.year = "This field is required";
            } else if (userdate.year < 0 || userdate.year>new Date().getFullYear()) {
              error.year = "Must be a valid year";
            }
        setData(error);
        
        const years =  differenceInYears(new Date(), new Date(userdate.year, parseInt(userdate.month-1), parseInt(userdate.day)));
        const months = differenceInMonths(new Date(),new Date(userdate.year, parseInt(userdate.month-1), parseInt(userdate.day)))%12;
        const days = Math.abs(differenceInDays(new Date(), new Date(new Date().getFullYear(),new Date().getMonth(), parseInt(userdate.day))));
        const data = (Object.keys(error).length === 0) ? [years, months, days] : ['--', '--', '--'];
        prop.sendDate(data);

        function daysInMonth(m, y) { 
            switch (m) {
                case 2 :
                    return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28;
                case 9 : case 4 : case 6 : case 11 :
                    return 30;
                default :
                    return 31
            }
        }

        
    }

    return(<>
        <div className="input">
            <form onSubmit={setEvent}>
                <div className="userinput">
                <div className="daydata">
                        <div className="day">
                            <label style = {userdata.day ? {color: 'hsl(0, 100%, 67%)'}: {color: 'hsl(0, 1%, 44%)'}}>Day</label>
                            <input name="day" type="number" placeholder="DD" onChange={changeEvent} value={userdate.day} style = {userdata.day ? {border: '1px solid hsl(0, 100%, 67%)'}: {border: '1px solid hsl(0, 0%, 86%)'}}/>
                        </div>
                        {userdata.day ? <div className='error'>{userdata.day}</div> : null}
                    </div>
                    <div className="monthdata">
                        <div className="month">
                            <label style = {userdata.month ? {color: 'hsl(0, 100%, 67%)'}: {color: 'hsl(0, 1%, 44%)'}}>Month</label>
                            <input name="month" type="number" placeholder="MM" onChange={changeEvent} value={userdate.month} style = {userdata.month ? {border: '1px solid hsl(0, 100%, 67%)'}: {border: '1px solid hsl(0, 0%, 86%)'}}/>
                        </div>
                        {userdata.month ? <div className='error'>{userdata.month}</div> : null}
                    </div>
                    <div className="yeardata">
                        <div className="year">
                            <label style = {userdata.year ? {color: 'hsl(0, 100%, 67%)'}: {color: 'hsl(0, 1%, 44%)'}}>Year</label>
                            <input name="year" type="number" placeholder="YYYY" onChange={changeEvent} value={userdate.year} style = {userdata.year ? {border: '1px solid hsl(0, 100%, 67%)'}: {border: '1px solid hsl(0, 0%, 86%)'}}/>
                        </div>
                        {userdata.year ? <div className='error'>{userdata.year}</div> : null}
                    </div>
                </div>
                    <button type="submit"><img src={Button} alt="arrow"/></button>
            </form>
        </div>
    </>)
}

export default Input;
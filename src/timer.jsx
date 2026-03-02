import React from 'react'
import {useState, useEffect} from 'react'
import './timer.css'

function Timer() {
    const birthDate = new Date("2004-04-16")

    const[age, setAge] =useState({
        years :0,
        months:0,
        days:0
    })

    useEffect(()=>{
        function calculateAge(){
        const today = new Date()

        let years = today.getFullYear()- birthDate.getFullYear()
        let months = today.getMonth() - birthDate.getMonth()
        let days = today.getDate() - birthDate.getDate()

        if(days<0){
            months--
            let prevMonth = new Date(today.getFullYear(),today.getMonth(),0)
            days+=prevMonth.getDate()
        }

        if(months<0){
            years--
            months+=12
        }
        setAge({years, months, days})
    }
        
    calculateAge()
    },[])
  return (
    <div className="timer">
        <h1>Cheers to surviving <span>{age.years} </span>years, <span>{age.months} </span> months,<span> {age.days} </span>days on this fuckin' planet 🥂</h1>
    </div>
  )
}

export default Timer
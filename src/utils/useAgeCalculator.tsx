import { useState, useEffect } from 'react';
import { DateObject, ErrorsObject } from '../types';


const useAgeCalculator = (dob: DateObject, errors: ErrorsObject) => {
    const [age, setAge] = useState({ days: 0, months: 0, years: 0 })
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    useEffect(() => {
        // if (!errors.day || !errors.month || !errors.year || !errors.dateInvalid) 
        if (!Object.values(errors).some(error => error))
            ageCalculator();
     
    }, [dob, errors]);


    const ageCalculator = () => {
        const birthDate = new Date(dob.year, dob.month - 1, dob.day);

        let years = currentYear - birthDate.getFullYear();
        let months = (currentMonth - 1) - birthDate.getMonth();
        let days = currentDay - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(currentYear, currentMonth - 1, 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setAge({ days, months, years });       

    }

    return age;

}

export default useAgeCalculator
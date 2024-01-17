import React from 'react';
import { ErrorsObject, DateObject } from '../types';

//const validation = (value: string, name: string, dob: DateObject, setErrors: React.Dispatch<React.SetStateAction<ErrorsObject>>, errors: ErrorsObject) => {
const validation = (newDob: DateObject) => {
  let newErrors: ErrorsObject = { day: '', month: '', year: '', dateInvalidorFuture: '' };
  const currentDate = new Date();

  /*Receive validation errors if: */

  // 1.Any field is empty when the form is submitted 
  if (!newDob.day) {
    newErrors.day = 'Day is required';
    return newErrors;
  }

  if (!newDob.month) {
    newErrors.month = 'Month is required';
    return newErrors;
  }
  if (!newDob.year) {
    newErrors.year = 'Year is required';
    return newErrors;
  }

  // 2.The day number is not between 1-31
  if (newDob.day < 1 || newDob.day > 31) newErrors.day = 'Day should be between 1-31';


  // 3.The month number is not between 1-12 
  if (newDob.month < 1 || newDob.month > 12) newErrors.month = 'Month should be between 1-12';

  // 4. The date is invalid.  
  if (!isValidDate(newDob) && newDob.day && newDob.month && newDob.year) {
    newErrors.dateInvalidorFuture = 'Invalid date';
  }

  // 5. The date is in the future.
  const inputDate = new Date(newDob.year, newDob.month - 1, newDob.day);
  if (inputDate > currentDate) newErrors.dateInvalidorFuture = 'The date is in the future';

  return newErrors;

}

const isValidDate = (dateObject: DateObject): boolean => {
  const { day, month, year } = dateObject;
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === +year && date.getMonth() === +month - 1 && date.getDate() === +day;
};

export default validation
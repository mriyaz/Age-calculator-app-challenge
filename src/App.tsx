import { useCallback, useState } from 'react';
import arrowIcon from './assets/images/icon-arrow.svg';
import InputField from './components/InputField';
import ResultDisplay from './components/ResultDisplay';
import useAgeCalculator from './utils/useAgeCalculator';
import validation from './utils/validation';
import { AgeObject, DateObject, ErrorsObject } from './types';
import './App.css';


const App = () => {
  const [dob, setDob] = useState({ day: 24, month: 9, year: 1984 })
  const [errors, setErrors] = useState<ErrorsObject>({ day: '', month: '', year: '', dateInvalidorFuture: '' });

  //useAgeCalculator
  const age: AgeObject = useAgeCalculator(dob, errors);

  const handleChange = useCallback((inputValue: string, name: keyof DateObject) => {
    const newDob = { ...dob, [name]: inputValue };
    setDob(newDob);

    const newErrors = validation(newDob);
    setErrors(newErrors);
  }, [dob]);



  return (
    <div className="container mx-auto p-4 bg-neutral-off-white min-h-screen font-Poppins lg:p-8">

      <div className="bg-white p-6 mt-16 rounded-lg rounded-br-3xl lg:w-1/2 lg:mx-auto lg:rounded-2xl lg:rounded-br-8xl">

        <div className="flex gap-2 flex-grow shrink-0 basis-1/5">
          {/* Input field for day */}
          <InputField error={errors.day} dateInvalidorFuture={errors.dateInvalidorFuture}
            onchange={(value) => handleChange(value, 'day')} dobElement={dob.day} label='day' />
          {/* Input field for month */}
          <InputField error={errors.month} dateInvalidorFuture={errors.dateInvalidorFuture}
            onchange={(value) => handleChange(value, 'month')} dobElement={dob.month} label='month' />
          {/* Input field for year */}
          <InputField error={errors.year} dateInvalidorFuture={errors.dateInvalidorFuture}
            onchange={(value) => handleChange(value, 'year')} dobElement={dob.year} label='year' />
        </div>
        <span className="text-red-500 text-xs">{errors.dateInvalidorFuture}</span>

        {/* Arrow Icon */}
        <div className="flex items-center mt-8 mb-8">
          <hr className='border-t border-gray-300 flex-1' />
          <img src={arrowIcon} alt="Arrow Icon" className='rounded-full w-12 bg-primary-purple p-3 hover:bg-black hover:cursor-pointer lg:w-16' />
          <hr className='border-t border-gray-300 flex-1 lg:hidden' />
        </div>

        {/* Display the Calculated Age */}
        <div className="text-5xl italic lg:text-7xl">
          <ResultDisplay age={age} errors={errors} />
        </div>

      </div>
    </div>
  );
}

export default App;

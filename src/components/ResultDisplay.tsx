import React from 'react';
import { useSpring, animated } from 'react-spring';
import { AgeObject, ErrorsObject } from '../types';


const ResultDisplay = ({ age, errors }: { age: AgeObject, errors: ErrorsObject }) => {
  // Use `react-spring` to animate the values
  const yearProps =  useSpring({ number: age.years, from: { number: 0 } });
  const monthProps = useSpring({ number: age.months, from: { number: 0 } });
  const dayProps = useSpring({ number: age.days, from: { number: 0 } });

  return (
    <div className="text-5xl italic lg:text-7xl">
      <animated.div>

        <h1 className="font-bold font-poppins">
          <animated.span className='text-primary-purple'>{errors.year || errors.dateInvalidorFuture || !age.years ? '--' : yearProps.number.to(n => n.toFixed(0))}</animated.span> years
        </h1>
        <h1 className="font-bold font-poppins">
          <animated.span className='text-primary-purple'>{errors.month || errors.dateInvalidorFuture || !age.months ? '--' : monthProps.number.to(n => n.toFixed(0))}</animated.span> months
        </h1>
        <h1 className="font-bold font-poppins">
          <animated.span className='text-primary-purple'>{errors.day || errors.dateInvalidorFuture || !age.days ? '--' : dayProps.number.to(n => n.toFixed(0))}</animated.span> days
        </h1>

      </animated.div>
    </div>
  );
};

export default ResultDisplay;

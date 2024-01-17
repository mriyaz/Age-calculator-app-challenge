import React from 'react';

type InputFieldProps = {
  error: string,
  dateInvalidorFuture: string,
  onchange: (val1: string) => void;
  dobElement: number,
  label: string
}

const InputField: React.FC<InputFieldProps> = ({ error, dateInvalidorFuture, onchange, dobElement, label }) => {
  return (
    <div >
      <span className={`font-bold text-xs uppercase tracking-widest ${error || dateInvalidorFuture ? 'text-red-500' : 'text-gray-500'}`}>{label}</span>
      <input type="number"
        className="font-bold text-lg border-2 border-gray-300 py-2 px-6 rounded-md w-full lg:text-2xl"
        value={dobElement}
        onChange={(e) => onchange(e.target.value)}
      />
      <span className="text-red-500 text-xs">{error}</span>
    </div>
  )
}

export default InputField
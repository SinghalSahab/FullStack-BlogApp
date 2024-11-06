import React from "react";

const Inputbox = ({
  label,
  name,
  type,
  isRequired = false,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className='w-full flex flex-col gap-1'>
      <label className='text-slate-900 dark:text-gray-500' htmlFor="email">
        {label}
        </label> 
        <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} Required={isRequired} className="placeholder-gray-300 dark:placeholder-gray-700 text-gray-900 border round-full border-gray-300 dark:border-gray-600 dark:text-gray-300 dark:bg-transparent appearance-none block w-full rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base px-3 2xl:py-3 py-2.5"/>
    </div>
  );
};

export default Inputbox;
import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
   const [value, setValue] = useState("");
  return (
    <div className='relative h-[3rem] w-[30rem]'> 
    <FontAwesomeIcon className='text-orange-400 absolute top-3 left-3 text-[1.2rem]' icon={faMagnifyingGlass}/>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-2 pl-10 w-[100%] text-white border-orange-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Search for Movies or Series"
      />
      </div>
     
  );
}

export default SearchBar
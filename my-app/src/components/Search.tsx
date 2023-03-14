
import React, { FC, useState } from 'react'
import axios from 'axios';

interface SearchProps{
  inputValue: any;
  setInputValue: any;
}

const Search: FC <SearchProps> = ({ inputValue, setInputValue }) => {

  const handleSearch = (ev:any) => {

    setInputValue(ev.target.value)
  }

  return (
    <input onInput={handleSearch} id={"search"} type={"text"} placeholder={`Enter breed`} />
  )
}

export default Search;
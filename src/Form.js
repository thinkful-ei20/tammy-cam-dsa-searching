import React from 'react';

export default function SearchForm(props){
  return(
    <form>
      <label>Search:
      <input
        type='search'
        placeholder='write a number'
        
      />
      </label>
      <button className='linear' 
      onClick={(e)=> props.onClick(e)}>
      Linear</button>
      <button className='binary' 
      onClick={(e) => props.onBinaryClick(e)}>
      Binary</button>
    </form>
  )
}
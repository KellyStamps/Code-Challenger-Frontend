import React from 'react'
import {Link} from 'react-router-dom'

const ChallengeSorters = ({handleChange, searchTerm}) => {
  return (
    <div className='sorters'>
    
      <div className='filter-cards'>
        <label for='filter-checkbox'>Only projects I have not done</label>
        <input onChange={this.handleChange} id='filter-checkbox' type='checkbox'/>
      </div>
    
      <div className='search'>
        <input onChange={this.handleChange} value={searchTerm} id='search' type='text' placeholder='Search Challenges...' />
      </div>
      
      <div className='new-challenge-link-div'>
        <Link to='/challenges/new'>New Challenge</Link>
      </div>
    
    </div>
  )
}

export default ChallengeSorters;
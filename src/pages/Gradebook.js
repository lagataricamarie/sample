import React from 'react'
import Nav from './Nav'

function Gradebook({ Toggle }) {
  return (
    <div className='px-3'>
        <Nav Toggle={Toggle} />     
        <h1 className='text-black'>
            GradebookPage
        </h1>
    </div>
    )
  }

export default Gradebook

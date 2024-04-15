import React from 'react'
import Nav from './Nav'

function Report({ Toggle }) {
    return (
    <div className='px-3'>
        <Nav Toggle={Toggle} />     
        <h1 className='text-black'>
            Report Page
        </h1>
    </div>
    )
  }

export default Report

import React from 'react'
import Nav from './Nav'

function Logout({ Toggle }) {
    return (
    <div className='px-3'>
        <Nav Toggle={Toggle} />     
        <h1 className='text-black'>
            Logout Page
        </h1>
    </div>
    )
  }
export default Logout

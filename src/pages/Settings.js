import React from 'react'
import Nav from './Nav'

function Settings({ Toggle }) {
    return (
    <div className='px-3'>
        <Nav Toggle={Toggle} />     
        <h1 className='text-black'>
            Settings Page
        </h1>
    </div>
    )
  }

export default Settings

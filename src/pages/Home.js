import React from 'react'
import Nav from './Nav'

function Home({ Toggle }) {
    return (
    <div className='px-3'>
        <Nav Toggle={Toggle} />     
        <h1 className='text-black'>
            DashboardTo
        </h1>
    </div>
    )
  }


export default Home

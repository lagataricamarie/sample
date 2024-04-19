import React from 'react'
import Nav from './Nav'

function Home({ Toggle }) {
    return (
        <div className='px-3'>
            <Nav Toggle={Toggle} />     
            <h1 className='text-black'>
                Welcome, UserName!
            </h1>
        </div>
    );
}


export default Home

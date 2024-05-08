import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Gradebook from './Gradebook';
import Home from './Home';
import Course from './Course1';
import Course2 from './Course2';
import Course3 from './Course3';

function App() {
    const [currentPage, setCurrentPage] = useState('home', 'gradebook', 'course1', 'course2'); // Set initial state to 'home'
    const [toggle, setToggle] = useState(true);

    const handlePageChange = (page) => {
      setCurrentPage(page);
      if (window.innerWidth < 768 && toggle) {
          setToggle(false);
      }
  };

    const Toggle = () => {
        setToggle(!toggle);
    };

    const handleBack = () => {
      setCurrentPage('gradebook'); // Assuming 'gradebook' is the page key for Gradebook
  };

    return (
        <div className='container-fluid bg-light min-vh-100'>
            <div className='row'>
                {toggle && (
                    <div className='col-3 col-md-2 bg-white min-vh-100'>
                        <Sidebar setPage={handlePageChange} />
                    </div>
                )}
                <div className={`col ${toggle ? 'col-md-8 col-lg-10 ' : 'col-md-12'}`}>
                    {currentPage === 'home' && <Home Toggle={Toggle} />}
                    {currentPage === 'gradebook' && <Gradebook Toggle={Toggle} setPage={handlePageChange} />}
                    {currentPage === 'course1' && <Course Toggle={Toggle} handleBack={handleBack}/>}
                    {currentPage === 'course2' && <Course2 Toggle={Toggle} handleBack={handleBack}/>}
                    {currentPage === 'course3' && <Course3 Toggle={Toggle} handleBack={handleBack}/>}
                </div>
            </div>
        </div>
    );
}

export default App;

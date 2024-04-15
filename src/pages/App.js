// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Home from './Home'; // Assuming your Home component contains the dashboard content
import Students from './Students';
import Gradebook from './Gradebook';
import Settings from './Settings';
import Report from './Report';
import Logout from './Logout';

function App() {
  const [currentPage, setCurrentPage] = useState('home', 'students', 'gradebook','report', 'settings', 'logout');
    const [toggle, setToggle] = useState(true);   

    const handlePageChange = (page) => {
      setCurrentPage(page);
  };

    const Toggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className='container-fluid bg-light min-vh-100'>
            <div className='row'>
                {toggle && (
                    <div className='col-12 col-md-4 col-lg-2 bg-white vh-100'>
                        <Sidebar setPage={handlePageChange} />
                    </div>
                )}
                <div className={`col ${toggle ? 'col-md-8 col-lg-10' : 'col-md-12'}`}>
                  {currentPage === 'home' && <Home Toggle={Toggle} />}
                  {currentPage === 'students' && <Students Toggle={Toggle} />}
                  {currentPage === 'gradebook' && <Gradebook Toggle={Toggle} />}
                  {currentPage === 'report' && <Report Toggle={Toggle} />}
                  {currentPage === 'settings' && <Settings Toggle={Toggle} />}
                  {currentPage === 'logout' && <Logout Toggle={Toggle} />}
                </div>
            </div>
        </div>
    );
}

export default App;

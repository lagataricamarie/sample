import React from 'react'
import Nav from './Nav'


function Students({Toggle}) {
    return (
    <div className='px-3'>
        <Nav Toggle={Toggle} />
        <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>Sample Subject 1</h3>
                        </div>
                        <i className='bi bi-book p-3 fs-1'></i>
                    </div>
                </div>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>Sample Subject 2</h3>
                        </div>
                        <i className='bi bi-book p-3 fs-1'></i>
                    </div>
                </div>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>Sample Subject 3</h3>
                        </div>
                        <i className='bi bi-book p-3 fs-1'></i>
                    </div>
                </div>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>Sample Subject 4</h3>
                        </div>
                        <i className='bi bi-book p-3 fs-1'></i>
                    </div>
                </div>
            </div>
        </div>
        <table class="table caption-top bg-white rounded mt-2">
            <caption className='text-white fs-4'>Recent</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Year/Section</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>3rd Year BSIT</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thor</td>
                    <td>3rd Year BSIT</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>Vel</td>
                    <td>3rd Year BSIT</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Java</td>
                    <td>Script</td>
                    <td>3rd Year BSIT</td>
                </tr>
                 <tr>
                    <th scope="row">5</th>
                    <td>Boot</td>
                    <td>Strap</td>
                    <td>3rd Year BSIT</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Html</td>
                    <td>Html</td>
                    <td>3rd Year BSIT</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
export default Students;
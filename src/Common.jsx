import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
        <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 d-flex justify-content-center flex-column order-2 order-sm-1'>
                                    <h1>{props.name} <strong className='brand-name'>HadaTechnical</strong></h1>
                                    <h2 className='my-3'>We are the team of talented developer making websites</h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn btn-outline-secondary'>{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className='col-md-6 header-img order-sm-2 order-1' style={{textAlign:'center'}}>
                                    <img src={props.imgsrc} className='img-fluid animated' alt='home_img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Common

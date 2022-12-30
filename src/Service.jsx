import React from 'react'
import Card from './Card'
import { Sdata } from './Sdata'

const Service = () => {
    return (
        <>
            <div className='text-center'>
                <h1>Our Service </h1>
            </div>
            <div className='container-fluid'>
                <div className='row mt-4'>
                    <div className='col-10 mx-auto'>
                        <div className='row mb-5 gy-4'>
                            {Sdata.map((val,index)=>{
                                return <Card
                                    key = {index}
                                    imgsrc = {val.imgsrc}
                                    title = {val.title}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Service

import React from 'react'
import girl from '../images/Image (8).png'
import users from '../images/Users.png'
import notebook from '../images/Notebook.png'
import galochka from '../images/CircleWavyCheck.png'
import stack from '../images/Stack.png'
import globe from '../images/GlobeHemisphereWest.png'

export default function Main() {
    return (
        <div className='my-2'>
            <div className='row'>
                <div className='col-md-8 offset-2'>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center flex-column'>
                            <h1>Become an Instuctor</h1>
                            <p>Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.</p>
                            <button className='btn btn-danger'>Get started</button>
                        </div>
                        <div className='col-md-6'>
                            <img src={girl} alt="" width={450} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row py-3' style={{backgroundColor: "#FFEEE8"}}>
                <div className='col-md-8 offset-2'>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-2 d-flex align-items-start'>
                            <img src={users} alt="" />
                            <div className='d-flex flex-column mx-2'>
                                <h5>64.3K</h5>
                                <p className='text-secondary small'>Students</p>
                            </div>
                        </div>
                        <div className='col-md-2 d-flex align-items-start'>
                            <img src={notebook} alt="" />
                            <div className='d-flex flex-column mx-2'>
                                <h5>26k</h5>
                                <p className='text-secondary small'>Certified </p>
                            </div>
                        </div>
                        <div className='col-md-2 d-flex align-items-start'>
                            <img src={galochka} alt="" />
                            <div className='d-flex flex-column mx-2'>
                                <h5>99.9%</h5>
                                <p className='text-secondary small'>Success </p>
                            </div>
                        </div>
                        <div className='col-md-2 d-flex align-items-start'>
                            <img src={stack} alt="" />
                            <div className='d-flex flex-column mx-2'>
                                <h5>72.3K</h5>
                                <p className='text-secondary small'>Country </p>
                            </div>
                        </div>
                        <div className='col-md-2 d-flex align-items-start'>
                            <img src={globe} alt="" />
                            <div className='d-flex flex-column mx-2'>
                                <h5>72</h5>
                                <p className='text-secondary small'>Trusted </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

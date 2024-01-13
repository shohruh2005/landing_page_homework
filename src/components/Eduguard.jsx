import React from 'react';
import imac from '../images/Image (9).png'
import circle from '../images/CheckCircle.png'

export default function Eduguard() {
    return (
        <div>
            <div className='row my-4'>
                <div className='col-md-8 offset-2'>
                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center'>
                            <img src={imac} alt="" className='w-100 '/>
                        </div>
                        <div className='col-md-6'>
                            <h4>Why you’ll start teaching on Eduguard</h4>
                            <p style={{ fontSize: '12px' }}>Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque, vitae auctor arcu ornare. Cras vitae nulla a purus mollis venenatis. </p>

                            <div className='d-flex align-items-start'>
                                <img src={circle} alt="" />
                                <div className='d-flex flex-column mx-3'>
                                    <h5>Tech your students as you want.</h5>
                                    <p style={{ fontSize: '12px' }}>Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus. </p>
                                </div>
                            </div>

                            <div className='d-flex align-items-start'>
                                <img src={circle} alt="" />
                                <div className='d-flex flex-column mx-3'>
                                    <h5>Manage your course, payment in one place</h5>
                                    <p style={{ fontSize: '12px' }}>Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim.</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-start'>
                                <img src={circle} alt="" />
                                <div className='d-flex flex-column mx-3'>
                                    <h5>Chat with your students</h5>
                                    <p style={{ fontSize: '12px' }}>Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id. </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

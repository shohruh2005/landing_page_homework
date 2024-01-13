import React from 'react'
import icon from '../images/Icons.png'
import icon1 from '../images/Icons (1).png'
import icon2 from '../images/Icons (2).png'
import icon3 from '../images/Icons (3).png'

export default function Successfull() {
    return (
        <div className='row bg-light py-4'>
            <div className='col-md-10 offset-1'>
                <div className='row'>
                    <h2 className='text-center'>How you'll become <br/> successful instructor</h2>
                </div>
                <div className='text-center d-flex gap-3'  >
                    <div className='col-md-3 bg-white p-4'>
                        <img src={icon} alt="" />
                        <h5 className='my-2'>1. Apply to become instructor.</h5>
                        <p className='text-secondary small'>Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.</p>
                    </div>
                    <div className='col-md-3 bg-white p-4'>
                        <img src={icon1} alt="" />
                        <h5 className='my-2'>2. Setup & edit your profile.</h5>
                        <p className='text-secondary small'>Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.</p>
                    </div>
                    <div className='col-md-3 bg-white p-4'>
                        <img src={icon2} alt="" />
                        <h5 className='my-2'>3. Create your new course</h5>
                        <p className='text-secondary small'>Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.</p>
                    </div>
                    <div className='col-md-3 bg-white p-4'>
                        <img src={icon3} alt="" />
                        <h5 className='my-2'>4. Start teaching & earning</h5>
                        <p className='text-secondary small'>Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

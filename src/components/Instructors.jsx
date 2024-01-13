import React from 'react'
import union from '../images/Union.png'

export default function Instructors() {
  return (
    <div className='row my-5'>
        <div className='col-md-8 offset-2'>
            <div className='row'>
                <div className='col-md-6'>
                    <h3 className='my-4'>Instructor rules & regulations</h3>
                    <p className='text-secondary'>Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet sem luctus in. Etiam et egestas lorem. </p>
                    <ul>
                        <li>Sed ullamcorper libero quis condimentum pellentesque.</li>
                        <li>Nam leo tortor, tempus et felis non.</li>
                        <li>Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.</li>
                        <li>Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet turpi.</li>
                    </ul>
                </div>
                <div className='col-md-6'>
                    <img src={union} alt="" className='w-100' />
                </div>
            </div>
        </div>
    </div>
  )
}

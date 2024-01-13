import React from 'react'
import logo from '../images/GraduationCap.png';
import bell from '../images/Bell.png';
import heart from '../images/Heart.png';
import cart from '../images/ShoppingCartSimple.png';
import search from '../images/MagnifyingGlass.png';

export default function Header() {
    return (
        <div>
            <div className='row border px-3'>
                <div className='col-md-6 d-flex justify-content-start align-items-center'>
                    <img src={logo} alt="" />
                    <h3>E_tutor</h3>
                    <div class="input-group m-3 w-75">
                        <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text" id="basic-addon2">Browse...</span>
                    </div>
                    <div class="input-group m-3 w-75">
                        <span class="input-group-text" id="basic-addon1">
                            <img src={search} alt="" />
                        </span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className='col-md-6 d-flex justify-content-end align-items-center'>
                    <img className='mx-2' src={bell} alt="" />
                    <img className='mx-2' src={heart} alt="" />
                    <img className='mx-2' src={cart} alt="" />
                    <button className='btn btn-outline-danger mx-2'>Create Accaunt</button>
                    <button className='btn btn-danger'>Sign In</button>
                </div>
            </div>

            <div className='row d-flex align-items-center bg-light text-center p-3'>
                <h3>Become an Instructor</h3>
                <p>Home / Become instructor </p>
            </div>
        </div>
    )
}

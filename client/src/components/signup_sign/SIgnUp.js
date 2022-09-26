import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

const SIgnUp = () => {

    const [udata, setData] = useState({

        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""

    });

    const adddata = (e) => {
        const { name, value } = e.target;

        setData(() => {
            return {
                ...udata,
                [name]: value
            }
        })
    }

    return (

        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src='./blacklogoamazon.png' alt='amazonlogo' />
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Sign-Up</h1>
                        <div className="form_data">
                            <label htmlFor='fname'>Name</label>
                            <input type="text"
                                onChange={adddata}
                                value={udata.fname}
                                name="fname" id="fname" placeholder='Enter your name' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='email'>Email</label>
                            <input type="email"
                                onChange={adddata}
                                value={udata.email}
                                name="email" id="email" placeholder='Enter your email' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='number'>Mobile</label>
                            <input type="text"
                                onChange={adddata}
                                value={udata.mobile}
                                name="mobile" id="mobile" placeholder='Enter your mobile number' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='password'>Create password</label>
                            <input type="password"
                                onChange={adddata}
                                value={udata.password}
                                name="password" id="password" placeholder='Enter your password' />
                        </div>
                        <div className="form_data">
                            <label htmlFor='cpassword'>Confirm password</label>
                            <input type="password"
                                onChange={adddata}
                                value={udata.cpassword}
                                name="cpassword" id="cpassword" placeholder='Confirm your password' />
                        </div>
                        <button className='signin_btn'>Continue</button>

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign-in</NavLink>
                        </div>

                    </form>
                </div>
            </div>
        </section>

    )
}

export default SIgnUp
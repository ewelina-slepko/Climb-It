import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => (
    //wrzucić do formularza
    <>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
    </>
)


export default SignedOutLinks;

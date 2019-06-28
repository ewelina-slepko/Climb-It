import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => (
    //wrzucić do formularza
    <>
        <NavLink to='/newroute'>Login</NavLink>
        <NavLink to='/newroute'>Sign Up</NavLink>
    </>
)


export default SignedOutLinks;

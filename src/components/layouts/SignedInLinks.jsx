import React from 'react';
import { NavLink } from 'react-router-dom'



const SignedInLinks = () => (
    <ul>
        <li>
            <NavLink to='/'>New Route</NavLink>
            <NavLink to='/'>Routes List</NavLink>
            <NavLink to='/'>Log out</NavLink>
        </li>
    </ul>
);


export default SignedInLinks;

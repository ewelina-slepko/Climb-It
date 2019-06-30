import React from 'react'
import SignIn from './SignIn';

class Form extends React.Component {
    state = {

    }
    handleChange = (e) => {
        e.preventdefault();
        console.log(e.target.value)
    }
    render() {
        return (
            <SignIn handleChange={this.handleChange} />
        )
    }
}

export default Form;

import React from 'react';
import AppBar from '../layouts/AppBar';
import image from '../images/thumbs_up.png'
import { Redirect } from 'react-router-dom'

class NewRouteConfirmation extends React.Component {
    state = {
        redirect: false
    }
    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 2000)
    }
    componentWillUnmount() {
        clearTimeout(this.id)
    }
    render() {
        return (
            this.state.redirect
                ? <Redirect to="/home" />
                : <div style={styles.container}>
                    <AppBar />

                    <div style={styles.wrapper}>
                        <h1 style={styles.text}>Done!</h1>
                        <img src={image} style={styles.picture} />
                    </div>
                </div>
        )
    }

}

const styles = {
    container: {
        width: '100%',
        height: '100%',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        marginTop: 40,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: '1',
        color: '#858282',
        textAlign: 'center',
        paddingTop: 60,
        fontSize: 26,
        letterSpacing: 4,
        textTransform: 'uppercase',
        maxWidth: 500
    },
    picture: {
        flex: '1',
        position: 'relative',
        width: 300,
        maxWidth: 200,
        maxHeight: 200,
        margin: 40,
    },
};

export default NewRouteConfirmation;

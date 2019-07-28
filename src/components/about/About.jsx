import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../images/mountains_view2.jpg'
import AppBar from '../layouts/AppBar'

const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar />
            <div className={clsx(classes.background, window.innerWidth < 992 ? classes.containerMobile : classes.container)}>

                <div className={window.innerWidth < 992 ? classes.textWrapperMobile : classes.textWrapper}>
                    <h1 className={classes.header}>About</h1>
                    <p className={classes.text}>By using application you acknowledge that no title to the intellectual property in the Software is transferred to you.
                        You further acknowledge that title and full ownership rights to the Software will remain the exclusive
                        property of Climb It, and you will not acquire any rights to the Software. You shall not remove or obscure
                        the Owner's copyright, trademark or other proprietary notices from any of the materials contained in this
                        package or downloaded together with the Software. </p>
                    <p className={classes.text}>All graphs in application are designed by
                    <span><a href="https://www.freepik.com/" className={classes.emphasizedText}> Freepik. </a></span>
                    </p>
                    <h1 className={classes.header}>Contact</h1>
                    <p className={classes.text}>If you have any questions regarding privacy while using the Application,
                    or have questions about our practices, please contact me via email at <span className={classes.emphasizedText}>slepko.ewelina@gmail.com</span>
                    </p>
                </div>
            </div>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    background: {
        height: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        opacity: '0.9'
    },
    container: {
        backgroundPositionY: '-200px',
    },
    containerMobile: {
        backgroundPosition: '-200px',
    },
    textWrapper: {
        margin: 100
    },
    textWrapperMobile: {
        margin: 20
    },
    header: {
        margin: 10
    },
    text: {
        textAlign: 'justify',
        margin: 10
    },
    emphasizedText: {
        fontWeight: 'bold',
        color: '#000',
        textDecoration: 'none'
    }

}))

export default Contact;

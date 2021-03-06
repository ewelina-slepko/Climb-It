import React from 'react';
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { deleteRoute } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from "@material-ui/styles"

function getModalStyle() {
    const responsiveWidth = window.innerWidth < 992 ? '90%' : '30%'
    return {
        width: responsiveWidth,
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };
}
const theme = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {
                padding: '5px !important',
                margin: 10,
                backgroundColor: '#fcfcfc',
                fontSize: '0.775rem',
            },
        },
        MuiIconButton: {
            root: {
                margin: 5,
                padding: 0
            }
        },
        MuiIcon: {
            fontSizeSmall: {
                fontSize: '1rem',
            }
        }

    },
});

const RoutesList = (props) => {
    const { auth, myProjects } = props
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [currentRow, setCurrentRow] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        props.deleteRoute(currentRow)
        setTimeout(reloadPage, 800);
    }

    const reloadPage = () => {
        window.location.reload()
    }

    const [state] = React.useState({
        columns: [
            { title: 'Date', field: 'date' },
            { title: 'Location', field: 'location' },
            { title: 'Rock Name', field: 'rockName' },
            { title: 'Route name', field: 'routeName' },
            { title: 'Difficulty', field: 'difficulty' },
        ],

        columnsResponsive: [
            { title: 'Date', field: 'date' },
            { title: 'Route name', field: 'routeName' },
            { title: 'Difficulty', field: 'difficulty' },
        ],
        data: myProjects.map(project => {
            return {
                id: <span>{project.id}</span>,
                date: <span>{project.date}</span>,
                location: <span>{project.location}</span>,
                rockName: <span>{project.rockName}</span>,
                routeName: <span>{project.routeName}</span>,
                climbingType: <span>{project.climbingType}</span>,
                climbingStyle: <span>{project.climbingStyle}</span>,
                boulderingStyle: <span>{project.boulderingStyle}</span>,
                difficulty: <span className={classes.infoGreen} > {project.difficulty}</span >,
                description: <span>{project.description}</span>
            }
        }),
    });
    if (!auth.uid) return <Redirect to="/signin" />
    return (
        <>
            <ThemeProvider theme={theme}>
                <MaterialTable
                    onCellClick={() => { alert("Table Row Clicked!!") }}
                    component={Link} to="/home"
                    title=""
                    columns={window.innerWidth < 992 ? state.columnsResponsive : state.columns}
                    data={state.data}
                    options={{
                        pageSizeOptions: [15, 30, 45],
                        pageSize: 15,
                        search: false,
                        sorting: false,
                        actionsColumnIndex: -1,
                    }}
                    actions={[
                        {
                            icon: 'delete_outline',
                            tooltip: 'Delete project',
                            onClick: (event, rowData) => {
                                setCurrentRow(rowData.id.props.children)
                                handleOpen();
                            }
                        }
                    ]}
                    detailPanel={rowData => {
                        return (
                            <>
                                <div className={classes.details}
                                >
                                    <ul>
                                        <li className={classes.detailsList}>Date:
                                        <p className={classes.detailsListValue}>{rowData.date}</p></li>
                                        <li className={classes.detailsList}>Location:
                                        <p className={classes.detailsListValue}>{rowData.location}</p></li>
                                        <li className={classes.detailsList}>Rock name:
                                        <p className={classes.detailsListValue}>{rowData.rockName}</p></li>
                                        <li className={classes.detailsList}>Route name:
                                        <p className={classes.detailsListValue}>{rowData.routeName}</p></li>
                                    </ul>

                                    <ul>
                                        <li className={classes.detailsList}>Climbing type:
                                        <p className={classes.detailsListValue}>{rowData.climbingType}</p></li>
                                        <li className={classes.detailsList}>Difficulty:
                                        <span className={classes.detailsListValue}>{rowData.difficulty}</span>
                                            <span className={classes.detailsListValueSmall}>
                                                {rowData.climbingStyle}{rowData.boulderingStyle}
                                            </span>
                                        </li>
                                    </ul>

                                </div>
                                <div className={classes.containerDescription}>
                                    <div className={classes.detailsDescription}>
                                        <p className={classes.detailsListValueSmall}>{rowData.description}</p>
                                    </div>
                                </div>

                            </>
                        )
                    }}
                    onRowClick={(event, rowData, togglePanel) => togglePanel()}
                />
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-title">Delete route</h2>
                        <p id="simple-modal-description">
                            Are you sure you want do delete this route?
                        </p>
                        <Button
                            style={{
                                backgroundColor: "#adadad",
                                padding: '3px 30px',
                                borderRadius: 30,
                                margin: 5,
                            }}
                            onClick={handleDelete}>YES</Button>
                        <Button
                            style={{
                                backgroundColor: "#adadad",
                                padding: '3px 30px',
                                borderRadius: 30,
                                margin: 5,
                            }}
                            onClick={handleClose}>NO!</Button>
                    </div>
                </Modal>
            </ThemeProvider>

        </>
    )
}

const useStyles = makeStyles(theme => ({
    header: {
        fontSize: 26,
        textTransform: 'uppercase',
        width: '100%',
        textAlign: 'center',
        color: '#000',
        paddingBottom: 20
    },
    details: {
        fontSize: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    detailsList: {
        listStyleType: 'none',
        padding: '2px 20px',
        color: '#000',
        fontSize: 14
    },
    detailsListValue: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 3
    },
    detailsListValueSmall: {
        fontSize: 10,
        paddingBottom: 3,
        fontStyle: 'italic'
    },
    containerDescription: {
        display: 'flex',
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        margin: '30px 0px',
    },
    detailsDescription: {
        maxWidth: 260,
        borderTop: 'solid #f0f0f0 1px',
        paddingTop: 10
    },
    infoGreen: {
        color: '#1ec74e',
        fontWeight: 'bold'
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
    },

}))

const mapDispatchToProps = (dispatch) => {
    return {
        deleteRoute: (project) => dispatch(deleteRoute(project)),
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        myProjects: state.firestore.ordered.myProjects,
        auth: state.firebase.auth,
        userId: state.firebase.auth.uid,
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => [
        {
            collection: 'myProjects',
        }
    ]),
)(RoutesList);


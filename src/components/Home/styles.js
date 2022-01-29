import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: '24px 24px 0 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      },
    toolbar : {
        height: '10px',
        '@media (max-width: 872px)' : {
            height: '80px'
          },
        '@media (max-width: 500px)' : {
            display: 'none',
        },
        width: '90%'
    },
    divImage: {
        width: '60%',
        '@media (max-width: 872px)' : {
            width: '60%'
          },
        margin: '0 auto'
    },
    img: {
        width: '100%',
        boxShadow: '0 0 10px'
      },
    caroussel: {
        width: '80%',
        display: 'flex',
        overflow: 'hidden',
    },
    product: {
        width: '33%'
    },
    ul: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '7rem',
        margin: '0',
        fontSize: '1rem',
        fontWeight: 'bolder',
        position: 'absolute',
        paddingInline: 'inherit'
    },
    ul_title: {
        fontSize: '1rem',
        cursor: 'pointer',
        padding: '0.5rem',
        border: '1px solid black'
    },
    liContainer: {
        transition: '0.5s ease',
        transform: 'translateX(-200%)'  
    },
    liClicked: {
        transform: 'translateX(0%)'
    },
    li: {
        borderRadius: '4px',
        backgroundColor: 'lightCoral',
        color: 'white',
        fontWeight: 'lighter',
        marginBottom: '2rem'
    },
    cross: {
        position: 'absolute',
        top: '110px',
        right: '50px',
        width: '30px',
        height: '30px',
        backgroundColor: 'lightCoral',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',

        '@media (max-width: 500px)' : {
            top: '70px',
            right: '25px'
        },
    },
    crossLeft: {
        width: '3px',
        height: '60%',
        backgroundColor: 'white',
        transform: 'rotate(45deg)',
        position: 'absolute'
    },
    crossRight: {
        width: '3px',
        height: '60%',
        backgroundColor: 'white',
        transform: 'rotate(-45deg)',
        position: 'absolute'
    }
}));
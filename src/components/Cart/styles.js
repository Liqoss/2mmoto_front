import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 599px)' : {
      flexDirection: 'column'
    },
    margin: '5% 0',
    width: '100%',
    justifyContent: 'space-between',
  },
  cartButton: {
    '@media (max-width: 599px)' : {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  h1: {
    textAlign: 'center',
    paddingTop: '5rem'
  }
}));

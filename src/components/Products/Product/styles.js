import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    zIndex: '1',
    overflow: 'inherit'
  },
  divImage: {
    height: '30rem',
    width: '100%',
    overflow: 'hidden'
  },
  media: {
    height: '30rem',
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain'
  },
  divSlide: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'lightCoral',
    cursor: 'pointer',
    border: '1px solid white',
    color: 'white',
    '&:hover': {
      backgroundColor: 'hsl(0,78.9%,68.2%)'
    }
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  h2: {
    fontSize: '1.2rem',
    fontFamily: 'typo',
    fontWeight: 'bolder'
  },
  sizeContainer: {
    display: 'flex',
  },
  size: {
    marginRight: '0.5rem',
    padding: '0.5rem',
    borderRadius: '12px',
    '&:hover': {
      backgroundColor:'lightgrey',
      cursor: 'pointer'
    }
  },
  iconCart: {
    color: 'lightcoral'
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
    '&:hover $dropdownContent': {
      display: 'block',
    }
  },
  dropbtn: {
    backgroundColor: 'lightcoral',
    color: 'white',
    padding: '0.5rem',
    marginTop: '0.3rem',
    border: 'inherit',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'hsl(0,78.9%,68.2%)',
    },
    '&:focus': {
      backgroundColor: 'hsl(0,78.9%,68.2%)'
    }
  },
  dropdownContent: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f1f1f1',
    minWidth: '160px',
    overflow: 'auto',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '2',
  }
}));

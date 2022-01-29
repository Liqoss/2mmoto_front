import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  toolbar2: {
    minHeight : '30px',
    width: '100%'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  label: {
    padding: '1rem 0'
  },
  select: {
    margin: '0.5rem'
  },
  h1: {
    borderBottom: '1px solid black',
    textAlign: 'center',
    padding: '1rem 1rem 0.3rem',
    width: 'fit-content',
    margin: '0 auto 3rem',
    fontSize: '2rem'
  }
}));

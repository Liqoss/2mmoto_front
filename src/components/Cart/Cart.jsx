import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const makePayment = token => {
    const body = {
      token, cart
    }
    const headers = {
      'Content-Type': 'application/json'
    }
    return fetch(`https://motoback.herokuapp.com/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    .then(response => {
      const { status } = response;
      localStorage.clear()
      window.location = '/Thanks'
    })
    .catch(error => console.log(error))
  }

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">Vous n'avez pas d'article dans votre panier,
      <Link className={classes.link} to="/"> commencez à en ajouter !</Link>
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} md={4} sm={6} lg={3} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails} xs={12} sm={6}>
        <h2>Total: {cart.subtotal.formatted}€</h2>
        <div className={classes.cartButton}>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Vider le panier</Button>
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
            token={makePayment}
            name='Valider le panier'
            currency='EUR'
            amount={cart.subtotal.raw * 100}
            billingAddress
            >
              <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="primary">CONTINUER</Button>
          </StripeCheckout>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <Grid>
        <div className={classes.toolbar} />
        <h1 className={classes.h1}>Votre Panier (seulement en Click{'&'}Collect)</h1>
      </Grid>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;

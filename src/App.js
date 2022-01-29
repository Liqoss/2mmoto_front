import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Navbar, Products, Cart, Thanks, Home, Legal, Contact } from './components';
import { commerce } from './lib/commerce';

import './style.css';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list({limit : '200'});
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ height : '100vh' }}>
        <CssBaseline />
        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/products">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty/>
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route exact path='/thanks'>
            <Thanks />
          </Route>
          <Route exact path='/mentions-legales'>
            <Legal />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <footer>
          <ul>
            <li>© 2021 | 2m Moto | Tous droits réservés</li>
            <li><Link to='/mentions-legales'>Mentions légales</Link></li>
            <li><Link to='/contact'>Contactez-nous</Link></li>
          </ul>
        </footer>
      </div>
    </Router>
  );
};

export default App;

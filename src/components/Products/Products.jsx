import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  let slug = window.location.search.substr('5');
  let filt = products.filter(product => product.categories[0].slug === slug)
  
  if (slug === ''){
    filt = products;
    slug = 'produit';
  }
  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.toolbar2} />
      <h1 className={classes.h1}>Nos {slug}s !</h1>
      <Grid container justify="center" spacing={4}>
        {filt.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;


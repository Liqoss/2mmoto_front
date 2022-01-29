import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const [variant, setVariant] = useState({name : ''});
  const [variantId, setVariantId] = useState('');
  const classes = useStyles();

  const variantOfProduct = async () => {
    await product.variant_groups[0].id
    setVariantId(product.variant_groups[0].id)
  }

  const handleAddToCart = () => onAddToCart(product.id, 1, {
    variantId : variant.id,
  });

  let url = product.media.source;
  if(product.assets.length > 1) url = product.assets[0].url
  let url2 = product.media.source
  if(product.assets.length > 1) url2 = product.assets[1].url
  
  const handlePreviousImage = () =>{
    if (product.assets.length > 1){
      const img1 = document.getElementById(url);
      const img2 = document.getElementById(url2);
      img1.style.transform = 'translateY(0)';
      img1.style.transition = '0.5s ease';
      img2.style.transform = 'translateY(0)';
      img2.style.transition = '0.5s ease';
    }
  }

  const handleNextImage = () =>{
    if (product.assets.length > 1){
      const img1 = document.getElementById(url);
      const img2 = document.getElementById(url2);
      img1.style.transform = 'translateY(-100%)';
      img1.style.transition = '0.5s ease';
      img2.style.transform = 'translateY(-100%)';
      img2.style.transition = '0.5s ease';
    }
  }

  const handleVariant = () => {
    if (product.variant_groups.length > 0){ 
      return <div className={classes.dropdown}>
        <button onclick="myFunction()" id='dropbtn' className={classes.dropbtn}>Choisir une taille :</button>
        <div id="myDropdown" className={classes.dropdownContent}>
          {product.variant_groups[0].options.map((variant) => (
          <p key={variant.name} id={variant.id} className={classes.size} onClick={((e) => handleVariantChoose(e))}>{variant.name}</p>
          ))}
        </div>
      </div>
    }
  }

  const handleVariantChoose = (e) =>{
      setVariant({id : e.target.id, name : e.target.innerHTML})
      variantOfProduct()
      localStorage.setItem(product.name, e.target.innerHTML)
      e.target.innerHTML = e.target.innerHTML
  }

  const slideButton = () =>{
    if(product.assets.length > 1){
      return <div className={classes.divSlide}><button className={classes.button} onClick={handlePreviousImage}>{'<'}</button><button className={classes.button} onClick={handleNextImage}>{'>'}</button></div>
    }
  }

  return (
    <Card className={classes.root}>
      <div className={classes.divImage}>
        <CardMedia id={url} className={classes.media} image={url} title={product.name} />
        <CardMedia id={url2} className={classes.media} image={url2} title={product.name} />
      </div>
      {slideButton()}
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom className={classes.h2} component="h2">
            {product.name + ' ' + variant.name}
          </Typography>
          <Typography gutterBottom className={classes.h2} component="h2">
            {product.price.formatted}€
          </Typography>
        </div>
        <div className={classes.sizeContainer}>
          {handleVariant()} 
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart} className={classes.iconCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;


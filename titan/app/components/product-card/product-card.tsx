import React from 'react'
import AddToCart from '../add-to-cart/add-to-cart'
import styles from './product-card.module.css';

const ProductCard  = () => {
  return (
    <div className={styles.card}>
       <AddToCart />
    </div>
  )
}

export default ProductCard

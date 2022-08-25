import styles from '../styles/ProductCards.module.css';
import Image from 'next/image';

const ProductCards = () => {
  return (
    <div className={styles.container}>
        <Image src='/img/product.png' alt='' width='500' height='500' />
        <h1 className={styles.title}>FIORI DI ZUCCA</h1>
        <span className={styles.price}>N1900</span>
        <p className={styles.desc}>
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        </p>
    </div>
  )
}

export default ProductCards
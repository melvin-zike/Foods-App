import styles from '../styles/ProductList.module.css'
import ProductCards from './ProductCards'

const ProductList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>FOOD DEY YOUR DOMOT</h1>
        <p className={styles.desc}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        </p>

        <div className={styles.wrapper}>
             <ProductCards />
             <ProductCards />
             <ProductCards />
             <ProductCards />
             <ProductCards />
             <ProductCards />
             <ProductCards />
             <ProductCards />
        </div>
    </div>
  )
}

export default ProductList
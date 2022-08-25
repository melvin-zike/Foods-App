import styles from '../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
            <tr className={styles.tr}>
                <th>Product</th>
                <th>Name</th>
                <th>Extra</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            <tr className={styles.tr}>
                <td>
                    <div className={styles.imgContainer}>
                        <Image 
                        src='/img/product.png' 
                        objectFit='cover' 
                        layout='fill' 
                        alt=''
                         />
                    </div>
                </td>
                <td>
                    <span className={styles.name}>AGEGE BURGER</span>
                </td>
                <td>
                    <span className={styles.extras}>Double ingredient, spice sauce</span>
                </td>
                <td>
                    <span className={styles.price}>N1900</span>
                </td>
                <td>
                    <span className={styles.quantity}>2</span>
                </td>
                <td>
                    <span className={styles.total}>N3800</span>
                </td>
                
            </tr>
            <tr className={styles.tr}>
                <td>
                    <div className={styles.imgContainer}>
                        <Image 
                        src='/img/product.png' 
                        objectFit='cover' 
                        layout='fill' 
                        alt=''
                         />
                    </div>
                </td>
                <td>
                    <span className={styles.name}>AGEGE BURGER</span>
                </td>
                <td>
                    <span className={styles.extras}>Double ingredient, spice sauce</span>
                </td>
                <td>
                    <span className={styles.price}>N1900</span>
                </td>
                <td>
                    <span className={styles.quantity}>2</span>
                </td>
                <td>
                    <span className={styles.total}>N3800</span>
                </td>
                
            </tr>
            </table>
           
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totaltext}>
                    <b className={styles.totaltextTitle}>Subtotal:</b>N0.00
                </div>
                <div className={styles.totaltext}>
                    <b className={styles.totaltextTitle}>Discount:</b>N0.00
                </div>
                <div className={styles.totaltext}>
                    <b className={styles.totalTextTitle}>Total:</b>N0.00
                </div>
                    <button className={styles.button}>CHECK OUT</button>
            </div>
        </div>
    </div>
  )
}

export default Cart
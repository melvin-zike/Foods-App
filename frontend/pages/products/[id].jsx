import { useState } from 'react';
import styles from '../../styles/Product.module.css';
import Image from 'next/image';

const Product = () => {
const [size, setSize] = useState(0);
    const data = {
        id: 1,
        img: '/img/product.png',
        name: 'Kuspy Creame',
        price: [1900, 750, 9500],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip '
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={data.img} objectFit='contain' alt='' layout='fill' />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{data.name}</h1>
            <p className={styles.desc}>{data.desc}</p>
            <span className={styles.price}>${data.price[size]}</span>
            <h3 className={styles.choose}>Choose You Size</h3>
            <div className={styles.sizes}>
             <div className={styles.size} onClick={() => setSize(0)}>
              <Image src='/img/size.png' className={styles.imgs} layout='fill' alt='' />
              <span className={styles.number}>Small</span>
             </div>
             <div className={styles.size} onClick={() => setSize(1)}>
              <Image src='/img/size.png' layout='fill' alt='' />
              <span className={styles.number}>Medium</span>
             </div>
             <div className={styles.size} onClick={() => setSize(2)}>
              <Image src='/img/size.png' layout='fill' alt='' />
              <span className={styles.number}>Large</span>
             </div>
            </div>
            <h3 className={styles.choose}>Choose Additional Ingredients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input 
                    type='checkbox' 
                    name='double' 
                    id='double'
                    className={styles.checkbox}
                    />
                    <label htmlFor='double'>Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input 
                    type='checkbox' 
                    name='cheese' 
                    id='cheese'
                    className={styles.checkbox}
                    />
                    <label htmlFor='double'>Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input 
                    type='checkbox' 
                    name='garlic' 
                    id='garlic'
                    className={styles.checkbox}
                    />
                    <label htmlFor='double'>Garlic Toppings</label>
                </div>
                <div className={styles.option}>
                    <input 
                    type='checkbox' 
                    name='spicy' 
                    id='spicy'
                    className={styles.checkbox}
                    />
                    <label htmlFor='double'>Spicy Toppings</label>
                </div>

            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button}>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product
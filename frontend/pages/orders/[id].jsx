import { useState } from 'react';
import styles from '../../styles/Order.module.css';
import Image from 'next/image';

const Order = () => {
  const status =0;

  const statusClass = (index) => {
    if(index - status < 1) return styles.done;
    if(index - status === 1) return styles.inProgress;
    if(index - status > 1) return styles.undone;
  };



  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
            <tr className={styles.tr}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Number</th>
                <th>Email</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>
                    <span className={styles.id}>12345678987654321</span>
                </td>
                <td>
                    <span className={styles.name}>John Nwanna</span>
                </td>
                <td>
                    <span className={styles.address}>Elton st. 212-33 LA</span>
                </td>
                <td>
                    <span className={styles.number}>09123457653</span>
                </td>
                <td>
                    <span className={styles.email}>john@email.com</span>
                </td>
                <td>
                    <span className={styles.total}>N3800</span>
                </td>
                
            </tr>
          
            </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image alt='/img/paid.png' width={30} height={30} />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image alt='' className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} />
                    </div>

                </div>
                <div className={statusClass(1)}>
                    <Image alt='/img/bake.png' width={30} height={30} />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image alt='' className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} />
                    </div>

                </div>
                <div className={statusClass(2)}>
                    <Image alt='/img/bike.png' width={30} height={30} />
                    <span>On The Way</span>
                    <div className={styles.checkedIcon}>
                        <Image alt='' className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} />
                    </div>

                </div>
                <div className={statusClass(3)}>
                    <Image alt='/img/delivered.png' width={30} height={30} />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image alt='' className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} />
                    </div>

                </div>
            </div>
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
                    <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
    </div>
  )
}

export default Order
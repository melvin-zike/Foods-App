import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
   <div className={styles.item}>
    <Image src='/img/footimage.jpg' layout='fill' alt='' />
   </div>
   <div className={styles.item}>
     <div className={styles.card}>
      <h2 className={styles.motto}>
        HOME MADE MEALS AT YOUR FINGERTIPS
      </h2>

      <form className={styles.forms}>
        <h2 className={styles.formtext}>Join Our Newsletter</h2>
        <input type="text" placeholder='Name' className={styles.formInput}/>
        <input type="email" placeholder='Email' className={styles.formInput}/>
        <button className={styles.formButton}>SUBSCRIBE</button>
      </form>
     </div>

     <div className={styles.card}>
     <h1 className={styles.title}>
        PLACE AN ORDER TODAY
      </h1>
      <p className={styles.text}>
        Gbagada Lagos...
        <br /> Lagos, 10012
        <br /> (+234) 37954752
      </p>
      <p className={styles.text}>
        Gbagada Lagos...
        <br /> Lagos, 10012
        <br /> (+234) 37954752
      </p>
      <p className={styles.text}>
        Gbagada Lagos...
        <br /> Lagos, 10012
        <br /> (+234) 37954752
      </p>
      <p className={styles.text}>
        Gbagada Lagos...
        <br /> Lagos, 10012
        <br /> (+234) 37954752
      </p>
     </div>
     <div className={styles.card}>
     <h1 className={styles.title}>WORKING HOURS</h1>
     <p className={styles.text}>
        MONDAY UNTIL SATURDAY
        <br /> 9:00 - 24:00 
      </p>
     <p className={styles.text}>
        SATURDAY - SUNDAY
        <br /> 12:00 - 24:00
        
      </p>

      <Image src="/img/payment.png" alt='' width='400' height='50px'/>
     </div>
   </div>

    </div>
  )
}

export default Footer
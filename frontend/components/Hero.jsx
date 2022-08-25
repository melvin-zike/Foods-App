import styles from '../styles/Hero.module.css'
import { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
    const [index, setIndex] = useState(0)

    const images = [
        '/img/featured.jpg',
        '/img/featured1.png',
        '/img/featured2.png',
    ]

    const handleArrow = (direction) => {
   if(direction==='l'){
    setIndex(index !== 0 ? index-1: 2) 
   }
   if(direction==='r'){
    setIndex(index !== 2 ? index+1: 0) 
   }
    }

    console.log(index); 
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}} onClick={() =>handleArrow('l')}>
        <Image src='/img/arrowleft.png' alt='' layout='fill' objectFit='contain' />
        </div>
        
        <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
            {images.map((img, index) => (
               <div className={styles.imgContainer}>               
                 <Image src={img} key={index} alt='' layout='fill' objectFit='contain' />     
               </div>
             ))}
        </div>
        <div className={styles.arrowContainer} style={{right:0}} onClick={() =>handleArrow('r')}>
        <Image src='/img/arrowright.png' alt='' layout='fill' objectFit='contain' />
        </div>
        
    </div>
  )
}

export default Hero
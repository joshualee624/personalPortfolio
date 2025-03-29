import React from 'react'
import styles from './Hero.module.css';
export const Hero = () =>{
    return(
        <section className={styles.container}> 
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Josh!</h1>
                <p className={styles.description}>
                    I am a third year CSE major with a Management Business Economics minor at UC Merced. 
                    Feel free to reach out to me to learn more!
                </p>
                <a href='mailto: joshualee624@gmail.com' className={styles.contactBtn}>Contact Me</a>
            </div>
            <div className={styles.picWrapper}>
                <img className={styles.profPic} src='/assets/hero/picofme.png' alt='Image of me'/>
            </div>
            
        </section>
    );
}
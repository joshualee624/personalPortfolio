import React from 'react';
import styles from './About.module.css';

export const About = ()=> {
    return(
        <section className={styles.container} id= 'about'> 
            <div className={styles.layout}>
                <h2 className={styles.title}>More About Me</h2>
                <p className={styles.description}>I’m a third-year Computer Science and Engineering major at UC Merced with a minor 
                    in Management and Business Economics. I’m passionate about tech — from software development 
                    and cybersecurity to networks — and I’m always eager to explore new tools, frameworks, and concepts. 
                    Few things are more rewarding than seeing lines of code come to life as a fully functioning application.
                    Outside of class, I enjoy working out, golfing, and meeting new people. 
                    I’m also part of Sigma Chi’s Lambda Delta chapter, where I currently serve as Public Relations Chairman
                     — a role that’s sharpened my leadership, communication, and creative skills.
                    I’m always open to opportunities, collaborations, or conversations — feel free to reach out!
                </p>
            </div>

        </section>

    );
}

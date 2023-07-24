import React from 'react';
import styles from './Unleash.module.css';
import unleashImage from '../../assets/unleashImage.svg';
import fire from '../../assets/fire.svg';
import useResponsive from '../../hooks/useResponsive';

const Unleash = () => {
    const { isMobile } = useResponsive();

    return (
        <div className={isMobile ? styles.mobileContainer : styles.container}>
            <div className={styles.unleashContent}>
                <div className={styles.fireFuture}>
                    <img src={fire} alt={"fire"} style={{width:"32px", height:"32px"}}/>
                    <h3>Future of esports</h3>
                </div>
                <h1>
                    Unleash The Next <span className={styles.highlight}>Generation</span> Of Gaming
                </h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque</h5>
                <div className={styles.buttonView}>
                    <button>Explore More</button>
                    <h5>View our team</h5>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.bottomImage} src={unleashImage} alt="worrier" />
            </div>
        </div>
    );
};

export default Unleash;

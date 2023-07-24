import React from 'react';
import styles from './Header.module.css';
import logo from "../../assets/logo.svg";
import chart from "../../assets/chart.svg";
import chartRound from "../../assets/chartRound.svg";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={styles.menuContainer}>
                    <a>Home</a>
                    <a>About</a>
                    <a>Team</a>
                    <a>Shop</a>
                    <a>Pages</a>
                </div>
<div className={styles.chartAndButton}>


                <div className={styles.chartContainer}>
                    <span className={styles.chart}><img src={chart} alt="chart"/></span>
                    <span className={styles.round}><img src={chartRound} alt="round"/></span>
                </div>


                <button>Contact Us</button>
            </div>

            </div>

        </div>
    );
};

export default Header;

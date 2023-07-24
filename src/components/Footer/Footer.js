import React from 'react';
import styles from "./Footer.module.css"
import logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContent}>
                <div className={styles.firstColumn}>
                    <img src={logo} alt="logo"/>
                    <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</p>
                </div>

                <div className={styles.column}>
                    <h3>Menu Items</h3>

                   <div className={styles.containerList}>

                           <p>About</p>
                           <p>Blog</p>
                           <p>Shop</p>
                           <p>Contact Us</p>

                   </div>
                </div>
                <div className={styles.column}>
                    <h3>Other Pages</h3>

                    <div className={styles.containerList}>

                        <p>Styleguide</p>
                        <p>Changelog</p>
                        <p>Licenses</p>
                        <p>Team</p>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import styles from "./MainPage.module.css"
import Header from '../Header/Header';
import Unleash from "../Unleash/Unleash";
import CustomizePage from "../CustomizePage/CustomizePage";
import LatestNews from "../LatestNews/LatestNews";
import Footer from "../Footer/Footer";

const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blackContainer}>
                <div className={styles.header}>
                    <Header />
                    <Unleash/>
                    <CustomizePage/>
                    <LatestNews/>
                    <Footer/>
                </div>
            </div>
            <div className={styles.blueContainer}></div>
        </div>
    );
};


export default MainPage;

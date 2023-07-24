import React from 'react';
import styles from "./LatestNews.module.css"
import fire from "../../assets/fire.svg";
import leftImg from "../../assets/latestNewsImage.svg";
import {LatestNewsCard} from "../LatestNewsCard/LatestNewsCard";
import {NewsCard} from "../../dataBase";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useResponsive from "../../hooks/useResponsive";

const LatestNews = () => {
    const { isDesktop } = useResponsive();

    return (
        <section className={styles.latestNewsContainer}>
            <div className={styles.topContentContainer}>
                <div className={styles.topLeftSide}>
                    <div className={styles.topLineLeft}>
                        <img src={fire} alt={"fire"} style={{width:"32px", height:"32px"}}/>
                        <h3>Future of esports</h3>
                    </div>
                    {isDesktop ?
                        <h1>Latest News & Articles</h1> :
                        <h1>Latest<br />News &<br />Articles</h1>
                    }
                </div>

                <div className={styles.rightSide}>
                    <button>Read More</button>
                </div>
            </div>

            <div className={styles.bottomContent}>
                <div className={styles.bottomLeftSide}>
                    <div className={styles.image}>
                        <img src={leftImg} alt={"fire"}/>
                    </div>
                    <div className={styles.captions}>
                        <h4>April 2, 2021</h4>
                        <h3>Esports Group Teams Up With The Indianapolis Colts</h3>
                    </div>
                </div>
                <div className={styles.bottomRightSide}>
                    {isDesktop ?
                        NewsCard.map((card, index) => (
                            <LatestNewsCard key={index} image={card.image} date={card.date} title={card.title} />
                        ))
                        :
                        (<Swiper slidesPerView={'auto'} spaceBetween={10}>
                            {NewsCard.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <LatestNewsCard image={card.image} date={card.date} title={card.title} />
                                </SwiperSlide>
                            ))}
                        </Swiper>)
                    }
                </div>
            </div>
        </section>
    );
};

export default LatestNews;

import React from 'react';
import CustomizeImg from "../../assets/customizeImage.svg"
import styles from "./CustomizePage.module.css"
import fire from "../../assets/fire.svg";
import card1 from "../../assets/customizeCard_1.svg"
import card2 from "../../assets/customizeCard_2.svg"
import card3 from "../../assets/customizeCard_3.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useResponsive from "../../hooks/useResponsive";

const CustomizePage = () => {
    const { isDesktop } = useResponsive();

    const cards = [
        { src: card1, alt: "card1" },
        { src: card2, alt: "card2" },
        { src: card3, alt: "card3" },
    ];

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <img className={styles.image} src={CustomizeImg}/>
                <div className={styles.rightContent}>
                    <div className={styles.fireText}>
                        <img style={{width: "32px", height: "32px"}} src={fire} alt={"fire"}/>
                        <h3>Future of esports</h3>
                    </div>
                    <h1>
                        Customize Your Own Character
                    </h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                    </p>
                    <div className={styles.cards}>
                        {isDesktop ?
                            cards.map((card, index) => (
                                <img key={index} src={card.src} alt={card.alt}/>
                            ))
                            :
                            (<Swiper slidesPerView={'auto'} spaceBetween={0}>
                                {cards.map((card, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={card.src} alt={card.alt}/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomizePage;

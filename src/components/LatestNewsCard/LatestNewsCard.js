import React from 'react';
import styles from "./LatestNewsCard.module.css"

export const LatestNewsCard = ({image, date, title}) => {
    return (
        <div className={styles.card}>
            {<img src={image} alt={"card"}/>}
            <h3>{date}</h3>
            <p>{title}</p>
        </div>

    );
};


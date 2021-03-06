import React from "react";
import styles from "./style.module.scss";

const RecruitmentCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.box}>
        <div className={styles.recruitmentName}>募集名の変更</div>
        <div className={styles.companyName}>株式会社SIMULA</div>
      </div>
    </div>
  );
};

export default RecruitmentCard;

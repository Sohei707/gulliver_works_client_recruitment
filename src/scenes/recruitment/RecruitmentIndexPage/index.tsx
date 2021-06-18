import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import RecruitmentCard from "../../../components/RecruitmentCard";

const RecruitmentIndexPage = () => {
  return (
    <div className={styles.text}>
      全ての募集
      <Link to="/sign_in">ログインしてください！！！</Link>
      <RecruitmentCard />
    </div>
  );
};

export default RecruitmentIndexPage;

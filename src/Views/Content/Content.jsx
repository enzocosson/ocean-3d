import React from "react";
import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.main}>
      <img className={styles.background} src="./images/background.jpg" alt="" />
      <h1>Content</h1>
    </div>
  );
}

export default Content;

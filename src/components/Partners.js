import React from "react";
import styles from "./Partners.module.css";

function Partners() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <span className={styles.line}></span>
          <h2>Our Business Partners</h2>
          <span className={styles.line}></span>
        </div>

        <div className={styles.logoBox}>
          <img src="/assets/google.png" alt="Google Partner" />
          <img src="/assets/meta.png" alt="Meta Partner" />
          <img src="/assets/shopify.png" alt="Shopify" />
          <img src="/assets/hubspot.png" alt="HubSpot" />
        </div>
      </div>
    </section>
  );
}

export default Partners;

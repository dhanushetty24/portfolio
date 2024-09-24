// components/Experience.tsx
import React from 'react';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>

      {/* ESZMELETLEN HOLDING CO */}
      <div className={styles.experienceBlock}>
        <h3 className={styles.jobTitle}>Software Developer</h3>
        <p className={styles.companyName}>ESZMELETLEN HOLDING CO | Oct 2021 - Oct 2022</p>
        <ul className={styles.jobDetails}>
          <li>Contributed to the development of a NestJs and ReactJs-based Interactive Form Builder from scratch, delivering a seamless user interface and robust backend functionality.</li>
          <li>Developed and integrated a custom service using Google Translate API for automating translations across the entire frontend website, streamlining multilingual support</li>
          <li>Implemented email integrations with services like Mailgun, SendGrid, and Sendinblue in a custom Email Builder project.</li>
          <li>Integrated third-party services such as Zapier, Slack, and Notion.</li>
          <li>Built core features like domain creation, audit logs, and webhooks using Clickhouse for querying large datasets.</li>
        </ul>
      </div>

      {/* PRDXN */}
      <div className={styles.experienceBlock}>
        <h3 className={styles.jobTitle}>Web Developer</h3>
        <p className={styles.companyName}>PRDXN | Aug 2019 - Sep 2021</p>
        <ul className={styles.jobDetails}>
          <li>Developed API solutions for eCommerce retailers, integrating ClearForMe’s product database.</li>
          <li>Worked with Express.Js and Mongoose ODM to Handle interactions with MongoDB collections</li>
          <li>Proficiently utilized Google Cloud services,Cloud Functions and deploying projects on Google Cloud Engine.</li>
          <li>Created NFS-logs from scratch, similar to browser lighthouse, for analyzing user interactions.</li>
          <li>Worked with Express.Js and Sequelize ORM to handle large amounts of user interaction data.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

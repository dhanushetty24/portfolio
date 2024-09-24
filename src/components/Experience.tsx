// components/Experience.tsx
import { useState } from 'react';
import styles from '../styles/Experience.module.css';

interface ExperienceProps {
  companyName: string;
  jobTitle: string;
  jobDetails: string[];
  duration: string;
}

const experiences: ExperienceProps[] = [
  {
    companyName: 'ESZMELETLEN HOLDING CO',
    jobTitle: 'Software Developer',
    jobDetails: [
      'Contributed to the development of a NestJs and ReactJs-based Interactive Form Builder from scratch, delivering a seamless user interface and robust backend functionality.',
      'Developed and integrated a custom service using Google Translate API for automating translations across the entire frontend website, streamlining multilingual support.',
      'Implemented email integrations with services like Mailgun, SendGrid, and Sendinblue in a custom Email Builder project.',
      'Integrated third-party services such as Zapier, Slack, and Notion.',
      'Built core features like domain creation, audit logs, and webhooks using Clickhouse for querying large datasets.',
    ],
    duration: 'Oct 2021 - Oct 2022',
  },
  {
    companyName: 'axioned.',
    jobTitle: 'Web Developer',
    jobDetails: [
      'Developed API solutions for eCommerce retailers, integrating ClearForMe’s product database.',
      'Worked with Express.Js and Mongoose ODM to handle interactions with MongoDB collections.',
      'Proficiently utilized Google Cloud services, Cloud Functions, and deployed projects on Google Cloud Engine.',
      'Created NFS-logs from scratch, similar to browser lighthouse, for analyzing user interactions.',
      'Worked with Express.Js and Sequelize ORM to handle large amounts of user interaction data.',
    ],
    duration: 'Aug 2019 - Sep 2021',
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceProps | null>(null);

  const openModal = (experience: ExperienceProps) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>
      <div className={styles.cardContainer}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <h3>{exp.jobTitle}</h3>
            <button className={`button ${styles.readMoreButton}`} onClick={() => openModal(exp)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {selectedExperience && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedExperience.companyName}</h3>
            <p>{selectedExperience.jobTitle}</p>
            <p>{selectedExperience.duration}</p>
            <ul className={styles.jobDetails}>
              {selectedExperience.jobDetails.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;

// components/Experience.tsx
import { useState } from 'react';
import styles from '../styles/Experience.module.css';
import Image from 'next/image';

interface ExperienceProps {
  companyName: string;
  jobTitle: string;
  jobDetails: string[];
  duration: string;
  logo: string;
}

const experiences: ExperienceProps[] = [
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
    logo: '/axioned.jpg'
  },
  {
    companyName: 'Eszmeletlen Holding Co.',
    jobTitle: 'Software Developer',
    jobDetails: [
      'Contributed to the development of a NestJs and ReactJs-based Interactive Form Builder from scratch, delivering a seamless user interface and robust backend functionality.',
      'Developed and integrated a custom service using Google Translate API for automating translations across the entire frontend website, streamlining multilingual support.',
      'Implemented email integrations with services like Mailgun, SendGrid, and Sendinblue in a custom Email Builder project.',
      'Integrated third-party services such as Zapier, Slack, and Notion.',
      'Built core features like domain creation, audit logs, and webhooks using Clickhouse for querying large datasets.',
    ],
    duration: 'Oct 2021 - Oct 2022',
    logo: '/eszmeletlen.jpeg'

  },
  {
    companyName: 'CitiusTech',
    jobTitle: 'Sr.Software Developer',
    jobDetails: [
      'Contributed to the development of a NestJs and ReactJs-based interactive website, utilizing GraphQL for efficient API management, and delivering a seamless user interface and robust backend functionality for end-users.',
      'Maintained backend automation processes, including AMI updates, ensuring smooth and efficient deployments.',
      'Collaborated on the migration of frontend services to ReactJS using TypeScript, enhancing the system\'s performance and scalability.',
      'Created and updated multiple APIs to support the migration process.',
      'Contributed to the creation of microservices using NextJs, helping to develop scalable and modular systems.',
    ],
    duration: 'Oct 2022 - Present',
    logo: '/citiustech.png'
  }
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
            <div className={`imageWrapper ${styles.companysLogo}`}>
              <Image
              src= {exp.logo }
              alt= 'company logo'
              objectFit="cover"
              width={200}
              height={120}/>
            </div>
            <h3>{exp.companyName}</h3>
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

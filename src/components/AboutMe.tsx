import styles from '../styles/AboutMe.module.css';
import SkillsSection from '@/components/SkillsSection'

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.left}>
          <p>
            I'm a <strong>Backend Developer</strong> with 5 years of experience in designing
            REST APIs and backend systems using <strong>Node.js</strong> and <strong>TypeScript</strong>.
            I am also proficient with frontend technologies such as <strong>React</strong>.
          </p>
          <p>
            My goal is to build performant and scalable systems that improve user experience and
            contribute to business growth. Check out my projects to see the work I’ve done.
          </p>
        </div>
        <SkillsSection custom = {styles}/>
      </div>
    </section>
  );
};

export default AboutMe;

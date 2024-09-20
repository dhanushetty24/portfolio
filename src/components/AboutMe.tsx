import styles from '../styles/AboutMe.module.css';
import SkillsSection from '@/components/SkillsSection'

const AboutMe: React.FC = () => {
  return (
    <section id= 'about' className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div className={styles.left}>
          <h2>About Me</h2>
          <p>
          I'm a Full Stack Web Developer specializing in crafting scalable, high-performance applications. With expertise in backend technologies like ExpressJs, NestJs, and NodeJs, I build robust APIs and server-side logic. My database skills span MongoDB and MySQL, ensuring data is structured and efficient. On the frontend, I bring ideas to life with ReactJs and NextJs, delivering seamless and dynamic user experiences. Additionally, as an AWS-certified developer, I leverage cloud services to make applications scalable, secure, and ready for the future. Whether it's the backend, frontend, or cloud, I've got it covered!
          </p>
        </div>
        <SkillsSection custom = {styles}/>
      </div>
    </section>
  );
};

export default AboutMe;

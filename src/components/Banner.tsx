import styles from'../styles/Banner.module.css';

const Banner: React.FC =() => {
  return (
    <main className="container">
        <section className={styles.bannerSection}>
          <h1>Hey, I'm Dhanush Shetty</h1>
          <p>Node.js Backend Developer with 5+ years of experience in building REST APIs using JavaScript and TypeScript, proficient in React.js, and AWS certified to create scalable cloud-native applications.</p>
        </section>
      </main>
  );
};

export default Banner;
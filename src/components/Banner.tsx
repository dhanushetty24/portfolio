import styles from'../styles/Banner.module.css';

const Banner: React.FC =() => {
  return (
    <section className={styles.container}>
      <div className= {styles.bannerSection}>
        <h2>Hey There! I'm Dhanush Shetty <span className={styles.wobble}>✌🏻</span></h2>
        <p>Turning coffee into code! Full Stack Developer with a Backend brain, Frontend flair, and an AWS badge of honor.</p>
      </div>
        <div className={styles.scroll}>
          <div className={styles.scrollIndicator}></div>
        </div>
    </section>
  );
};

export default Banner;
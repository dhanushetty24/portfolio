import styles from '../styles/Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.svgStyle}>
        <svg className={styles.svgDimentions}>
          <circle
            cx='20'
            cy='20'
            r=' 18'
            stroke-width='2'
            stroke='#fff'
            fill='none'
            stroke-dasharray='60 120'
            stroke-dashoffset='0'
          >
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='0 20 20'
              to='360 20 20'
              dur='1s'
              repeatCount='indefinite'
            />
          </circle>
        </svg>
      </div>
      <p className={styles.message}>Building something amazing... The best is yet to come!...</p>
    </div>
  );
};

export default Loading;

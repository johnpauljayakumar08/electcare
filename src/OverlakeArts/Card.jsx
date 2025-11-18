import styles from './style.module.scss';

const Card = ({ title, description, src, url, color, i }) => {
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.card}
        style={{ 
         
          top: `calc(-5vh + ${i * 15}px)`,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h2 className={`${styles.title} font-bold text-xl`}>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
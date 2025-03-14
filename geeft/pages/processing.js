import styles from '../styles/Processing.module.css'; // Import the existing CSS file
import Image from 'next/image';

export default function Processing() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>        
      </header>
      <main className={styles.main}>
        <div className={styles.card}>
          <Image src="/assets/processing.gif" alt="Processing Icon" width={150} height={150} />
          <p>Your request is being processed. Please wait...</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Gift Card Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

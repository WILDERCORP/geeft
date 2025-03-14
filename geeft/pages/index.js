"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css'; // Import the existing CSS file

const giftCardProviders = [
  { id: 'amazon', name: "Amazon", query: "amazon gift card", imageUrl: "/assets/amazon.jpeg" },
  { id: 'visa', name: "Visa", query: "visa gift card", imageUrl: "/assets/visa.png" },
  { id: 'mastercard', name: "Mastercard", query: "mastercard gift card", imageUrl: "/assets/mastercard.jpeg" },
  { id: 'walmart', name: "Walmart", query: "walmart gift card", imageUrl: "/assets/walmart.jpeg" },
  { id: 'target', name: "Target", query: "target gift card", imageUrl: "/assets/target.jpeg" },
  { id: 'starbucks', name: "Starbucks", query: "starbucks gift card", imageUrl: "/assets/starbucks.png" },
  { id: 'apple', name: "Apple", query: "apple gift card", imageUrl: "/assets/apple.jpeg" },
  { id: 'googleplay', name: "Google Play", query: "google play gift card", imageUrl: "/assets/googleplay.png" },
  { id: 'bestbuy', name: "Best Buy", query: "best buy gift card", imageUrl: "/assets/bestbuy.jpeg" },
  { id: 'homedepot', name: "Home Depot", query: "home depot gift card", imageUrl: "/assets/homedepot.jpeg" },
  { id: 'sephora', name: "Sephora", query: "sephora gift card", imageUrl: "/assets/sephora.jpg" },
];

const additionalGiftCardProviders = [
  { id: 'nike', name: "Nike", query: "nike gift card", imageUrl: "/assets/nike.jpeg" },
  { id: 'adidas', name: "Adidas", query: "adidas gift card", imageUrl: "/assets/adidas.png" },
  { id: 'bathandbodyworks', name: "Bath & Body Works", query: "bath and body works gift card", imageUrl: "/assets/bathandbodyworks.jpeg" },
  { id: 'lowes', name: "Lowe's", query: "lowes gift card", imageUrl: "/assets/lowes.jpeg" },
  { id: 'gamestop', name: "GameStop", query: "gamestop gift card", imageUrl: "/assets/gamestop.jpeg" },
  { id: 'uber', name: "Uber", query: "uber gift card", imageUrl: "/assets/uber.webp" },
  { id: 'netflix', name: "Netflix", query: "netflix gift card", imageUrl: "/assets/netflix.png" },
  { id: 'disney', name: "Disney", query: "disney gift card", imageUrl: "/assets/disney.jpeg" },
  { id: 'chilis', name: "Razorgold", query: "razorgold gift card", imageUrl: "/assets/razorgold.jpeg" },
  { id: 'kroger', name: "Kroger", query: "kroger gift card", imageUrl: "/assets/kroger.jpeg" },
];

export default function Index() {
  const [giftCards] = useState(giftCardProviders);
  const [showMore, setShowMore] = useState(false);

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`${styles.container} ${styles.root}`}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Image src="/assets/cart.jpeg" alt="Cart Logo" width={40} height={40} />
          <h1>Gift Card Hub</h1>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.onboarding}>
         
        </section>
        <section className={styles.giftCardsSection}>
          <h2 className={styles.heading}>Popular Gift Cards in the United States</h2>
          <div className={styles.giftCardFlex}>
            {giftCards.map((card) => (
              <Link key={card.id} href={`/giftcard/${card.id}`} className={styles.giftCard}>
                <Image
                  src={card.imageUrl}
                  alt={`${card.name} Gift Card`}
                  width={200}
                  height={120}
                />
                <p>{card.name}</p>
              </Link>
            ))}
          </div>
          {showMore && (
            <div className={`${styles.giftCardFlex} ${styles.additionalGiftCards}`}>
              {additionalGiftCardProviders.map((card) => (
                <Link key={card.id} href={`/giftcard/${card.id}`} className={styles.giftCard}>
                  <Image
                    src={card.imageUrl}
                    alt={`${card.name} Gift Card`}
                    width={200}
                    height={120}
                  />
                  <p>{card.name}</p>
                </Link>
              ))}
            </div>
          )}
          <div className={styles.buttonContainer}>
            <button className={styles.startButton} onClick={handleToggleMore}>
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Gift Card Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

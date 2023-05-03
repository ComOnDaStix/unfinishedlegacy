import { useState, useEffect } from "react";
import styles from "../styles/Banner.module.css";
import Image from "next/image";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoChange, setAutoChange] = useState(true);
  const images = [
    "/images/bannerimg.webp",
    "/images/bannerimg2.webp",
    "/images/bannerimg.webp",
    "/images/bannerimg2.webp",
  ];

  useEffect(() => {
    if (autoChange) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoChange, activeIndex]);

  const nextSlide = () => {
    setAutoChange(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setAutoChange(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.carousel}>
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            className={`${styles.banner} ${index === activeIndex ? styles.active : ""}`}
            width={2000}
            height={1000}
          />
        ))}
      </div>
      <button className={styles.arrowLeft} onClick={prevSlide}>&#10094;</button>
      <button className={styles.arrowRight} onClick={nextSlide}>&#10095;</button>
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
import styles from "../styles/SlidingMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SlidingMenu = ({ isOpen }) => {
  const [dropdownOpen, setDropDownOpen] = useState({
    shop: false,
    articles: false,
    lookbook: false,
    youtube: false,
    storeInformation: false,
  });

  const toggleDropdown = (link) => {
    setDropDownOpen((prevState) => ({
      ...prevState,
      [link]: !prevState[link],
    }));
  };

  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.h1}>
        <h1 className={styles.category}>CATEGORYS</h1>
      </div>
      <ul className={styles.container}>
        <li className={styles.linkItem}>
          <Link href={"/"} className={styles.links}>
            <span className={styles.span}>
              SHOP
              <img
                src={"/images/rightarrow.png"}
                className={styles.arrow}
                style={{
                  transform: dropdownOpen.shop
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
                width={15}
                height={15}
                onClick={() => toggleDropdown("shop")}
                alt="Arrow"
              />
            </span>
          </Link>
          {dropdownOpen.shop ? (
            <ul className={`${styles.dropdown} ${styles.show}`}>
              <li className={styles.dropdownItem}>TOPS</li>
              <li className={styles.dropdownItem}>BOTTOMS</li>
              <li className={styles.dropdownItem}>HATS</li>
            </ul>
          ) : (
            <ul className={`${styles.dropdown} ${styles.hide}`}>
              <li className={styles.dropdownItem}>TOPS</li>
              <li className={styles.dropdownItem}>BOTTOMS</li>
              <li className={styles.dropdownItem}>HATS</li>
            </ul>
          )}
        </li>
        <div className={styles.borderBottom}></div>
        <li className={styles.linkItem}>
          <Link href={"/"} className={styles.links}>
            <span className={styles.span}>
              COLLABRATIONS
              <img
                src={"/images/rightarrow.png"}
                className={styles.arrow}
                style={{
                  transform: dropdownOpen.articles
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
                width={15}
                height={15}
                onClick={() => toggleDropdown("articles")}
                alt="Arrow"
              />
            </span>
          </Link>
          {dropdownOpen.articles ? (
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>VOGUE</li>
              <li className={styles.dropdownItem}>LEVIS</li>
              <li className={styles.dropdownItem}>MILWAUKEE BUCKS</li>
              <li className={styles.dropdownItem}>MILWAUKEE JOURNAL</li>
            </ul>
          ) : (
            <ul className={`${styles.dropdown} ${styles.hide}`}>
              <li className={styles.dropdownItem}>VOGUE</li>
              <li className={styles.dropdownItem}>LEVIS</li>
              <li className={styles.dropdownItem}>MILWAUKEE BUCKS</li>
              <li className={styles.dropdownItem}>MILWAUKEE JOURNAL</li>
            </ul>
          )}
        </li>
        <li className={styles.linkItem}>
          <Link href={"/"} className={styles.links}>
            <span className={styles.span}>
              LOOKBOOK
              <img
                src={"/images/rightarrow.png"}
                className={styles.arrow}
                style={{
                  transform: dropdownOpen.lookbook
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
                width={15}
                height={15}
                onClick={() => toggleDropdown("lookbook")}
                alt="Arrow"
              />
            </span>
          </Link>
          {dropdownOpen.lookbook ? (
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>TOPS</li>
              <li className={styles.dropdownItem}>BOTTOMS</li>
              <li className={styles.dropdownItem}>HATS</li>
            </ul>
          ) : (
            <ul className={`${styles.dropdown} ${styles.hide}`}>
              <li className={styles.dropdownItem}>TOPS</li>
              <li className={styles.dropdownItem}>BOTTOMS</li>
              <li className={styles.dropdownItem}>HATS</li>
            </ul>
          )}
        </li>
        <li className={styles.linkItem}>
          <Link href={"/"} className={styles.links}>
            <span className={styles.span}>
              YOUTUBE
              <img
                src={"/images/rightarrow.png"}
                className={styles.arrow}
                style={{
                  transform: dropdownOpen.youtube
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
                width={15}
                height={15}
                onClick={() => toggleDropdown("youtube")}
                alt="Arrow"
              />
            </span>
          </Link>
          {dropdownOpen.youtube ? (
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>TOPS</li>
              <li className={styles.dropdownItem}>BOTTOMS</li>
              <li className={styles.dropdownItem}>HATS</li>
            </ul>
          ) : (
            <ul className={`${styles.dropdown} ${styles.hide}`}>
              <li className={styles.dropdownItem}>TOPS</li>
              <li className={styles.dropdownItem}>BOTTOMS</li>
              <li className={styles.dropdownItem}>HATS</li>
            </ul>
          )}
        </li>
        <li className={styles.linkItem}>
          <Link href={"/"} className={styles.links}>
            <span className={styles.span}>
              STORE INFORMATION
              <img
                src={"/images/rightarrow.png"}
                className={styles.arrow}
                style={{
                  transform: dropdownOpen.storeInformation
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
                width={15}
                height={15}
                onClick={() => toggleDropdown("storeInformation")}
                alt="Arrow"
              />
            </span>
          </Link>
          {dropdownOpen.storeInformation ? (
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>FLAGSHIP</li>
              <li className={styles.dropdownItem}>CONTACT US</li>
            </ul>
          ) : (
            <ul className={`${styles.dropdown} ${styles.hide}`}>
              <li className={styles.dropdownItem}>FLAGSHIP</li>
              <li className={styles.dropdownItem}>CONTACT US</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SlidingMenu;

import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import SlidingMenu from "./SlidingMenu";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 0;
      setScrolled(isScrolled);
    };
    

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  return (
    <div  className={`${styles.Navbar} ${scrolled ? styles.scrolled : ""}`}>
      
      <div className={styles.container}>
      <SlidingMenu isOpen={menuOpen} />
      <div
          className={styles.burgerMenu}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.logoContainer}>
        <Image src={"/images/logo.webp"} width={170} height={50} className={styles.logo} />
        </div>
        <ul className={styles.listItems}>
          <Link href={"/"} className={styles.link}>
            <li className={styles.listItem}>
              <span className={styles.link}>SHOP</span>
            </li>
          </Link>
          <Link href={"/"} className={styles.link}>
            <li className={styles.listItem}>
              <span className={styles.link}>ARTICLES</span>
            </li>
          </Link>
          <Link href={"/"} className={styles.link}>
            <li className={styles.listItem}>
              <span className={styles.link}>LOOKBOOK</span>
            </li>
          </Link>
          <Link href={"/"} className={styles.link}>
            <li className={styles.listItem}>
              <span className={styles.link}>YOUTUBE</span>
            </li>
          </Link>
        </ul>
        <div className={styles.icons}>
          <div className={styles.searchContainer}>
            <Link href={"/"} className={styles.link}>
              <div className={styles.search}>SEARCH</div>
            </Link>
          </div>
          <div className={styles.bagContainer}>
            <Link href={"/"} className={styles.link}>
              {" "}
              <div className={styles.bag}>BAG<span>(1)</span></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

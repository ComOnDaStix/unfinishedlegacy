import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="email" className={styles.label}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className={styles.input}
                />
              </label>
              <button type="submit" className={styles.subscribe}>
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
        <div className={styles.iconsContainer}>
          <Link href={"/"} className={styles.link}>
            <Image
              src={"/images/ig.png"}
              width={20}
              height={20}
              className={styles.icon}
            />
          </Link>
          <Link href={"/"} className={styles.link}>
            <Image
              src={"/images/facebook.png"}
              width={20}
              height={20}
              className={styles.icon}
            />
          </Link>
          <Link href={"/"} className={styles.link}>
            <Image
              src={"/images/tiktokreal.png"}
              width={21}
              height={21}
              className={styles.icon}
            />
          </Link>
          <Link href={"/"} className={styles.link}>
            <Image
              src={"/images/youtubereal.png"}
              width={26}
              height={26}
              className={styles.icon}
            />
          </Link>
        </div>
        <div className={styles.terms}>
          <div className={styles.left}>
            <ul className={styles.ul}>
              <li className={styles.li}>Terms & Conditions</li>
              <li className={styles.li}>Privacy Policy</li>
              <li className={styles.li}>Accessibility</li>
              <li className={styles.li}>Customer Service</li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul className={styles.ul}>
              <li className={styles.li}>About</li>
              <li className={styles.li}>Locations</li>
              <li className={styles.li}>Faqs</li>
            </ul>
          </div>
        </div>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyright}>
            Copyright © 2023, Unfinished Legacy. All rights reserved. See our
            terms of use and privacy notice. Powered by Shopify.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

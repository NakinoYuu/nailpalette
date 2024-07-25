// src/components/Footer.tsx
"use client";
import React from "react";
import styles from "../styles/components/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarRegular,
  faUser as faUserRegular,
} from "@fortawesome/free-regular-svg-icons";
import { faPlus, faNairaSign } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <Link href="/">
          <div
            className={`${styles.home} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            <FontAwesomeIcon className={styles.fontIcon} icon={faNairaSign} />
          </div>
        </Link>
        <Link href="/SavePage">
          <div
            className={`${styles.save} ${
              pathname === "/SavePage" ? styles.active : ""
            }`}
          >
            <FontAwesomeIcon className={styles.fontIcon} icon={faStarRegular} />
          </div>
        </Link>
        <Link href="/PostPage">
          <div
            className={`${styles.post} ${
              pathname === "/PostPage" ? styles.active : ""
            }`}
          >
            <FontAwesomeIcon className={styles.fontIcon} icon={faPlus} />
          </div>
        </Link>
        <Link href="/ProfilePage">
          <div
            className={`${styles.profile} ${
              pathname === "/ProfilePage" ? styles.active : ""
            }`}
          >
            <FontAwesomeIcon className={styles.fontIcon} icon={faUserRegular} />
          </div>
        </Link>
      </div>
    </div>
  );
}

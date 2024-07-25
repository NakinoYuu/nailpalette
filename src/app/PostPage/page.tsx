"use client";
import React from "react";
import styles from "@/styles/postPage.module.scss";
import NextBtn from "@/components/NextBtn";
import Image from "next/image";
import Link from "next/link";

export default function PostPage() {
  return (
    <div className={styles.wrapper}>
      <h1>写真選択</h1>
      <Link href="/">
        <NextBtn />
      </Link>
      <div className={styles.imgChoice}>
        <div className={styles.mainImg}>
          <Image
            className={styles.img}
            src="/img/bbb2.png"
            alt="投稿画像"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

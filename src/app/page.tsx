// import Image from "next/image";
// リンク
// import Link from "next/link";
// コンポーネント
import Research from "@/components/Research";
import Post from "@/components/Post";
// import css from "styled-jsx/css";
// css
import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.top}>
          <h1 className={styles.title}>Nail Palette</h1>
          <Research />
        </div>
        <div className={styles.PostScroll}>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}

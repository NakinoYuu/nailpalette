"use client";

import style from "@/styles/components/post.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faComment as faCommentSolid,
  faArrowUpFromBracket,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
  faUser as faUserRegular,
  faStar as faStarRegular,
} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

export default function Post() {
  const [liked, setLiked] = useState(false);
  const [starred, setStarred] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleStar = () => {
    setStarred(!starred);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.post}>
          <div className={style.postHeader}>
            <div className={style.userIcon}>
              <Image
                src="/img/aaa1.png"
                alt="ユーザー画像"
                width={50}
                height={50}
              />
            </div>
            <div className={style.username}>ユーザー名</div>
          </div>
          <div className={style.postContent}>
            <Image
              src="/img/bbb2.png"
              alt="投稿画像"
              width={500}
              height={500}
            />
            <Image
              src="/img/bbb2.png"
              alt="投稿画像"
              width={500}
              height={500}
            />
            <Image
              src="/img/bbb2.png"
              alt="投稿画像"
              width={500}
              height={500}
            />
          </div>
          <div className={style.postFooter}>
            <div className={style.buttonsLeft}>
              <div className={style.like} onClick={toggleLike}>
                <FontAwesomeIcon
                  className={style.fontIcon}
                  icon={liked ? faHeartSolid : faHeartRegular}
                  style={{ color: liked ? "#8C51D7" : "inherit" }}
                />
              </div>
              <div className={style.comment}>
                <FontAwesomeIcon
                  className={style.fontIcon}
                  icon={faCommentRegular}
                />
              </div>
              <div className={style.share}>
                <FontAwesomeIcon
                  className={style.fontIcon}
                  icon={faArrowUpFromBracket}
                />
              </div>
            </div>
            <div className={style.buttonsRight}>
              <div className={style.profile}>
                <FontAwesomeIcon
                  className={style.fontIcon}
                  icon={faUserRegular}
                />
              </div>
              <div className={style.recommend} onClick={toggleStar}>
                <FontAwesomeIcon
                  className={style.fontIcon}
                  icon={starred ? faStarSolid : faStarRegular}
                  style={{ color: starred ? "#8C51D7" : "inherit" }}
                />
              </div>
            </div>
          </div>
          <div className={style.commentText}>コメント内容</div>
        </div>
      </div>
    </>
  );
}

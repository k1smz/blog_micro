import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type props = {
  news: News[];
};

export default function NewsList({ news }: props) {
  if (news.length === 0) {
    return <div>記事がありません</div>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            <div className={styles.link}>
              {article.thumbnail ? <Image className={styles.image} src={article.thumbnail.url} alt="" width={article.thumbnail.width} height={article.thumbnail.height} /> : <Image className={styles.image} src="/no-image.jpg" alt="No Image" width={1200} height={630} />}
              <dl className={styles.content}>
                <dt className={styles.noesItemTitle}>{article.title}</dt>
                <dd className={styles.meta}>
                  <Category category={article.category} />
                  <Date date={article.publishedAt ?? article.createdAt} />
                </dd>
              </dl>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

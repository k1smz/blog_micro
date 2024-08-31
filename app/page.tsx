import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2021-07-01",
      createdAt: "2021-07-01",
    },
    {
      id: "2",
      title: "当社の新卒採用について",
      category: {
        name: "更新情報",
      },
      publishedAt: "2021-07-01",
      createdAt: "2021-07-01",
    },
    {
      id: "3",
      title: "テスト記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2021-07-01",
      createdAt: "2021-07-01",
    },
  ],
};

export default function Home() {
  const sllicedata = data.contents.slice(0, 2);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>This is my blog.</h1>
          <p className={styles.description}>writing about my hobbies</p>
        </div>
        <Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200} />
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sllicedata} />

        <div className={styles.newsLink}>
          <ButtonLink href="/news">More News</ButtonLink>
        </div>
      </section>
    </>
  );
}

import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIST } from "./_constants";

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIST });
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
        <NewsList news={data.contents} />

        <div className={styles.newsLink}>
          <ButtonLink href="/news">More News</ButtonLink>
        </div>
      </section>
    </>
  );
}

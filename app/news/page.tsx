import { getNewsList } from "../_libs/microcms";
import NewsList from "../_components/NewsList";

export default async function page() {
  const { contents: news } = await getNewsList();
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

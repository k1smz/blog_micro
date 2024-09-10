import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "../_components/NewsList";
import { NEWS_LIST_LIMIT } from "../_constants";
import Pagination from "../_components/Pagination";
import SearchField from "@/app/_components/SearchField";

export default async function page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <div>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </div>
  );
}

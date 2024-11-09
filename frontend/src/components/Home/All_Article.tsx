import React from "react";
import ArticleCard from "../Other/ArticleCard";
import { useQuery } from "@apollo/client";
import { ALL_ARTICLE } from "@/graphql/query";

const All_Article = () => {
  const { loading, error, data } = useQuery(ALL_ARTICLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const articles = data.airdropArticlesAndGuides;
  return (
    <section className="py-20">
      <div>
        <h1 className="pb-10 text-[27px]">Popular Airdrop Articles & Guides</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: any) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default All_Article;

"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { STRAPI_BASE_URL } from "@/lib/constants";

// ARTICLE DETAIL
export const ARTICLE_DETAIL = gql`
  query GetArticleBySlug($slug: String!) {
    airdropArticlesAndGuides(filters: { slug: { eq: $slug } }) {
      title
      slug
      description
      cover_image {
        url
      }
      publication_Date
      content
    }
  }
`;

function ArticlePage() {
  const { slug } = useParams();

  if (!slug) return <p>Loading...</p>;

  const { loading, error, data } = useQuery(ARTICLE_DETAIL, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const article = data.airdropArticlesAndGuides[0];

  return (
    <section className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <Image
          src={`${STRAPI_BASE_URL}${article.cover_image.url}`}
          alt={article.title}
          width={800}
          height={400}
          className="object-cover"
        />
        <h1 className="text-4xl font-bold mt-4">{article.title}</h1>
        <h2 className="text-2xl font-semibold mt-2">{article.title_detail}</h2>
        <p className="text-gray-600 mt-1">
          {new Date(article.date).toLocaleDateString()}
        </p>

        {/* Render the rich text article content */}
        <div
          className="rich-text mt-6"
          dangerouslySetInnerHTML={{ __html: article.article }}
        />
      </div>
    </section>
  );
}

export default ArticlePage;

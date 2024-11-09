import Link from "next/link";
import React from "react";
import Image from "next/image";
import { STRAPI_BASE_URL } from "@/lib/constants";

export default function ArticleCard({ article }: any) {
  return (
    <div className="article-card trans-ition  text-white  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link
        href={`/blogs/${article.slug}`}
        className="text-white hover:text-primary "
      >
        <div className="flex">
          <Image
            className="rounded-lg"
            alt="image"
            src={`${STRAPI_BASE_URL}${article.cover_image.url}`}
            width={100}
            height={57}
          />
          <h5 className="hover:underline ml-3 text-[14px] w-60">
            {article.description}
          </h5>
        </div>
      </Link>
    </div>
  );
}

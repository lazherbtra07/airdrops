"use client";

import { STRAPI_BASE_URL } from "@/lib/constants";
import { gql, useQuery } from "@apollo/client";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { useParams } from "next/navigation";

const GET_TEST_BY_SLUG = gql`
  query GetTestBySlug($slug: String!) {
    tests(filters: { slug: { eq: $slug } }) {
      title
      description
      image {
        url
      }
      price
      content
    }
  }
`;

function Page() {
  const { slug } = useParams();

  if (!slug) return <p>Loading...</p>;

  const { loading, error, data } = useQuery(GET_TEST_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const test = data.tests[0];
  const content: BlocksContent = test.content; // Access content from the first test

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-xl mx-auto border p-4 rounded-lg shadow-lg">
        <Image
          src={`http://localhost:1337${test.image[0].url}`}
          alt={test.title}
          width={500}
          height={300}
          className="object-cover"
        />
        <h1 className="text-3xl font-bold mt-4">{test.title}</h1>
        <p className="text-gray-700 mt-2">{test.description}</p>
        <p className="text-gray-900 font-semibold mt-4">Price: ${test.price}</p>

        {/* Rendering blocks */}
        <BlocksRenderer
          content={content}
          blocks={{
            image: ({ image }) => {
              if (!image || !image.url) return null; // Ensure the image exists and has a valid URL

              return (
                <Image
                  src={
                    image.url.startsWith("http")
                      ? image.url
                      : `http://localhost:1337${image.url}`
                  }
                  width={image.width || 500} // Use fallback width if not provided
                  height={image.height || 300} // Use fallback height if not provided
                  alt={image.alternativeText || "Image"} // Fallback alt text
                  className="object-cover"
                />
              );
            },
          }}
        />
      </div>
    </div>
  );
}

export default Page;

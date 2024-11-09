// components/Test.tsx
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";

const GET_TESTS = gql`
  query {
    tests(pagination: { limit: 100 }) {
      slug
      title
      description
      image {
        url
      }
      price
    }
  }
`;

const Test = () => {
  const { loading, error, data } = useQuery(GET_TESTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.tests.map((test: any, index: number) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg">
          <Image
            src={`http://localhost:1337${test.image[0].url}`}
            alt={test.title}
            width={500}
            height={300}
            className="object-cover"
          />
          <h2 className="text-xl font-bold mt-2">{test.title}</h2>
          <p className="text-gray-700">{test.description}</p>
          <p className="text-gray-900 font-semibold mt-1">${test.price}</p>
          <Link
            className="text-blue-500 hover:underline mt-2 block"
            href={`/test/${test.slug}`}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Test;

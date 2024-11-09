"use client";
import { gql, useApolloClient } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


const getCrypto = gql`
  query {
    cryptos {
      description
      link
      image {
        url
      }
    }
  }
`;

function Page() {
  const client = useApolloClient();
  const [cryptos, setCryptos] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({ query: getCrypto });
        setCryptos(data.cryptos);
      } catch (err) {
        setError((err as Error).message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [client]);

  const strapiBaseURL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <div>
        <h1 className="text-5xl w-[600px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
          Trade your crypto on exchanges
        </h1>
        <div>
          <div className="grid grid-cols-3 gap-x-5 gap-y-3">
            {cryptos.map((crypto) => (
              <Link key={crypto.link} href={crypto.link}>
                <div className="flex h-[200px] flex-col px-4 pb-5 items-center border border-primary/20 rounded-md">
                  <Image
                    alt={crypto.description}
                    src={`${strapiBaseURL}${crypto.image.url}`}
                    width={245}
                    height={90}
                  />
                  <p className="text-center text-[14px]">
                    {crypto.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;

import React from "react";
import { Button } from "../ui/button";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { getCrypto } from "@/graphql/query";

export default function Crypto() {
  const { loading, error, data } = useQuery(getCrypto);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const strapiBaseURL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  return (
    <section>
      <div className="flex  py-16">
        <div className="text-foreground">
          <h1 className="text-[40px] pb-3">Trade your crypto</h1>
          <p className="text-[14px] pb-10">
            Support us by using our referral link on these exchanges. Claim
            their sign up bonus and trade your airdropped coins and other
            cryptocurrencies.
          </p>
          <Link href={"/exchanges"}>
            <Button size={"lg"}>Learn about exchanges</Button>
          </Link>
        </div>
        <div className=" grid grid-cols-2 gap-x-5 gap-y-3">
          {data.cryptos.slice(0, 6).map((crypto: any) => (
            <Link href={crypto.link}>
              <div className="border border-primary/20 rounded-md">
                <Image
                  alt="kd"
                  src={`${strapiBaseURL}${crypto.image.url}`}
                  width={245}
                  height={90}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

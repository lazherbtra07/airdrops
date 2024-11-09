import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CryptoResourcesCategory } from "@/data/data";
import { STRAPI_BASE_URL } from "@/lib/constants";

export default function CryptoResources({ cryptoR }: any) {
  const formatDescription = (description: string) => {
    return description.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ));
  };

  return (
    <section className="pt-32 pb-20">
      <div className="flex flex-col justify-center items-center">
        <h3 className=" text-primary">Crypto resources</h3>
        <h1 className="text-[60px] pb-5">{cryptoR.name}</h1>
        <ul className="flex w-full justify-around my-5 ">
          {CryptoResourcesCategory.map((crypto) => (
            <li
              key={crypto.name}
              className={`p-3 mb-5 ${
                crypto.name === cryptoR.name ? "border-b border-primary" : ""
              }`}
            >
              <Link href={crypto.href}>{crypto.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex py-10">
          <div className="w-5/12">
            <h1 className=" text-[50px] pb-3">{cryptoR.title}</h1>
            <p>{formatDescription(cryptoR.description)}</p>
          </div>
          <div className="w-7/12 flex justify-center">
            <ul className="grid grid-cols-2 gap-4">
              {cryptoR.Link.map((logo: any) => (
                <li>
                  <Link href={`${logo.url}`}>
                    <Image
                      className="p-3 border border-primary/30 rounded-md bg-gray-500/20"
                      alt="logo"
                      src={`${STRAPI_BASE_URL}${logo.Logos.url}`}
                      width={250}
                      height={150}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

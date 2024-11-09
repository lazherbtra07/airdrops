"use client";

import { AIRDROPS_DETAIL, ALL_AIRDROPS } from "@/graphql/query"; // Assuming you have a query for all airdrops
import { useQuery } from "@apollo/client";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useParams, useRouter } from "next/navigation"; // Add `useRouter` for navigation
import React from "react";
import Image from "next/image";
import Links from "@/components/Helper/Links";
import BreadcrumbComponent from "@/components/Other/Breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { STRAPI_BASE_URL } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Airdrops() {
  const { slug } = useParams();
  const router = useRouter();

  if (!slug) return <p>Loading...</p>;

  // Query for all airdrops and the current airdrop by slug
  const { loading, error, data } = useQuery(AIRDROPS_DETAIL, {
    variables: { slug },
  });

  const { data: allAirdropsData } = useQuery(ALL_AIRDROPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const airdrop = data.airdrops[0];
  const content: BlocksContent = airdrop.content;

  // Get all airdrops and find the index of the current airdrop
  const allAirdrops = allAirdropsData?.airdrops || [];
  const currentIndex = allAirdrops.findIndex((item: any) => item.slug === slug);

  // Calculate next and previous airdrop
  const nextAirdrop =
    currentIndex < allAirdrops.length - 1
      ? allAirdrops[currentIndex + 1]
      : null;
  const previousAirdrop =
    currentIndex > 0 ? allAirdrops[currentIndex - 1] : null;

  // Handlers for navigating to next and previous airdrop
  const handleNext = () => {
    if (nextAirdrop) router.push(`/airdrops/${nextAirdrop.slug}`);
  };

  const handleBack = () => {
    if (previousAirdrop) router.push(`/airdrops/${previousAirdrop.slug}`);
  };

  return (
    <section>
      <div>
        <div className="flex justify-between items-center py-14">
          <BreadcrumbComponent />
          <div className=" space-x-4">
            <Link href={"/exchanges"}>
              <Button className="rounded-sm bg-indigo-600 text-white border-none px-6">
                Traid
              </Button>
            </Link>
            <Link href={"/crypto-resources/crypto-wallets"}>
              <Button className="rounded-sm bg-indigo-600 text-white border-none px-6">
                Wallets
              </Button>
            </Link>
          </div>
        </div>
        <div className="py-20"></div>
        <div>
          <div className="flex justify-between">
            <h2>{airdrop.name}</h2>
            <div>
              <Links airdrop={airdrop} />
              <button></button>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-7/12">
              <BlocksRenderer
                content={content}
                blocks={{
                  image: ({ image }) => {
                    if (!image || !image.url) return null;

                    return (
                      <Image
                        src={
                          image.url.startsWith("http")
                            ? image.url
                            : `http://localhost:1337${image.url}`
                        }
                        width={image.width || 500}
                        height={image.height || 300}
                        alt={image.alternativeText || "Image"}
                        className="object-cover"
                      />
                    );
                  },
                }}
              />
            </div>
            <div className="w-5/12">
              <Image
                className="h-[300px] w-[500px]"
                alt="image"
                src={`${STRAPI_BASE_URL}${airdrop.image_detail.url}`}
                height={400}
                width={800}
              />
            </div>
          </div>
          <div className="flex gap-7">
            <div className="w-4/12 border border-primary/30 bg-gray-800/80 rounded-md py-10 h-fit  flex flex-col justify-center items-center ">
              <Image
                alt="image"
                src={`${STRAPI_BASE_URL}${airdrop.logo.url} `}
                width={70}
                height={37}
                className="rounded-full"
              />
              <h1>{airdrop.name}</h1>
              <ul className="w-full">
                {airdrop.air_link.map((link: any) => (
                  <li className="list-none " key={link.url}>
                    <Link href={link.url}>
                      <Button className="w-full">{link.name}</Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-8/12 flex flex-col">
              <div className="flex gap-3 pb-5 ">
                {airdrop.value.map((val: any, index: number) => (
                  <div
                    className="border border-primary/30 bg-gray-800/80 rounded-md w-full flex flex-col py-3 justify-center items-center"
                    key={index}
                  >
                    <h1 className="text-[20px] font-bold">{val.value}</h1>
                    <p className="text-[14px] ">{val.description}</p>
                  </div>
                ))}
              </div>
              <div className="border border-primary/30 p-5 bg-gray-800/80 rounded-md">
                <BlocksRenderer
                  content={airdrop.guide_air_desc}
                  blocks={{
                    image: ({ image }) => {
                      if (!image || !image.url) return null;

                      return (
                        <Image
                          src={
                            image.url.startsWith("http")
                              ? image.url
                              : `http://localhost:1337${image.url}`
                          }
                          width={image.width || 500}
                          height={image.height || 300}
                          alt={image.alternativeText || "Image"}
                          className="object-cover"
                        />
                      );
                    },
                  }}
                />{" "}
                {/* Navigation Buttons for Next and Back Airdrop */}
                <div className="flex justify-between mt-32">
                  {previousAirdrop && (
                    <div className="flex hover:text-primary">
                      <div className="p-1 border rounded-full">
                        <ChevronLeft size={18} />
                      </div>
                      <Button
                        onClick={handleBack}
                        className="border-none hover:bg-gray-800/80  "
                      >
                        Previous Airdrop
                      </Button>
                    </div>
                  )}
                  {nextAirdrop && (
                    <div className="flex hover:text-primary">
                      <Button
                        onClick={handleNext}
                        className="border-none hover:bg-gray-800/80 "
                      >
                        Next Airdrop
                      </Button>
                      <div className="p-1 border rounded-full">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Airdrops;

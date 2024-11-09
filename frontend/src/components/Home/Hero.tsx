"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useQuery } from "@apollo/client";
import { HERO_QUERY } from "@/graphql/homePageQuery";
import { STRAPI_BASE_URL } from "@/lib/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

function Hero() {
  const { loading, error, data } = useQuery(HERO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error?.message}</p>;

  const hero = data?.hero;

  if (!hero) {
    return <p>No hero data found.</p>;
  }

  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col justify-center items-center text-center py-20">
        <div className="relative overflow-hidden w-full py-5">
          <div></div>
        </div>
        <h1 className="text-4xl sm:text-6xl w-[700px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
          {hero.title}
        </h1>

        <div className="mt-10 flex space-x-8">
          {hero.button_hero?.map((button: any, index: number) => (
            <Link href={button.url} key={index}>
              <Button>{button.title}</Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Carousel for Slider Link */}
      <div className="w-full ">
        <Carousel className="w-full    ">
          <CarouselContent className="  w-full">
            {hero.Slider_link.slice(0, 20).map((link: any, index: any) => (
              <div className="md:basis-1/2 lg:basis-1/3 w-full border border-primary">
                <Image
                  className="w-full h-[180px] mx-3  "
                  alt="image"
                  src={`${STRAPI_BASE_URL}${link.image.url}`}
                  width={300}
                  height={200}
                />
                <p className="text-center">{link.title}</p>
              </div>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="fixed z-10 left-0 top-[40%]">
        <div className="flex flex-col gap-2">
          {hero.social_media_link?.map((link: any, index: number) => (
            <Link
              href={link.url}
              key={index}
              className="flex justify-center items-center w-10 h-10 bg-indigo-700"
            >
              <Image
                alt="Social Media Icon"
                src={`${STRAPI_BASE_URL}${link.image.url}`}
                width={30}
                height={30}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;

{
  /* <Carousel className="w-full flex max-w-xs">
          <CarouselContent>
            {hero.Slider_link?.slice(0, 5).map((link: any, index: number) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    className="w-[100px] h-[200px]"
                    alt="Slider Image"
                    src={`${STRAPI_BASE_URL}${link.image.url}`}
                    width={300}
                    height={200}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
{
  /* // <Carousel key={index} className="w-full max-w-xs">
            // <CarouselContent>
          //     {Array.from({ length: 5 }).map((_, index) => (
          //       <CarouselItem key={index}>
          //         <div className="p-1 ">
          //           <Image
          //             alt="Slider Image"
          //             src={`${STRAPI_BASE_URL}${link.image.url}`}
          //             width={300}
          //             height={200}
          //           />
          //         </div>
          //       </CarouselItem>
          //     ))}
          //   </CarouselContent>
          //   <CarouselPrevious />
          //   <CarouselNext />
          // </Carousel> */
}

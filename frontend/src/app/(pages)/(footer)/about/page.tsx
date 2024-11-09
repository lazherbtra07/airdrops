"use client"; // Make this a Client Component

import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { ABOUT_PAGE_GUERY } from "@/graphql/query";
import { STRAPI_BASE_URL } from "@/lib/constants";

function About() {
  const { loading, error, data } = useQuery(ABOUT_PAGE_GUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Extract the first `about` entry from the response
  const about = data?.aboutUs;

  return (
    <section className="bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h4 className="text-teal-400 uppercase tracking-wide mb-2">
              About us
            </h4>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {about.title}
            </h1>
            <p className="text-lg mb-4">{about.description}</p>
          </div>
          <div className="lg:w-1/2 ">
            {about?.image && (
              <Image
                alt="about"
                src={`${STRAPI_BASE_URL}${about.image.url}`}
                width={500}
                height={400}
                className=" "
              />
            )}
          </div>
        </div>

        {/* Display the "As Seen In" section */}
        <h4 className="text-teal-400 uppercase tracking-wide mb-4">
          As seen in
        </h4>
        <div className="flex justify-between items-center gap-10 mb-10">
          {about?.As_seen_in?.map((item: any, index: number) => (
            <Image
              key={index}
              alt={`As seen in logo ${index}`}
              src={`${STRAPI_BASE_URL}${item.url}`}
              width={170}
              height={50}
              className="grayscale hover:grayscale-0 transition-all border border-white rounded-sm "
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">
              {about.airdrops.toLocaleString()}+
            </h2>
            <p className="mt-2">
              Since 2017, AirdropAlert has {about.airdrops.toLocaleString()}{" "}
              listed over
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              {about.people.toLocaleString()} million+
            </h2>
            <p className="mt-2">
              Over {about.people.toLocaleString()} million people have visited
              AirdropAlert.com
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              {about.Businesses.toLocaleString()}+
            </h2>
            <p className="mt-2">
              Businesses have used AirdropAlert to promote their airdrop
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

// GraphQL Query for fetching about section data

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { STRAPI_BASE_URL } from "@/lib/constants";

import Links from "../Helper/Links";

export default function AirdropCard({ airdrop }: any) {
  return (
    <div className=" border  rounded-md bg-primary/30 border-primary md:w-full  h-[200px] mb-2 ">
      <Link href={`/airdrops/${airdrop.slug}`}>
        <div className="flex items-center  ">
          <div className="w-[40px] flex justify-center items-center">
            <h2 className=" text-white text-[18px]  -rotate-90">
              {airdrop.situation.CurrentStatus}
            </h2>
          </div>
          <div className=" bg-gray-800 p-3 text-white   h-[198px] md:w-full    rounded-xl">
            <div className="flex pb-5">
              <Image
                className=" rounded-full "
                alt="logo"
                src={`${STRAPI_BASE_URL}${airdrop.logo.url}`}
                width={50}
                height={50}
              />
              <div className="ml-4">
                <h1>{airdrop.name}</h1>
                <Links airdrop={airdrop} />
              </div>
            </div>
            <div className=" px-[10px] pt-[15px]">
              <ul className=" font-bold flex text-[14px]  list-none justify-between">
                <li>
                  <h1>{airdrop.element.amont_1}</h1>
                </li>
                <li>
                  <h1>{airdrop.element.amont_2}</h1>
                </li>
              </ul>
              <ul className="list-none text-[12px] flex justify-between">
                <li>
                  <h1>{airdrop.element.approx_1}</h1>
                </li>
                <li>
                  <h1>{airdrop.element.approx_2}</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

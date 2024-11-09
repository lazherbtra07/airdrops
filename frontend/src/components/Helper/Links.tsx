import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import Link from "next/link";
import Image from "next/image";
import { STRAPI_BASE_URL } from "@/lib/constants";

export default function Links({ airdrop }: any) {
  const { socialLink } = airdrop;
  const displayLimit = 3;

  return (
    <div>
      <ul className="flex gap-3 list-none">
        {socialLink.slice(0, displayLimit).map((link: any) => (
          <HoverCard key={link.title}>
            <HoverCardTrigger>
              <li className="p-1 border border-white rounded-full">
                <Link href={link.url}>
                  <Image
                    className="rounded-full"
                    alt={link.title}
                    src={`${STRAPI_BASE_URL}${link.image.url}`}
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            </HoverCardTrigger>
            <HoverCardContent>{link.title}</HoverCardContent>
          </HoverCard>
        ))}
        {socialLink.length > displayLimit && (
          <div className="  border text-[20px] w-[30px] h-[30px] flex justify-center items-center border-white rounded-full">
            <li>+{socialLink.length - displayLimit}</li>
          </div>
        )}
      </ul>
    </div>
  );
}

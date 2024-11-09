"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";

import { STRAPI_BASE_URL } from "@/lib/constants";
import { FOOTER_QUERY } from "@/graphql/homePageQuery";

function Footer() {
  const { loading, error, data } = useQuery(FOOTER_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const footer = data.footer;
  return (
    <footer className="container">
      <div>
        <div className="flex justify-between  gap-8">
          <div className="">
            <Link href={footer.logo.url} className="w-fit">
              <Image
                alt="footer"
                src={`${STRAPI_BASE_URL}${footer.logo.image.url}`}
                width={150}
                height={40}
              />
            </Link>

            <p className="w-[500px] text-[14px]">{footer.description}</p>
            <div className="text-[18px] pt-5  flex justify-start items-center gap-2 mb-6">
              {footer.SocialMedia.map((media: any) => (
                <Link
                  className="border  rounded-full hover:border-primary hover:bg-primary/20   border-forground flex justify-center items-center    "
                  href={media.url}
                >
                  <div className=" icons-hover ">
                    <Image
                      className="rounded-full hover:bg-primary/5 "
                      alt="footer"
                      src={`${STRAPI_BASE_URL}${media.image.url}`}
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-10 text-[14px]">
            <div>
              <h1>{footer.Company}</h1>
              <ul className="ml-0">
                {footer.CompanyLinks.map((company: any) => (
                  <li className="list-none ">
                    <Link
                      className="hover:text-primary text-white inline-block transition-transform  duration-700 ease-in-out hover:translate-x-2"
                      href={company.url}
                    >
                      {company.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1>{footer.Useful}</h1>
              <ul className="ml-0">
                {footer.UsefulLinks.map((useful: any) => (
                  <li className="list-none">
                    <Link
                      className="hover:text-primary text-white inline-block transition-transform  duration-700 ease-in-out hover:translate-x-2"
                      href={useful.url}
                    >
                      {useful.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            {footer.FooterButton.map((button: any) => (
              <Link href={button.url}>
                <Button className="font-bold text-white text-[16px]">
                  {button.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] bg-foreground mb-10"></div>
        <ReactMarkdown className="prose text-[12px]">
          {footer.Disclaimer}
        </ReactMarkdown>
      </div>
    </footer>
  );
}
export default Footer;

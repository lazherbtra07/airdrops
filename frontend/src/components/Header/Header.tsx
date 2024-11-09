"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";

import { STRAPI_BASE_URL } from "@/lib/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HEADER_QUERY } from "@/graphql/homePageQuery";

function Header() {
  const { loading, error, data } = useQuery(HEADER_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const header = data?.header;

  return (
    <header className="p-4 bg-gray-900 text-white">
      <div className="flex justify-between">
        {/* Logo Section */}
        <div>
          {header.logo?.url && (
            <Link href={header.logo.url}>
              <Image
                alt=""
                src={`${STRAPI_BASE_URL}${header.logo.image.url}`}
                width={150}
                height={70}
              />
            </Link>
          )}
        </div>

        {/* Navigation Section */}
        <div className="flex items-center justify-center">
          {/* Single Home Link */}
          {header.Home?.url && (
            <Link href={header.Home.url} className="mr-4">
              {header.Home.title}
            </Link>
          )}

          {/* Repeatable Airdrops Links */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {header.Airdrops && header.Airdrops[0]?.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {header.Airdrops.slice(1).map((airdrop: any) => (
                    <NavigationMenuLink
                      className="flex flex-col cursor-pointer"
                      href={airdrop.url}
                    >
                      {airdrop.title}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Repeatable blogs Links */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {header.Blogs && header.Blogs[0]?.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {header.Blogs.slice(1).map((blog: any) => (
                    <NavigationMenuLink
                      className="flex flex-col cursor-pointer"
                      href={blog.url}
                    >
                      {blog.title}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Single Cointracker Link */}
          {header.Cointracker?.url && (
            <Link href={header.Cointracker.url} className="ml-4">
              {header.Cointracker.title}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const BreadcrumbComponent = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home link */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathParts.length > 0 && <BreadcrumbSeparator />}

        {/* Generate breadcrumb links dynamically */}
        {pathParts.map((part, index) => {
          const isLast = index === pathParts.length - 1;
          const href = "/" + pathParts.slice(0, index + 1).join("/");

          return (
            <React.Fragment key={href}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>
                    {part.charAt(0).toUpperCase() + part.slice(1)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>
                    {part.charAt(0).toUpperCase() + part.slice(1)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex  justify-between gap-11">
        <div className="mb-8 w-1/2">
          <Image
            src="/airdropalert-404.png"
            alt="404 Not Found"
            className="p-10 border border-primary rounded-md bg-gray-900"
            width={500}
            height={500}
          />
        </div>
        <div className=" w-1/2">
          <p className="text-6xl font-medium text-white mb-16">
            Oops! We couldn't find the page you were looking for.
          </p>

          <Link href="/" className="">
            <Button size={"lg"} className="border-primary text-primary">
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;

"use client";
import HomePage from "@/components/Home/HomePage";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col  justify-center items-center">
      <ApolloProvider client={client}>
        <HomePage />
      </ApolloProvider>
    </div>
  );
}

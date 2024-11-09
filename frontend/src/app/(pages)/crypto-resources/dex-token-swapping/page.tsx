"use client"; // Mark this as a client component
import { CRYPTO_RESOURCES } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import React from "react";
import CryptoResources from "@/components/Other/CryptoResources";

function DEXTokenSwapping() {
  const { loading, error, data } = useQuery(CRYPTO_RESOURCES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cryptoR = data.cryptoResources[4];

  // Function to convert plain text into paragraphs
  const formatDescription = (description: string) => {
    return description.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ));
  };

  return (
    <div>
      <CryptoResources cryptoR={cryptoR} />
    </div>
  );
}

export default DEXTokenSwapping;

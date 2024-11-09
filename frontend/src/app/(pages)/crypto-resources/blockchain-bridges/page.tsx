"use client"; // Mark this as a client component
import { CRYPTO_RESOURCES } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import React from "react";
import CryptoResources from "@/components/Other/CryptoResources";

function BlockchainBridges() {
  const { loading, error, data } = useQuery(CRYPTO_RESOURCES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cryptoR = data.cryptoResources[1];

  return (
    <div>
      <CryptoResources cryptoR={cryptoR} />
    </div>
  );
}

export default BlockchainBridges;

import React from "react";
import { useQuery } from "@apollo/client";
import AirdropCard from "../Other/AirdropCard";
import { ALL_AIRDROPS } from "@/graphql/query";

import { ScrollArea } from "@/components/ui/scroll-area"; // Ensure this component now shows the scrollbar always
import { Separator } from "@/components/ui/separator";

function Airdrops() {
  const { loading, error, data } = useQuery(ALL_AIRDROPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Grouping airdrops by type
  const groupedAirdrops = data.airdrops.reduce((acc: any, airdrop: any) => {
    const type = airdrop.airdrop_type.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(airdrop);
    return acc;
  }, {});

  return (
    <section className="mt-44">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-2   gap-y-6">
        {Object.entries(groupedAirdrops).map(([type, airdrops]: any) => (
          <ScrollArea key={type} className="h-[874px] w-full">
            <h2 className=" top-0 z-10 bg-gray-900 backdrop-blur-sm sticky text-xl font-bold pl-3 pb-2">
              {type} Airdrops
            </h2>
            <div className="p-3">
              {airdrops.map((airdrop: any) => (
                <>
                  <AirdropCard key={airdrop.name} airdrop={airdrop} />
                </>
              ))}
            </div>
          </ScrollArea>
        ))}
      </div>
    </section>
  );
}

export default Airdrops;

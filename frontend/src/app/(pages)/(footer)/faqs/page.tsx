"use client";
import React, { useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS_TYPE_QUERY } from "@/graphql/query";

function Faqs() {
  const [selectedType, setSelectedType] = useState("");

  // Refs for each FAQ type to scroll to
  const airdropFarmersRef = useRef<HTMLDivElement | null>(null);
  const businessesRef = useRef<HTMLDivElement | null>(null);

  const { loading, error, data } = useQuery(FAQS_TYPE_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Access the FAQs data for Airdrop Farmers and Businesses
  const faqData = data?.faq || {};
  const airdropFarmersFAQs = faqData?.FAQs_for_Airdrop_Farmer || [];
  const businessesFAQs = faqData?.FAQs_for_Businesses || [];

  // Scroll to the specific section when a button is clicked
  const handleScroll = (type: string) => {
    setSelectedType(type);
    const ref = type === "Airdrop" ? airdropFarmersRef : businessesRef;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Buttons */}
        <h3 className="text-teal-300 text-[12px] uppercase mb-2">
          Find Your Question
        </h3>
        <h1 className="text-[40px] mb-8">Frequently Asked Questions</h1>
        <div className="space-x-4 mb-12">
          <button
            onClick={() => handleScroll("Airdrop")}
            className={`${
              selectedType === "Airdrop"
                ? "bg-teal-500 text-white"
                : "bg-transparent"
            } text-[14px] border border-teal-300 py-[10px] px-6 rounded-sm hover:bg-teal-500 hover:text-white transition-colors`}
          >
            For Airdrop Farmers
          </button>
          <button
            onClick={() => handleScroll("Businesses")}
            className={`${
              selectedType === "Businesses"
                ? "bg-teal-500 text-white"
                : "bg-transparent"
            } text-[14px] border border-teal-300 py-[10px] px-6 rounded-sm hover:bg-teal-500 hover:text-white transition-colors`}
          >
            For Businesses
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        {/* Airdrop Farmers Section */}
        <div ref={airdropFarmersRef} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">FAQs for Airdrop Farmers</h2>
          {airdropFarmersFAQs.length > 0 ? (
            <Accordion type="multiple">
              {airdropFarmersFAQs.map((faq: any, index: number) => (
                <AccordionItem key={index} value={`airdrop-faq-${index}`}>
                  <AccordionTrigger>{faq.Question}</AccordionTrigger>
                  <AccordionContent>{faq.Answerr}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p>No FAQs available for Airdrop Farmers.</p>
          )}
        </div>

        {/* Businesses Section */}
        <div ref={businessesRef} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">FAQs for Businesses</h2>
          {businessesFAQs.length > 0 ? (
            <Accordion type="multiple">
              {businessesFAQs.map((faq: any, index: number) => (
                <AccordionItem key={index} value={`business-faq-${index}`}>
                  <AccordionTrigger>{faq.Question}</AccordionTrigger>
                  <AccordionContent>{faq.Answerr}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p>No FAQs available for Businesses.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Faqs;

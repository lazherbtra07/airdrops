"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const JoinUs = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Consent:", consent);
  };

  return (
    <div className="flex items-center justify-center py-16 bg-gray-900">
      <div className="text-center max-w-md">
        <h3 className="text-purple-400 font-semibold text-lg">
          Hundreds of Airdrops
        </h3>
        <h1 className="text-4xl font-normal text-white mt-2">
          Be the first to know
        </h1>
        <p className="text-gray-400 mt-4">
          Join our newsletter and receive the latest giveaways, airdrops, and
          crypto news straight in your inbox.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="email"
            className="w-full bg-primary/5 px-4 py-2 text-white border border-white rounded-md focus:outline-none"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-teal-400 text-white font-bold rounded-md hover:bg-teal-500"
          >
            Subscribe
          </button>

          <div className="mt-4 flex items-start">
            <input
              type="checkbox"
              className="mr-2"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <label className="text-gray-400 ">
              I consent to receiving your weekly newsletter and special offers
              via email.
            </label>
          </div>
        </form>

        <p className="mt-8 text-gray-500 text-sm flex justify-center items-end">
          Powered by{" "}
          <Link
            href={
              "https://emailoctopus.com/?utm_source=powered_by_form&utm_medium=user_referral"
            }
          >
            <Image alt="acto_logo" src={"/logo.png"} width={30} height={10} />
          </Link>
          <span className="text-gray-500 font-bold">EmailOctopus</span>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;

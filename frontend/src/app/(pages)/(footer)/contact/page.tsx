import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <section className="bg-dark text-white py-10">
      <h1 className="text-4xl sm:text-6xl w-[700px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400 mb-4">
        Get in touch
      </h1>
      <div className="container  text-start">
        <div className="flex  justify-between items-center ">
          <div className="w-1/2 flex flex-col gap-10">
            <p>
              Do you have any questions, comments or suggestions for
              AirdropAlert? Maybe you want to contribute some ideas and how we
              could implement them into website to better fit your needs?
              Perhaps you have noticed that some websites are stealing news
              stories and other information from AirdropAlert? Let us know!
            </p>
            <div className="flex gap-6 p-6 rounded border border-white ">
              <Mail />
              <div>
                <h3>Partnership inquiries</h3>
                <p>Please contact morten@airdropalert.com</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded border border-white ">
              <Mail />
              <div>
                <h3>Partnership inquiries</h3>
                <p className="mb-3"> Please contact morten@airdropalert.com</p>
                <Button>List Airdrops</Button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              className="w-[480px] h-[440px] p-10 border border-primary rounded-lg"
              alt="contact"
              src={"/selection.webp"}
              width={700}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

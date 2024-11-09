import React from "react";

function Disclaimer() {
  return (
    <section className="py-10">
      <div>
        <h1 className="text-[60px] mb-3">Disclaimer</h1>
        <div className="p-10 border border-primary rounded">
          <p className="text-gray-300 leading-6 pb-4">
            The information provided on this website is for informational
            purposes only and does not, under any circumstances, constitute
            investment advice, financial advice, trading advice, or any other
            form of advice. Visitors and users of this website are explicitly
            cautioned against treating any content on the website as such.
            AirdropAlert explicitly disclaims any recommendation or endorsement
            for the purchase, sale, or retention of any cryptocurrency by any
            visitor or user of this website. Prior to making any investment
            decisions, it is imperative that individuals conduct thorough due
            diligence and seek consultation with a qualified financial advisor.
          </p>

          <p className="text-gray-300 leading-6 pb-4">
            The materials presented on AirdropAlert’s website are provided “as
            is” without any express or implied warranties. AirdropAlert hereby
            disclaims all other warranties, including, but not limited to,
            implied warranties or conditions of merchantability, fitness for a
            particular purpose, and non-infringement of intellectual property or
            other rights.
          </p>

          <p className="text-gray-300 leading-5 ">
            Furthermore, AirdropAlert does not warrant or make any
            representations regarding the accuracy, probable outcomes, or
            reliability of the use of the materials found on its website or any
            other materials linked to this site.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Disclaimer;

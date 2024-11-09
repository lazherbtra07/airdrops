import React from "react";
// import Hero from "./Hero";
import Crypto from "./Crypto";
import JoinUs from "./JoinUs";
import Airdrops from "./Airdrops";

import Test from "./Test";
import All_Article from "./All_Article";
import Hero from "./Hero";

function HomePage({ tests }: any) {
  return (
    <div className="">
      <div className="">
        <Hero />
        <Airdrops />
        <JoinUs />
        <Crypto />
        <Test />
        <All_Article />
      </div>
    </div>
  );
}

export default HomePage;

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query {
//         tests(pagination: { limit: 100 }) {
//           title
//           description
//           image {
//             url
//           }
//           price
//         }
//       }
//     `,
//   });

//   // Log the full data response to check its structure
//   console.log("Fetched Data from Strapi:", data);

//   return {
//     props: {
//       tests: data.tests ? data.tests.data : [], // Check if the data is inside a 'data' key
//     },
//   };
// }

// const GET_HEROES = gql`
//   query {
//     heroes {
//       documentId
//       title
//       script
//       price
//       createdAt
//       image {
//         url
//       }
//     }
//   }
// `;

// const { loading, error, data } = useQuery(GET_HEROES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const strapiBaseURL =
//     process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"; // Define the base URL for Strapi

//       <ul>
//         {data.heroes.map((hero: any) => (
//           <li key={hero.documentId}>
//             <h2>{hero.title}</h2>
//             <p className="text-primary"> {hero.script}</p>
//             <h3>{hero.price}</h3>
//             {/* <Image
//               alt={hero.title}
//               src={`${""}${hero.image.url}`} // Prepend base URL to the image path
//               width={300}
//               height={300}
//             /> */}
//           </li>
//         ))}
//       </ul>

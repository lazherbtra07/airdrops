import { gql } from "@apollo/client";

// crybto
export const getCrypto = gql`
  query {
    cryptos {
      description
      link
      image {
        url
      }
    }
  }
`;
// airdrop
export const ALL_AIRDROPS = gql`
  query {
    airdrops(pagination: { limit: 100 }) {
      name
      slug
      logo {
        url
      }
      airdrop_type {
        type
      }
      situation {
        CurrentStatus
      }
      socialLink {
        title
        url
        image {
          url
        }
      }
      element {
        amont_1
        amont_2
        approx_1
        approx_2
      }
    }
  }
`;
// airdrop detail
export const AIRDROPS_DETAIL = gql`
  query GetAirdropsBySlug($slug: String!) {
    airdrops(filters: { slug: { eq: $slug } }) {
      name
      slug
      logo {
        url
      }
      airdrop_type {
        type
      }
      situation {
        CurrentStatus
      }
      add_Link {
        Logos {
          url
        }
        name
        url
      }
      element {
        amont_1
        amont_2
        approx_1
        approx_2
      }
      content
      image_detail {
        url
      }
      air_link {
        name
        url
      }
      value {
        value
        description
      }
      guide_air_desc
    }
  }
`;

// article

// export const getArticle = gql`
//   query GetArticle($slug: String!) {
//     articles(where: { slug: $slug }) {
//       script
//       slug
//       image {
//         url
//       }
//       article
//     }
//   }
// `;

//  ALL ARTICLE
export const ALL_ARTICLE = gql`
  query {
    airdropArticlesAndGuides {
      title
      slug
      description
      cover_image {
        url
      }
    }
  }
`;

// ARTICLE DETAIL
export const ARTICLE_DETAIL = gql`
  query GetArticleBySlug($slug: String!) {
    airdropArticlesAndGuides(filters: { slug: { eq: $slug } }) {
      title
      slug
      description
      cover_image {
        url
      }
      publication_Date
      content
    }
  }
`;

// ABOUT_PAGE_GUERY
export const ABOUT_PAGE_GUERY = gql`
  query {
    aboutUs {
      title
      description
      image {
        url
      }
      As_seen_in {
        url
      }
      airdrops
      people
      Businesses
    }
  }
`;

//general terms

export const getGeneralTerms = gql`
  query {
    generals {
      content
    }
  }
`;

//FAQS_TYPE_QUERY
export const FAQS_TYPE_QUERY = gql`
  query {
    faq {
      title
      FAQs_for_Airdrop_Farmer(pagination: { limit: 100 }) {
        Question
        Answerr
      }
      FAQs_for_Businesses(pagination: { limit: 100 }) {
        Question
        Answerr
      }
    }
  }
`;
//Crypto resources
export const CRYPTO_RESOURCES = gql`
  query {
    cryptoResources {
      name
      title
      description
      Link {
        name
        Logos {
          url
        }
        url
      }
    }
  }
`;

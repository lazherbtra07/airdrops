import { gql } from "@apollo/client";
//          Header query
const HEADER_QUERY = gql`
  query {
    header {
      logo {
        url
        image {
          url
        }
      }
      Home {
        title
        url
      }
      Airdrops {
        title
        url
      }
      Blogs {
        title
        url
      }
      Cointracker {
        title
        url
      }
    }
  }
`;
//    Hero Query
const HERO_QUERY = gql`
  query {
    hero {
      title
      button_hero {
        title
        url
      }
      Slider_link {
        title
        url
        image {
          url
        }
      }
      social_media_link {
        url
        image {
          url
        }
      }
    }
  }
`;
//   Footer query
const FOOTER_QUERY = gql`
  query {
    footer {
      logo {
        url
        image {
          url
        }
      }
      description
      SocialMedia {
        title
        url
        image {
          url
        }
      }
      Company
      CompanyLinks {
        title
        url
      }
      Useful
      UsefulLinks {
        title
        url
      }
      FooterButton {
        title
        url
      }
      Disclaimer
    }
  }
`;

export { HEADER_QUERY, HERO_QUERY, FOOTER_QUERY };

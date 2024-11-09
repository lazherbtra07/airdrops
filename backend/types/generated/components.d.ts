import type { Struct, Schema } from '@strapi/strapi';

export interface LinksSemLink extends Struct.ComponentSchema {
  collectionName: 'components_links_sem_links';
  info: {
    displayName: 'NameLink';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LinksMultLink extends Struct.ComponentSchema {
  collectionName: 'components_links_mult_links';
  info: {
    displayName: 'ImageLink';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_s';
  info: {
    displayName: 'Faq-';
  };
  attributes: {
    Question: Schema.Attribute.String & Schema.Attribute.Required;
    Answerr: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsCardValue extends Struct.ComponentSchema {
  collectionName: 'components_elements_card_values';
  info: {
    displayName: 'card value';
  };
  attributes: {
    value: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface ElementsAmontAndApprox extends Struct.ComponentSchema {
  collectionName: 'components_elements_amont_and_approxes';
  info: {
    displayName: 'amont&approx';
  };
  attributes: {
    amont_1: Schema.Attribute.String;
    amont_2: Schema.Attribute.String;
    approx_1: Schema.Attribute.String;
    approx_2: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'links.sem-link': LinksSemLink;
      'links.mult-link': LinksMultLink;
      'faq.faq': FaqFaq;
      'elements.card-value': ElementsCardValue;
      'elements.amont-and-approx': ElementsAmontAndApprox;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductProductCard extends Schema.Component {
  collectionName: 'components_product_product_cards';
  info: {
    displayName: 'product-card';
  };
  attributes: {
    title: Attribute.String;
    price: Attribute.Integer;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface MugsMug extends Schema.Component {
  collectionName: 'components_mugs_mugs';
  info: {
    displayName: 'mug';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    price: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.product-card': ProductProductCard;
      'mugs.mug': MugsMug;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface MugsMug extends Schema.Component {
  collectionName: 'components_mugs_mugs';
  info: {
    displayName: 'mug';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
    price: Attribute.String;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'mugs.mug': MugsMug;
    }
  }
}

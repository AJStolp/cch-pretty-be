'use strict';

/**
 * three-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::three-item.three-item');

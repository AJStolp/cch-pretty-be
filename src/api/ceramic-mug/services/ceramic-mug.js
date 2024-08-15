'use strict';

/**
 * ceramic-mug service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ceramic-mug.ceramic-mug');

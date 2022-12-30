'use strict';

/**
 * articles-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::articles-page.articles-page');

'use strict';

/**
 * service-contract router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-contract.service-contract');

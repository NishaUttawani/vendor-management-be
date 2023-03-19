'use strict';

/**
 * worker-service-contract router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::worker-service-contract.worker-service-contract');

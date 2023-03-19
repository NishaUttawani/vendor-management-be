'use strict';

/**
 * worker-service-contract service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::worker-service-contract.worker-service-contract');

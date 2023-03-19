'use strict';

/**
 * worker-service-contract controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::worker-service-contract.worker-service-contract');

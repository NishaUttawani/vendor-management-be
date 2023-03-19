'use strict';

/**
 * service-contract service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-contract.service-contract');

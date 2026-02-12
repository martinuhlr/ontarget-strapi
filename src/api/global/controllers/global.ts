/**
 * global controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        brand: {
          populate: {
            logo: true
          }
        },
        navigation: {
          populate: {
            items: true,
            cta: true
          }
        },
        footer: {
          populate: {
            cta: true,
            sections: {
              populate: {
                links: true
              }
            },
            contact: true
          }
        },
        seo: true
      }
    };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  }
}));

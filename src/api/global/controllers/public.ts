import type { Core } from '@strapi/strapi';
declare const strapi: Core.Strapi;

export default {
  async find(ctx) {
    const entity = await strapi.entityService.findMany("api::global.global", {
      populate: {
        brand: true,
        navigation: {
          populate: ["items", "cta"],
        },
        footer: {
          populate: ["cta", "sections", "contact"],
        },
        seo: true,
      },
    });

    if (!entity) {
      return ctx.notFound();
    }

    const { id, ...attributes } = entity;
    ctx.body = { data: { id, attributes } };
  },
};

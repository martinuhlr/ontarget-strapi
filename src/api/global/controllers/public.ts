import type { Core } from '@strapi/strapi';
declare const strapi: Core.Strapi;

export default {
  async find(ctx) {
    const entity = await strapi.entityService.findMany("api::global.global", {
      publicationState: "live",
      populate: {
        brand: true,
        navigation: { populate: { items: true, cta: true } },
        footer: { populate: { cta: true, sections: true, contact: true } },
        seo: true,
      },
    });

    const raw = Array.isArray(entity) ? entity[0] : entity;
    if (!raw) {
      return ctx.notFound();
    }
    const { id, ...attributes } = raw as { id: number; [key: string]: unknown };
    ctx.body = { data: { id, attributes } };
  },
};

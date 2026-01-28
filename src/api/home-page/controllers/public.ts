import type { Core } from '@strapi/strapi';
declare const strapi: Core.Strapi;

export default {
  async find(ctx) {
    const entity = await strapi.entityService.findMany("api::home-page.home-page", {
      populate: {
        hero: {
          populate: ["primaryCta", "secondaryCta", "image"],
        },
        servicesMarqueeItems: true,
        servicesSection: true,
        services: {
          populate: ["image"],
        },
        portfolioSection: true,
        portfolioProjects: {
          populate: ["image"],
        },
        aboutSection: {
          populate: ["cta", "image", "stats"],
        },
        testimonialsSection: true,
        testimonials: true,
        ctaSection: {
          populate: ["primaryCta", "secondaryCta", "trustStats"],
        },
      },
    });

    if (!entity) {
      return ctx.notFound();
    }

    const { id, ...attributes } = entity;
    ctx.body = { data: { id, attributes } };
  },
};

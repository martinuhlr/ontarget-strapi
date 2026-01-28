import type { Core } from '@strapi/strapi';
declare const strapi: Core.Strapi;

const HOME_PAGE_UID = "api::home-page.home-page";

const populate = {
  hero: { populate: { primaryCta: true, secondaryCta: true, image: true } },
  servicesMarqueeItems: true,
  servicesSection: true,
  services: { populate: { image: true } },
  portfolioSection: true,
  portfolioProjects: { populate: { image: true } },
  aboutSection: { populate: { cta: true, image: true, stats: true } },
  testimonialsSection: true,
  testimonials: true,
  ctaSection: { populate: { primaryCta: true, secondaryCta: true, trustStats: true } },
};

export default {
  async find(ctx) {
    // Use Document Service findFirst (same as default single-type) so relations populate correctly
    const doc = await strapi.documents(HOME_PAGE_UID).findFirst({
      status: "published",
      populate,
    });

    if (!doc) {
      return ctx.notFound();
    }

    const { documentId, id, ...attributes } = doc as {
      documentId?: string;
      id: number;
      [key: string]: unknown;
    };
    ctx.body = { data: { id: id ?? documentId, attributes } };
  },
};

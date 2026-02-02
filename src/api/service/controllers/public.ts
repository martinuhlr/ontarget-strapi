import type { Core } from "@strapi/strapi";
declare const strapi: Core.Strapi;

const UID = "api::service.service";

function toV4Format(item: Record<string, unknown>) {
  const { id, documentId, createdAt, updatedAt, publishedAt, locale, ...attributes } = item;
  return { id: id ?? documentId, attributes };
}

export default {
  async find(ctx) {
    const slug = ctx.query["filters[slug][$eq]"];
    const filters = slug ? { slug: { $eq: slug } } : {};
    const isPreview = ctx.query.publicationState === "preview";
    const status = isPreview ? "draft" : "published";

    const docs = await strapi.documents(UID).findMany({
      status,
      filters,
      populate: "*",
    });

    const data = Array.isArray(docs) ? docs.map(toV4Format) : [];
    ctx.body = { data };
  },
};

import type { Core } from "@strapi/strapi";
declare const strapi: Core.Strapi;

const UID = "api::reference-page.reference-page";

export default {
  async find(ctx) {
    const isPreview = ctx.query.publicationState === "preview";
    const status = isPreview ? "draft" : "published";

    const doc = await strapi.documents(UID).findFirst({
      status,
      populate: "*",
    });

    if (!doc) {
      return ctx.notFound();
    }

    const { documentId, id, ...attributes } = doc as Record<string, unknown>;
    ctx.body = { data: { id: id ?? documentId, attributes } };
  },
};

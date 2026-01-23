export default {
  async find(ctx) {
    const entity = await strapi.entityService.findMany("api::contact-page.contact-page", {
      publicationState: ctx.query?.publicationState,
      populate: {
        contactInfo: true,
        socials: true,
        formFields: true,
      },
    });

    if (!entity) {
      return ctx.notFound();
    }

    const { id, ...attributes } = entity;
    ctx.body = { data: { id, attributes } };
  },
};

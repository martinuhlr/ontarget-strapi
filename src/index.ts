// import type { Core } from '@strapi/strapi';

const PUBLIC_ACTIONS = [
  // Single types
  "api::global.global.find",
  "api::home-page.home-page.find",
  "api::services-page.services-page.find",
  "api::service-detail-page.service-detail-page.find",
  "api::reference-page.reference-page.find",
  "api::case-study-page.case-study-page.find",
  "api::blog-page.blog-page.find",
  "api::blog-post-page.blog-post-page.find",
  "api::about-page.about-page.find",
  "api::contact-page.contact-page.find",
  // Collection types
  "api::service.service.find",
  "api::service.service.findOne",
  "api::reference.reference.find",
  "api::reference.reference.findOne",
  "api::blog-post.blog-post.find",
  "api::blog-post.blog-post.findOne",
  "api::testimonial.testimonial.find",
  "api::testimonial.testimonial.findOne",
  "api::team-member.team-member.find",
  "api::team-member.team-member.findOne",
  "api::value.value.find",
  "api::value.value.findOne",
];

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Force permission setup in development or if env var is set
    const shouldRun = process.env.NODE_ENV === "development" || process.env.STRAPI_AUTO_PUBLIC_PERMISSIONS === "1";
    
    if (!shouldRun) {
      return;
    }

    console.log("[Bootstrap] Configuring public permissions...");

    const publicRole = await strapi
      .query("plugin::users-permissions.role")
      .findOne({ where: { type: "public" } });

    if (!publicRole) {
      console.warn("[Bootstrap] Public role not found. Skipping permission setup.");
      return;
    }

    let count = 0;
    await Promise.all(
      PUBLIC_ACTIONS.map(async (action) => {
        // Find existing permission (enabled or disabled)
        const existing = await strapi
          .query("plugin::users-permissions.permission")
          .findMany({ where: { role: publicRole.id, action } });

        if (existing.length === 0) {
          await strapi
            .query("plugin::users-permissions.permission")
            .create({ data: { action, role: publicRole.id, enabled: true } });
          count++;
        } else {
          // Ensure enabled
          await Promise.all(
            existing.map((permission) => {
              if (permission.enabled) return null;
              count++;
              return strapi
                .query("plugin::users-permissions.permission")
                .update({ where: { id: permission.id }, data: { enabled: true } });
            }),
          );
        }
      }),
    );
    
    if (count > 0) {
      console.log(`[Bootstrap] Enabled ${count} public permissions.`);
    } else {
      console.log("[Bootstrap] Public permissions are already up to date.");
    }

    // Ensure "Délka spolupráce" is never required
    try {
      const raw = await strapi.entityService.findMany("api::contact-page.contact-page", {
        populate: { formFields: true },
      });
      const contactPage = Array.isArray(raw) ? raw[0] : raw;
      const fields = contactPage?.formFields as Array<{ id?: number; label?: string; required?: boolean; [k: string]: unknown }> | undefined;
      if (fields?.length) {
        const cooperationLabel = /d[eé]lka\s+spolupr[aá]ce/i;
        const updated = fields.map((f) =>
          f.label && cooperationLabel.test(f.label) ? { ...f, required: false } : f
        );
        const changed = updated.some((f, i) => f.required !== fields[i].required);
        if (changed) {
          await strapi.entityService.update("api::contact-page.contact-page", contactPage.id, {
            data: { formFields: updated },
          });
          console.log("[Bootstrap] Contact form: „Délka spolupráce“ set to optional.");
        }
      }
    } catch (e) {
      console.warn("[Bootstrap] Contact form field fix skipped:", (e as Error).message);
    }
  },
};

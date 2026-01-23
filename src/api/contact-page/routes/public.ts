export default {
  routes: [
    {
      method: "GET",
      path: "/public/contact-page",
      handler: "public.find",
      config: { auth: false },
    },
  ],
};

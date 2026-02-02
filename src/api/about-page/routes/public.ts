export default {
  routes: [
    {
      method: "GET",
      path: "/public/about-page",
      handler: "public.find",
      config: { auth: false },
    },
  ],
};

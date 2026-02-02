export default {
  routes: [
    {
      method: "GET",
      path: "/public/services-page",
      handler: "public.find",
      config: { auth: false },
    },
  ],
};

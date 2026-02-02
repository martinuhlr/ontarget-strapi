export default {
  routes: [
    {
      method: "GET",
      path: "/public/reference-page",
      handler: "public.find",
      config: { auth: false },
    },
  ],
};

export default {
  routes: [
    {
      method: "GET",
      path: "/public/blog-page",
      handler: "public.find",
      config: { auth: false },
    },
  ],
};

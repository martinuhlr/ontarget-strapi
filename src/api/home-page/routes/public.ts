export default {
  routes: [
    {
      method: "GET",
      path: "/public/home-page",
      handler: "public.find",
      config: { auth: false },
    },
  ],
};

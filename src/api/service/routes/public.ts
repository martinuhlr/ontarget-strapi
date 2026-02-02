export default {
  routes: [
    {
      method: "GET",
      path: "/public/services",
      handler: "public.find",
      config: { auth: false },
    },
  ],
};

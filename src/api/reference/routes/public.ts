export default {
  routes: [
    {
      method: "GET",
      path: "/public/references",
      handler: "public.find",
      config: { auth: false },
    },
  ],
};

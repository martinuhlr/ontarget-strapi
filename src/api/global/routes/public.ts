export default {
  routes: [
    {
      method: "GET",
      path: "/public/global",
      handler: "public.find",
      config: { auth: false },
    },
  ],
};

export default {
  routes: [
    {
      method: "GET",
      path: "/public/case-study-page",
      handler: "public.find",
      config: { auth: false },
    },
  ],
};

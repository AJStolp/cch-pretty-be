module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "https://res.cloudinary.com"],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

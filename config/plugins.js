// path: ./config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
        folder: "cch/ceramic-mugs", // Specify the default folder
      },
      actionOptions: {
        upload: {
          folder: "cch/ceramic-mugs", // Ensure uploads go to this folder
        },
        delete: {},
      },
    },
  },
});

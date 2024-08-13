// path: ./config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
        folder: "cch/ceramic-mugs", // Specify the folder where images should be uploaded
      },
      actionOptions: {
        upload: {
          folder: "cch/ceramic-mugs",
        },
        delete: {},
      },
    },
  },
});

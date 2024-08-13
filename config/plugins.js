// path: ./config/plugins.js
const cloudinary = require("cloudinary").v2;

module.exports = ({ env }) => {
  // Configure Cloudinary credentials
  cloudinary.config({
    cloud_name: env("CLOUDINARY_NAME"),
    api_key: env("CLOUDINARY_KEY"),
    api_secret: env("CLOUDINARY_SECRET"),
  });

  return {
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
          folder: "cch/ceramic-mugs", // Default folder for uploads
        },
        actionOptions: {
          upload: {
            folder: "cch/ceramic-mugs", // Ensure uploads go to this folder
          },
          delete: {
            // Hook into the delete action
            async handler(ctx) {
              const public_id = ctx.params.id;
              if (public_id) {
                // Use Cloudinary's destroy method to delete the file
                await cloudinary.uploader.destroy(public_id, function (result) {
                  console.log(result);
                });
              }
            },
          },
        },
      },
    },
  };
};

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.product && data.product.title) {
      data.handle = data.product.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }
  },
  async beforeUpdate(event) {
    const { data } = event.params;
    if (data.product && data.product.title) {
      data.handle = data.product.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }
  },
};

export default {
  computed: {
    getCartCount: function () {
      return this.$store.getters.cart.length;
    },
  },
};

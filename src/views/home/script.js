import { ref } from "vue";
import _ from "lodash";

// Contain the data of all lessons.
let lessons = ref([]);
// Contain sorting options.
let sorting = ref({ by: "subject", order: "desc" });

export default {
  name: "HomeView",
  mounted() {
    lessons.value = this.$store.getters.lessons;
    this.sortCatalogBy = sorting.value.by;
  },
  data() {
    return {
      lessons,
    };
  },
  methods: {
    // Add the ID of a lesson to the cart.
    addItemToCart: function (id) {
      this.$store.commit("addItemToCart", id);
      this.sortCatalogBy = sorting.value.by;
    },
  },
  computed: {
    // Sort lessons by field.
    sortCatalogBy: {
      get() {
        return sorting.value.by;
      },
      set(by) {
        sorting.value.by = by;
        lessons.value = _.orderBy(
          lessons.value,
          sorting.value.by,
          sorting.value.order
        );
      },
    },
    // Sort lessons by ascending or descending order.
    catalogOrder: {
      get() {
        return sorting.value.order;
      },
      set(order) {
        sorting.value.order = order;
        lessons.value = _.orderBy(
          lessons.value,
          sorting.value.by,
          sorting.value.order
        );
      },
    },
  },
};

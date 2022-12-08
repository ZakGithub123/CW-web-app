import { ref } from "vue";

// Contain lessons data.
let cartContent = ref([]);

export default {
  name: "CartView",
  mounted() {
    cartContent.value = this.getCartReferences;
  },
  data() {
    return {
      cartContent,
      form: false,
      name: null,
      phoneNumber: null,
      dialog: false,
    };
  },
  methods: {
    removeItemFromCart: function (index) {
      this.$store.commit("removeItemFromCart", index);
      cartContent.value.splice(index, 1);
    },
    // Check if checkout form has valid data.
    onSubmit() {
      if (!this.form) return;

      this.dialog = true;
    },
    // Validate name field.
    validName(value) {
      const re = /^[A-z]+$/;
      return value.match(re) || "This field only accept letters";
    },
    // Validate phone number field.
    validPhoneNumber(value) {
      const re = /^[0-9]+$/;
      return re.test(value) || "This field only accept numbers";
    },
    // Validate required fields.
    required(value) {
      return !!value || "Field is required";
    },
  },
  computed: {
    // Get the lessons IDs stored in the cart and obtain the data of each lesson.
    getCartReferences: function () {
      const cartReferences = this.$store.getters.cart;
      let content = [];

      for (let index in cartReferences) {
        content.push(this.$store.getters.lessonById(cartReferences[index]));
      }

      return content;
    },
  },
};

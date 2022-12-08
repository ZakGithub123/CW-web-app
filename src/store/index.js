import { createStore } from "vuex";
const _ = require("lodash");

export default createStore({
  state: {
    lessons: [
      {
        id: 0,
        subject: "Math",
        location: "London",
        price: 100,
        spaces: 5,
        image: "math.webp",
        icon: "fas fa-square-root-alt",
      },
      {
        id: 1,
        subject: "Math",
        location: "Oxford",
        price: 100,
        spaces: 5,
        image: "math.webp",
        icon: "fas fa-square-root-alt",
      },
      {
        id: 2,
        subject: "English",
        location: "London",
        price: 100,
        spaces: 5,
        image: "english.webp",
        icon: "fas fa-language",
      },
      {
        id: 3,
        subject: "English",
        location: "York",
        price: 80,
        spaces: 5,
        image: "english.webp",
        icon: "fas fa-language",
      },
      {
        id: 4,
        subject: "Music",
        location: "Bristol",
        price: 90,
        spaces: 5,
        image: "music.webp",
        icon: "fas fa-music",
      },
      {
        id: 5,
        subject: "French",
        location: "York",
        price: 70,
        spaces: 5,
        image: "french.webp",
        icon: "fas fa-language",
      },
      {
        id: 6,
        subject: "French",
        location: "London",
        price: 110,
        spaces: 5,
        image: "french.webp",
        icon: "fas fa-language",
      },
      {
        id: 7,
        subject: "History",
        location: "Bristol",
        price: 130,
        spaces: 5,
        image: "history.webp",
        icon: "fas fa-landmark",
      },
      {
        id: 8,
        subject: "History",
        location: "Oxford",
        price: 90,
        spaces: 5,
        image: "history.webp",
        icon: "fas fa-landmark",
      },
      {
        id: 9,
        subject: "Science",
        location: "Oxford",
        price: 125,
        spaces: 5,
        image: "science.webp",
        icon: "fas fa-atom",
      },
    ],
    cart: [],
  },
  getters: {
    // Return lessons list.
    lessons: (state) => {
      return state.lessons;
    },
    // Search a lesson by ID.
    lessonById: (state) => (id) => {
      return state.lessons.find((lesson) => lesson.id == id);
    },
    // Return the content of the cart.
    cart: (state) => {
      return state.cart;
    },
  },
  mutations: {
    // Add the ID of a lesson to the cart content.
    // The data of the lessons is not stored in the cart;
    // this contains only references by ID.
    addItemToCart: (state, id) => {
      const lessonIndex = _.findIndex(state.lessons, { id });
      state.lessons[lessonIndex].spaces--;
      state.cart.push(id);
    },
    // Remove the ID of a lesson from the cart.
    removeItemFromCart: (state, index) => {
      const itemId = state.cart[index];
      const lessonIndex = _.findIndex(state.lessons, { id: itemId });
      state.lessons[lessonIndex].spaces++;

      state.cart.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});

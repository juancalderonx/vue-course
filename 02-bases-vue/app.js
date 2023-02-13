const app = Vue.createApp({
  data() {
    return {
      quote: "Just do it",
      author: "Nike",
    };
  },

  methods: {
    changeAuthor() {
      this.author = "Estebancho";
      this.capitalize();
    },

    capitalize() {
      this.quote = this.quote.toUpperCase();
    },
  },
});

app.mount("#myApp");

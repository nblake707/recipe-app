import axios from "axios";

// const KEY = "b8d5d1148038413aa09e4512c4718d6f";

export default axios.create({
  baseURL: "https://api.spoonacular.com/recipes",

  headers: {
    "Content-Type": "application/json",
  },

});

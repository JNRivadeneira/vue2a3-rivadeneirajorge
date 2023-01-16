import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore('ProductStore', {
  // state
  state: () => {
    return {
      products: {}
    }
  },
  // actions
  actions: {
    async fill(){
      let URLGET="https://6384e61b3fa7acb14f041a45.mockapi.io/api/platos";
      this.products = (await axios.get(URLGET)).data
    }
  }
  // getters
})
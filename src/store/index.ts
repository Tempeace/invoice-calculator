import Vue from "vue";
import Vuex from "vuex";
import { Product } from "@/views/BasketCalculator/types";
import StorageService from "@/services/storage.service";

Vue.use(Vuex);

export interface State {
  products: Array<Product>;
}

export default new Vuex.Store({
  state: {
    products: StorageService.getProducts(),
  },
  mutations: {
    addProduct(state: State, product: Product) {
      state.products.push(product);
      StorageService.saveProducts(state.products);
    },
    deleteProducts(state: State) {
      state.products = state.products.filter((product) => !product.isSelected);
    },
    selectAllProducts(state: State) {
      state.products.forEach((product) => {
        product.isSelected = !product.isSelected;
      });
    },
  },
  actions: {},
  modules: {},
});

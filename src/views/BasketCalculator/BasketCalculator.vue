<template>
  <div class="basket-calculator">
    <h1 style="margin-right: auto">{{ name }}</h1>
    <div class="basket-calculator__header">
      <input
        v-model="productName"
        placeholder="Enter Product Name"
        class="basket-calculator__input"
        style="width: 300px"
      />
      <input
        type="number"
        v-model="price"
        placeholder="Price"
        class="basket-calculator__input"
        style="width: 100px"
      />
      <input
        type="number"
        v-model="quantity"
        placeholder="Quantity"
        class="basket-calculator__input"
        style="width: 100px"
      />
      <input type="button" value="Add" @click="addNewProduct()" />
    </div>
    <div>
      <table class="basket-calculator__table">
        <tr>
          <th>
            <input
              type="checkbox"
              v-model="IsAllSelected"
              @click="selectAllProducts()"
            />
          </th>
          <th>Product name</th>
          <th>Price</th>
          <th>Qta</th>
          <th>Sum</th>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
          <td>
            <input type="checkbox" v-model="product.isSelected" />
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.sum }}</td>
        </tr>
      </table>
    </div>
    <div class="basket-calculator__footer">
      <input type="button" value="Delete" @click="deleteSelectedProducts()" />
      <div class="basket-calculator__footer__sum">Total: {{ totalSum }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  props: {
    name: String,
  },
  data() {
    return {
      productName: "" as string,
      price: 0 as number,
      quantity: 0 as number,
      isAllSelected: false as boolean,
    };
  },
  computed: {
    ...mapState(["products"]),
    totalSum(): number {
      let sum = 0;
      this.products.forEach((product) => {
        sum += product.sum;
      });
      return sum;
    },
  },
  methods: {
    ...mapMutations(["addProduct", "deleteProducts", "selectAllProducts"]),
    addNewProduct(): void {
      this.addProduct({
        name: this.productName,
        price: this.price,
        quantity: this.quantity,
        sum: this.price * this.quantity,
        isSelected: false,
      });
    },
    deleteSelectedProducts(): void {
      this.deleteProducts();
      this.isAllSelected = false;
    },
  },
});
</script>
<style lang="sass">
.basket-calculator
  display: flex
  flex-direction: column
  width: 600px
  &__input
    border-radius: 6px
    margin-right: 10px
  &__header
    display: flex
    flex-direction: row
    padding-bottom: 20px
  &__footer
    justify-content: space-between
    padding-top: 20px
    display: flex
    flex-direction: row
    &__sum
      font-weight: 600
  &__table
    width: 600px
    border: 1px solid black
    th + th
      border-left: 2px solid black
    td + td
      border-left: 2px solid black
    tr:nth-child(even)
      background: #BFBBBB
</style>

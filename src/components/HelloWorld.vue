<template>
  <div class="bg-dark py-3 text-center position-fixed bottom-0 w-100">
    <h5 class="text-white">{{selected}} تومان   </h5>
  </div>
  <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">قیمت</th>
      <th scope="col">مقدار</th>
      <th scope="col">ارزش</th>
    </tr>
    </thead>
    <tbody v-for="(ask, index) in asks" :key="index">
    <tr @click="selectPrice(ask)">
      <td class="text-danger">{{ask.price}}</td>
      <td class="text-danger">{{ask.quantity}}</td>
      <td class="text-danger">{{ask.sum}}</td>
    </tr>
    </tbody>
  </table>
  <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">قیمت</th>
      <th scope="col">مقدار</th>
      <th scope="col">ارزش</th>
    </tr>
    </thead>
    <tbody v-for="(bid, index) in bids" :key="index">
    <tr @click="selectPrice(bid)">
      <td class="text-info">{{bid.price}}</td>
      <td class="text-info">{{bid.quantity}}</td>
      <td class="text-info">{{bid.sum}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      asks:[],
      bids:[],
      selected:'0'
    }
  },
  mounted() {
    this.getOrderBook()
  },
  methods: {
    async getOrderBook(){
      const response = await this.$http.axiosGet({url:'depth?symbol=USDTTMN'})
      this.asks = response.data.result.ask
      this.bids = response.data.result.bid
      console.log(this.asks)
    },
    selectPrice(selected){
      this.selected = selected.sum
    }
  }
}
</script>

<style scoped>

</style>
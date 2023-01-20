<template>

  <div class="container-fluid orders">
    <div class="row position-fixed bg-white z-2 w-100 p-1">
      <div class="col-3">قیمت</div>
      <div class="col-3">مقدار</div>
      <div class="col-3">ارزش</div>
    </div>
    <div class="asks">
      <div class="row position-relative m-1" v-for="(ask, index) in asks" :key="index">
        <div class="col-3 text-danger z-1">{{ ask.price }}</div>
        <div class="col-3 text-danger z-1">{{ ask.quantity }}</div>
        <div class="col-3 text-danger z-1 pointer" @click="selectPrice(ask)">{{ ask.sum }}</div>
        <div :style="{width: Math.floor(Math.random() * (100 - 1 + 1) + 1) + '%'}" class="bar bar-ask"></div>
      </div>
    </div>
    <div class="row h-60">
      <div class="col-12">
        <p class="font-lg">{{ selected }} تومان </p>
      </div>
    </div>
    <div class="bids">
      <div class="row position-relative m-1" v-for="(bid, index) in bids" :key="index">
        <div class="col-3 text-info z-1">{{ bid.price }}</div>
        <div class="col-3 text-info z-1">{{ bid.quantity }}</div>
        <div class="col-3 text-info z-1 pointer" @click="selectPrice(bid)">{{ bid.sum }}</div>
        <div :style="{width: (100 *  bid.quantity / bid.sum) + '%'}" class="bar bar-bid"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      asks: [],
      bids: [],
      selected: '0'
    }
  },
  mounted() {
    this.getOrderBook()
  },
  methods: {
    async getOrderBook() {
      const response = await this.$http.axiosGet({url: 'depth?symbol=USDTTMN'})
      this.asks = response.data.result.ask
      this.bids = response.data.result.bid
      console.log(this.asks)
    },
    selectPrice(selected) {
      this.selected = selected.sum
    },
  }
}
</script>

<style scoped>
.bg-red {
  background-color: #ffd5e0;
}

.bg-blue {
  background-color: #d7e4fd;
}
</style>
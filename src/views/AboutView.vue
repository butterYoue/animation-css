<template>
  <div class="about">
    <h1>Image</h1>
    <!-- <slider-button></slider-button> -->
    <loading-flower :background="red" :delayTime="'3s'" :flowerBackground="['','','','']" :scale="'1.15'"></loading-flower>
    <loading-view></loading-view>
  </div>
</template>
<script>
import { defineComponent } from "vue";
// import { Plus } from "@element-plus/icons-vue";
import SliderButton from "../components/SliderButton.vue";
import LoadingFlower from "../components/LoadingFlower.vue";
import LoadingView from "../components/LoadingView.vue";
import {debounce} from '../plugins/debounce.js'
export default defineComponent({
  name: "HomeView",
  components: {LoadingFlower,LoadingView },
  data() {
    return {
      fileList: [],
      name:0
    };
  },
  methods:{
    throttle:debounce(()=>{
      console.log('test')
    })

  }
});
</script>
<style>
</style>

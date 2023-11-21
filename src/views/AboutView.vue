<template>
  <div class="about">
    <h1>Image</h1>
    <!-- <slider-button></slider-button> -->
    <loading-flower :background="red" :delayTime="'3s'" :flowerBackground="['','','','']" :scale="'1.15'"></loading-flower>
  </div>
</template>
<script>
import { defineComponent } from "vue";
// import { Plus } from "@element-plus/icons-vue";
import SliderButton from "../components/SliderButton.vue";
import LoadingFlower from "../components/LoadingFlower.vue";
import {debounce} from '../plugins/debounce.js'
export default defineComponent({
  name: "HomeView",
  components: {LoadingFlower },
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
.about {
  width: 100px;
}
</style>

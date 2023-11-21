<template>
  <div class="father">
      <div id="btnWrapper" :class="wrap" :style="wrapperStyle">
        <div :class="btn" @click="btnClick">按钮1</div>
        <div :class="btn2" @click="btnTwoClick">按钮2</div>
      </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SliderButton",
  components: {
  },
  data(){
    return {
      wrapperStyle:{
        '--groove-left':'12px',
        '--wraper-rotate':'0deg',
        '--wraper-origin':'center'
      },
      wrap:'',
      btn:'btn active',
      btn2:'btn',
    }
  },
  methods:{
    btnClick(){
      this.wrapperStyle["--groove-left"] = 'calc(12px)'
      this.initClass()
      this.wrap = 'rotateWrap'
      this.wrapperStyle["--wraper-rotate"] = '-3deg'
      this.wrapperStyle["--wraper-origin"] = '80%'
      setTimeout(()=>{
        this.wrap = ''
      },550)
      setTimeout(()=>{
        this.btn = 'btn active'
      },500)
    },
    btnTwoClick(){
      this.wrapperStyle["--groove-left"] = 'calc(12px + 50%)'
      this.wrapperStyle["--wraper-rotate"] = '3deg'
      this.wrapperStyle["--wraper-origin"] = '20%'
      this.wrap = 'rotateWrap'
      this.initClass()
      setTimeout(()=>{
        this.wrap = ''
      },550)
      setTimeout(()=>{
        this.btn2 = 'btn active'
      },500)
    },
    initClass(){
      setTimeout(()=>{
        this.btn = 'btn'
        this.btn2 = 'btn'
      },100)
    }
  }
});
</script>
<style>
.father{
  perspective: 500px;
}
#btnWrapper{
  position: relative;
  width: 380px;
  height: 80px;
  padding: 12px 16px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #e2e6eb;
  box-shadow: -10px -10px 15px #f5f9fd, 10px 10px 15px #d8dbe5;
  transform-origin: var(--wraper-origin);
  transition: transform 0.4s cubic-bezier(0,0,0.48,1);
}
.rotateWrap{
  transform: rotateY(var(--wraper-rotate));
}
#btnWrapper::before{
  content: "";
  position: absolute;
  left:var(--groove-left);
  top: 12px;
  width: calc(50% - 16px - 8px);
  height: calc(100% - 24px);
  border-radius: 12px;
  /* 上左内， 下右内 */
  box-shadow: inset 8px 8px 6px #d9dce6, 
              inset -5px -5px 15px #f5f9fd,
              inset -5px -5px 15px #f5f9fd,
              inset 7px 7px 6px #d9dce6;
  transition: left 1s cubic-bezier(0.82, 0.12, 0.18, 0.88);
}
.btn{
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  color: #aaa;
  cursor: pointer;
  transition: color 0.4s linear;
  animation: txtOutScale 0.6s linear;
}
.active{
  color: #111;
  transform: scale(1.1);
  animation: txtEnterScale 0.4s linear;
}
/* 按钮选中缩放动画 */
@keyframes txtEnterScale {
  0% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1.1);
  }
}
/* 按钮未选中缩放动画 */
@keyframes txtOutScale {
  0% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<!-- 花瓣类型的loading动态图 -->
<!-- 背景颜色、花瓣长宽、四个花瓣颜色、延迟时间、放大倍数、动画播放次数 可通过组件传参修改-->
<template>
    <div class="container" :style="containerStyle">
        <div class="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script lang="ts">
import { StyleValue, defineComponent } from "vue";
export default defineComponent({
    name:'LoadingFlower',
    props:{
        background:{
            type:String,
            default:'lightcyan'
        },
        flowerGrid:{
            type:String,
            default:'45px'
        },
        flowerBackground:{
            type: Array,
            default:()=>{
                return ['#fc636b','#ffb900','#6a67ce','#1aafd0']  
            } 
        },
        delayTime:{
            type:String,
            default:'2s'
        },
        scale:{
            type:String,
            default:'1.15'
        },
        count:{
            type:String,
            default:'infinite'
        }
    },
    computed:{
        containerStyle(){
            let firstBg = this.flowerBackground[0] && this.flowerBackground[0] !==''?this.flowerBackground[0] as string:'#fc636b'
            let secondBg = this.flowerBackground[1] && this.flowerBackground[1] !==''?this.flowerBackground[1] as string:'#ffb900'
            let thridBg = this.flowerBackground[2] && this.flowerBackground[2] !==''?this.flowerBackground[2] as string:'#6a67ce'
            let fourthBg = this.flowerBackground[3] && this.flowerBackground[3] !==''?this.flowerBackground[3] as string:'#1aafd0'
            return {
                '--backgroud':this.background,
                '--flowerGrid':this.flowerGrid,
                '--firstBg':firstBg,
                '--secondBg':secondBg,
                '--thridBg':thridBg,
                '--fourthBg':fourthBg,
                '--delayTime':this.delayTime,
                '--scale':this.scale,
                '--count':this.count
            } as StyleValue
        }
    }
})

</script>
<style lang="less" scoped>
.container{
    width: 100px;
    background-color: var(--background);
}
.loading{
    display: grid;
    grid-template-columns: var(--flowerGrid) var(--flowerGrid);
    grid-template-rows: var(--flowerGrid) var(--flowerGrid);
    gap:2px;
}
.loading div{
    // infinite 无限循环播放
    animation: dropBeating var(--delayTime) linear var(--count);
}
.loading div:nth-child(1){
    background-color: var(--firstBg);
    border-radius: 50% 50% 0 50%;
    transform-origin: right bottom;
}
.loading div:nth-child(2){
    background-color: var(--secondBg);
    border-radius: 50% 50% 50% 0;
    transform-origin: left bottom;
    animation-delay: calc( var(--delayTime) / 4 );
}
.loading div:nth-child(3){
    background-color: var(--thridBg);
    border-radius: 50% 0 50% 50%;
    transform-origin: right top;
    animation-delay: calc( var(--delayTime) / 4 * 3) ;
}
.loading div:nth-child(4){
    background-color: var(--fourthBg);
    border-radius: 0 50% 50% 50%;
    transform-origin: left top;
    animation-delay: calc( var(--delayTime) / 4 * 2) ;
}
@keyframes dropBeating{
    0%{
        transform: scale(1);
    }
    25%{
        transform: scale(var(--scale));
    }
    50%{
        transform: scale(1);
    }
}
</style>
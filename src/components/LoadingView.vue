<template>
    <div class="container">
        <div class="loading1">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="loading2">
            <div style="--b:1"></div>
            <div style="--b:2"></div>
            <div style="--b:3"></div>
            <div style="--b:4"></div>
            <div style="--b:5"></div>
        </div>
        <div class="loading3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="loading4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  
</template>
  
<script lang="ts">
import { Script } from "vm";
import { defineComponent } from "vue";
  
export default defineComponent({
    name: "LoadingView",

})
</script>
<style>
:root{
    --time1:2s;
    --ballWidth:18px;
    --ballRadius:40px;
    --ballTime:5s;
    --barTime:2s;
    --squareWidth:25px;
    --squareTime:3s;
}
.container{
    height: 150px;
    margin: 20px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightcyan;
}
.loading1{
    display: grid;
    grid-template-columns: 45px 45px;
    grid-template-rows: 45px 45px;
    gap:2px;
}
.loading1 div{
    animation: dropBeating var(--time1) linear infinite;
}
.loading1 div:nth-child(1){
    background-color: #fc636b;
    border-radius: 50% 50% 0 50%;
    transform-origin: right bottom;
}
.loading1 div:nth-child(2){
    background-color: #ffb900;
    border-radius: 50% 50% 50% 0;
    transform-origin: left bottom;
    animation-delay: calc( var(--time1) / 4 );
}
.loading1 div:nth-child(3){
    background-color: #6a67ce;
    border-radius: 50% 0 50% 50%;
    transform-origin: right top;
    animation-delay: calc( var(--time1) / 4 * 3) ;
}
.loading1 div:nth-child(4){
    background-color: #1aafd0;
    border-radius: 0 50% 50% 50%;
    transform-origin: left top;
    animation-delay: calc( var(--time1) / 4 * 2);
}
@keyframes dropBeating{
    0%{
        transform: scale(1);
    }
    25%{
        transform: scale(1.15);
    }
    50%{
        transform: scale(1);
    }
}

.loading2{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ballsRotating var(--ballTime) linear infinite;;
}
.loading2 div{
    position: absolute;
    width: var(--ballWidth);
    height: var(--ballWidth);
    border-radius: 50%;
    background-color: #3be8b0;
    transform: rotateZ(calc(var(--b) * 72deg)) translateY(var(--ballRadius));/**很神奇的操作啊 */
}
.loading2 div:nth-child(2){
    background-color: #1aafd0;
}
.loading2 div:nth-child(3){
    background-color: #6a67ce;
}
.loading2 div:nth-child(4){
    background-color: #fc636b;
}
.loading2 div:nth-child(5){
    background-color: #ffb900;
}
@keyframes ballsRotating{
    from{
        transform: rotateZ(0deg);
    }
    to{
        transform: rotateZ(360deg);
    }
}
@keyframes ballsBeating{
    0%{
    /*  */
    }
}

/* t条 */
.loading3{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 75px;
    height: 100px;
    padding:20px;
}
.loading3 div{
    width: 12px;
    height: 40px;
}
.loading3 div:nth-child(1){
    background-color: #fc636b;
    animation: barStretch var(--barTime) linear infinite;
}
.loading3 div:nth-child(2){
    background-color: #1aafd0;
    animation: barStretch var(--barTime) linear calc(var(--barTime)/4 * -1) infinite;
}
.loading3 div:nth-child(3){
    background-color: #6a67ce;
    animation: barStretch var(--barTime) linear calc(var(--barTime)/4 * -3) infinite;
}
.loading3 div:nth-child(4){
    background-color: #ffb900;
    animation: barStretch var(--barTime) linear calc(var(--barTime)/4 * -2) infinite;
}
@keyframes barStretch{
    0%,90%{
        height: 40px;
    }
    25%{
        height: 60px;
    }
    35%{
        height: 60%;
    }
    55%{
        height: 100px;
    }
}

/* 方块移动 */
.loading4{
    position: relative;
    width: calc(var(--squareWidth) * 2 + 5px);
    height: calc(var(--squareWidth) * 2 + 5px);
}
.loading4 div{
    position: absolute;
    width: var(--squareWidth);
    height: var(--squareWidth);
    border-radius: 2px;
}
.loading4 div:nth-child(1){
    background-color: #fc636b;
    transform: none;
    animation: squareMove var(--squareTime) linear calc(var(--squareTime) / 12 * -11) infinite;
}
.loading4 div:nth-child(2){
    background-color: #ffb900;
    transform: translateX(calc(var(--squareWidth) + 5px));
    animation: squareMove var(--squareTime) linear calc(var(--squareTime) / 12 * -3) infinite;

}
.loading4 div:nth-child(3){
    background-color: #6a67ce;
    transform: translateY(calc(var(--squareWidth) + 5px));
    animation: squareMove var(--squareTime) linear calc(var(--squareTime) / 12 * -7) infinite;
}
@keyframes squareMove{
    0%,83%,100%{
        transform: none;
    }
    8%,25%{
        transform: translateX(calc(var(--squareWidth) + 5px));
    }
    33%,50%{
        transform: translateX(calc(var(--squareWidth) + 5px)) translateY(calc(var(--squareWidth) + 5px));
    }
    58%,75%{
        transform: translateY(calc(var(--squareWidth) + 5px));
    }
}
</style>
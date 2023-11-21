<template>
    <button @click="add">setup</button>
   {{ state.count}}
</template>
<script setup>
//组合式API + <script setup> 形式
import {reactive} from 'vue'

const state = reactive({count:0})

const add = ()=>{
    state.count++
}
</script>
<template>
    <div>
        <SetUp></SetUp>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import SetUp from '../components/SetUp.vue'
//defineComponent为了更好使用ts，并且不是<scritp setup>的场景下使用；
//选项式APi + defineComponent 形式
export default defineComponent({
    name:'ProgramView',
    components:{SetUp}
})
</script>

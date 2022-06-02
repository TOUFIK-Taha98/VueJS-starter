<script setup>
    import { ref } from 'vue';
    const counter = ref(0);

    setTimeout(()=>{
        counter.value++
    },1000)
</script>

<template>
    {{counter}}
    <hr/>
</template>
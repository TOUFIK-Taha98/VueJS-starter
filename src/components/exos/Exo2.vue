<script setup>
    import { ref } from 'vue';
    const counter = ref(0);
    const submit = () => {
        counter.value ++;
    }
    const reset = () => {
        counter.value = 0;
    }
</script>

<template>
    <h2>Exo 2</h2>
    <p>{{ counter }}</p>
    <button @click="submit">+</button>
    <button @click="reset">RESET</button>
    <br />
    <hr>
</template>
<script setup>
    import { ref } from 'vue';
    const tableau = ref([1, 2, 3]);
    const listeObjets = ref([
        {id: 0, name:'Alice'},
        {id: 1, name:'Bob'},
        {id: 2, name:'Charlie'}
    ])
</script>

<template>
    <h2>Exo5 : V-FOR v-IF v-ELSE</h2>
    <p v-for="i in tableau">{{i}}</p>
    <ul>
        <li v-for="obj in listeObjets" :key="obj.id">{{obj.name}}</li>
    </ul>

    <div v-for="obj in listeObjets" :key="obj.id">
        <h2>{{ obj.name }}</h2>
        <p>{{ obj.id }}</p>
    </div>
</template>
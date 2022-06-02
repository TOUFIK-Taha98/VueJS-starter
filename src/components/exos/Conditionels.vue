<script setup>
    import { ref } from 'vue'
    const user = ref(null)

</script>

<template>
    <h1>Hello, les tests v-if</h1>
    <hr/>
    <h2>Hello {{user ? user : 'Anonyme'}}</h2>
    <button v-if="!user" @click="()=>{user={'test':'test'}}">Se connecter</button>
    <button v-if="user" @click="user=null">Se déconnecter</button>
</template>
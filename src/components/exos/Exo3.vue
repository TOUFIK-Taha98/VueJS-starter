<script setup>
    import { ref } from 'vue';
    import * as jose from 'jose'
    const jwtInput = ref('');
    const claims = ref('');
    const decodeClaimns = () => {
        try {
            const jwtdecode = jose.decodeJwt(jwtInput.value)
            claims.value = jwtdecode;
        } catch (error) {
            claims.value = error.message
        }
    }
</script>


<template>
    <h2>Exo 3</h2>
    <input type="text" v-model="jwtInput"/>
    <br/> 
    <button @click="decodeClaimns">TEST - Token</button>
    {{ claims }}

    <br/><hr>
</template>
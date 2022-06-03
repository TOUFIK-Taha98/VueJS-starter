<script setup>
    import { ref } from 'vue';
    import * as jose from 'jose'
    const claims = ref('');
    const decodeClaimns = () => {
        try {
            const jwtdecode = jose.decodeJwt(jwtInput.value)
            claims.value = jwtdecode;
        } catch (error) {
            claims.value = error.message
        }
    }
    const jwtInput = ref('');
    const savedJwt = ref('');
    const saveJwt = () =>{
        localStorage.setItem('jwt', jwtInput.value);
        localSavedJwt();
    }
    const localSavedJwt = () => {
        savedJwt.value = localStorage.getItem('jwt');
    }
    jwtInput.value = savedJwt.value;
</script>

<template>
    <h2>Exo 4</h2>
    <input type="text" v-model="jwtInput"/>
    <br/> 
    <button @click="decodeClaimns">TEST - Token</button>
    {{ claims }}
    <button @click="saveJwt">Sauvegarder TOKEN</button>
    <br/><b>SAVED TOKEN : </b><br/>{{ savedJwt }}
    <hr/>
</template>
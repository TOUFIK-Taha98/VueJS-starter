<template>
  <div>
    <h2>Exo 2</h2>
    <p>{{ counter }}</p>
    <button @click="submit">+</button>
    <button @click="reset">RESET</button>
    <br />
    
    <input type="text" v-model="token"/>
    <br/> <button @click="getToken">TEST - Token</button>
    {{ token }}
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import * as jose from 'jose'

  const counter = ref(0);
  const token = ref('');
  const submit = () => {
    counter.value ++;
  }
  const reset = () => {
    counter.value = 0;
  }

  const getToken = () => {
    const claims = jose.decodeJwt(token)
    console.log(claims)
  }

</script>

<style>
</style>

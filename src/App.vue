<template>
  <div>
    <h1>You did it !</h1>
    <h2>Exo 2</h2>
    <p>{{ counter }}</p>
    <button @click="submit">+</button>
    <button @click="reset">RESET</button>
    <br />
    <hr>
    <h2>Exo 3</h2>
    <input type="text" v-model="token"/>
    <br/> 
    {{ token }}
    <button @click="decodeClaimns">TEST - Token</button>
    {{ claims }}
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import * as jose from 'jose'

  const counter = ref(0);
  const token = ref('');
  const claims = ref(null);

  const submit = () => {
    counter.value ++;
  }
  const reset = () => {
    counter.value = 0;
  }

  const decodeClaimns = () => {
    const jwtdecode = jose.decodeJwt(token.value)
    claims.value = jwtdecode;
    console.log(claims)
  }

</script>

<style>
</style>

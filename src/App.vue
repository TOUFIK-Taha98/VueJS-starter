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
    <input type="text" v-model="jwtInput"/>
    <br/> 
    <button @click="decodeClaimns">TEST - Token</button>
    {{ claims }}

    <br/><hr>

    <h2>Exo 4</h2>
    <button @click="saveJwt">Sauvegarder TOKEN</button>
    {{ savedJwt }}
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import * as jose from 'jose'

  const counter = ref(0);

  const jwtInput = ref('');
  const claims = ref(null);
  const savedJwt = ref('');

  const submit = () => {
    counter.value ++;
  }
  const reset = () => {
    counter.value = 0;
  }

  const decodeClaimns = () => {
    try {
      const jwtdecode = jose.decodeJwt(jwtInput.value)
      claims.value = jwtdecode;
    } catch (error) {
      claims.value = error.message
    }
  }
  const saveJwt = () =>{
    localStorage.setItem('jwt', jwtInput.value);
    localSavedJwt();
  }
  const localSavedJwt = () => {
    savedJwt.value = localStorage.getItem('jwt');
  }

  jwtInput.value = savedJwt.value;
</script>

<style>
</style>

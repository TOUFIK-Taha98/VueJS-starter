<template>
  <div>
    <h2>Exo 2</h2>
    <p>{{ this.counter }}</p>
    <input type="text" v-model="counter" />
    <button @click="submit">+</button>
    <button @click="reset">RESET</button>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    submit() {
      this.counter++;
      console.log(this.ref);
    },
    reset() {
      this.counter = 0;
    },
  },
};
</script>

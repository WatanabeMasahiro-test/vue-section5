<template>
  <div>
    <p>いいね {{ number }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    number : 123,
  }),
  methods: {
    increment() {
      this.number++;
    }
}
}

</script>

<style scoped>
  div {
    border : 1px solid red;
  }
</style>

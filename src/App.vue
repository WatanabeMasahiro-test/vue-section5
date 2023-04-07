<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <p>いいね {{ number }}</p> -->
    <LikeHeader></LikeHeader>
    <AppTest></AppTest>
    <h1>ここはApp.vue</h1>
    <LikeNumber></LikeNumber>
    <LikeNumber></LikeNumber>
    <LikeNumber></LikeNumber>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LikeHeader from './components/LikeHeader.vue'
export default {
  // name: 'App',
  components: {
  //   HelloWorld
    LikeHeader
    // LikeHeader : LikeHeader
  }
  // data: () => ({
  //   number : 123,
  // }),
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
  div {
    border : 1px solid blue;
  }
</style>

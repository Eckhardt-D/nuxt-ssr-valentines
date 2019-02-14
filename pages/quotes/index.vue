<template>
  <section>
    <div @click="$router.push('/quotes/' + quote.id)" v-for="quote in quotes" :key="quote.id" id="quoteCard">
      <h1>{{ quote.author }}</h1>
      <hr>
      <p>{{ quote.body }}</p>
  </div>
  </section>
</template>

<script>
export default {
  computed: {
    quotes() {
      return this.$store.getters['quotes']
    }
  }
}
</script>

<style>
#quoteCard {
  width: 70%;
  border: 0.5px solid grey;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 1.5em;
  margin: 1.5em auto;
}
</style>

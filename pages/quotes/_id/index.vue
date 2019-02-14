<template>
  <div id="quoteCard">
    <h1>{{ quote.author }}</h1>
    <hr>
    <p>{{ quote.body }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    quotes() {
      return this.$store.getters['quotes']
    },
    quote() {
      const param = this.$route.params.id
      const quote = this.quotes[this.quotes.findIndex(x => x.id.toString() === param)];
      return quote
    }
  },
  head() {
    return {
      title: this.quote.author + ' | ' + this.quote.body.substring(0, 25) + '...'
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

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
      title: 'Valentines Quotes ❤️',
      meta: [
        { name: "description", content: this.quote.body + ' - ' + this.quote.author },
        { name: "shortcut icon", content: "❤️"  },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@eckhardtdreyer" },
        { name: "twitter:title", content: "Valentines Quotes ❤️" },
        { name: "twitter:description", content: this.quote.body + ' - ' + this.quote.author },
        { name: "twitter:creator", content: "@eckhardtdreyer" },
        { name: "twitter:image", content: "https://valentines-quotes-fertdtvfya.now.sh/socials.jpg" },
        { property: "og:title", content: "Valentines Quotes ❤️"  },
        { property: "og:type", content: "website"  },
        { property: "og:url", content: "https://valentines-quotes-fertdtvfya.now.sh/quotes/"+this.quote.id  },
        { property: "og:image", content: "https://valentines-quotes-fertdtvfya.now.sh/socials.jpg"  },
        { property: "og:image:secure_url", content: "https://valentines-quotes-fertdtvfya.now.sh/socials.jpg"  },
        { property: "og:description", content: this.quote.body + ' - ' + this.quote.author  }, 
        { property: "og:site_name", content: "Valentines Quotes ❤️"  },
      ],
      link: [
        { rel: "shorcut icon", href: "https://valentines-quotes-fertdtvfya.now.sh/favicon.png" }
      ]
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

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
  },
  head() {
    return {
      title: 'Valentines Quotes ❤️',
      meta: [
        { name: "description", content: "Find cool valentines quotes to send to your number one person. ❤️"  },
        { name: "shortcut icon", content: "❤️"  },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@eckhardtdreyer" },
        { name: "twitter:title", content: "Valentines Quotes ❤️" },
        { name: "twitter:description", content: "Find cool valentines quotes to send to your number one person. ❤️" },
        { name: "twitter:creator", content: "@eckhardtdreyer" },
        { name: "twitter:image", content: "https://valentines-quotes-fertdtvfya.now.sh/socials.jpg" },
        { property: "og:title", content: "Valentines Quotes ❤️"  },
        { property: "og:type", content: "website"  },
        { property: "og:url", content: "https://valentines-quotes-fertdtvfya.now.sh/quotes"  },
        { property: "og:image", content: "https://valentines-quotes-fertdtvfya.now.sh/socials.jpg"  },
        { property: "og:image:secure_url", content: "https://valentines-quotes-fertdtvfya.now.sh/socials.jpg"  },
        { property: "og:description", content: "Find cool valentines quotes to send to your number one person. ❤️"  }, 
        { property: "og:site_name", content: "Valentines Quotes ❤️"  },
      ],
      link: [
        { rel: "shorcut icon", href: "https://valentines-quotes-fertdtvfya.now.sh/favicon.png" }
      ]
    }
  }
}
</script>

<style scoped>
#quoteCard {
  width: 70%;
  border: 0.5px solid grey;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 1.5em;
  margin: 1.5em auto;
  cursor: pointer;
}
</style>

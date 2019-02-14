<template>
  <section>
    <nav>
      <nuxt-link to="/">ValeQuote</nuxt-link>
    </nav>
    <main>
      <div>
        <h1>Spoil your Loved one with a random quote!</h1>
        <img 
          width="80%"
          src="/ValeQuote.jpg" 
          alt="A Valentines Heart with Binary Data">
          <br>
        <nuxt-link to="/quotes" class="quoteBtn">Get List of Love Quotes</nuxt-link>
      </div>
    </main>
  </section>
</template>

<script>

export default {
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
        { property: "og:url", content: "https://valentines-quotes-fertdtvfya.now.sh"  },
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

<style>
  nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 56px;
    background: rgb(255, 51, 51);
    box-shadow: 0 1px 3px pink;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: lighter;
  }

  main {
    margin-top: 56px;
    min-height: calc(100vh - 56px);
    display: flex;
    align-items: center;
  }

  main div {
    margin: 0 auto;
    flex-basis: 90%;
    text-align: center;
  }

  main div h1 {
    font-size: 3em;
    font-weight: lighter;
    text-align: center;
    margin: 20px 0;
  }

  main div img {
    border-radius: 10px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }

  main div .quoteBtn {
    background:  rgb(255, 51, 51);
    border: 0;
    padding: 1.2em;
    color: white;
    font-size: 1.3em;
    text-decoration: none;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 100ms ease-in-out;
  }

  @media screen and (min-width: 768px) {
    main div img {
      width: 50%;
    }
  }
</style>


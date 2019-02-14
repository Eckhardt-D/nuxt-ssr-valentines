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
        <nuxt-link to="/quotes" class="quoteBtn">Get Random Love Quote</nuxt-link>
      </div>
    </main>
  </section>
</template>

<script>

export default {

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
</style>


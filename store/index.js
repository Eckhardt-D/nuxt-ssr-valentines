const API_URL = 'https://favqs.com/api/quotes/?filter=love&type=tag'
const API_KEY = process.env.API_KEY

export const state = () => ({
  quotes: [{id: '1', body: 'Quote of the day.', author: 'John Snow'}]
})

export const getters = {
  quotes: state => state.quotes
}

export const mutations = {
  SET_QUOTES: (state, payload) => {
    state.quotes = payload
  }
}

export const actions = {
  async nuxtServerInit({commit}) {
    const response = await this.$axios.$get(API_URL, {
      headers: { 'Authorization': `Token token=${API_KEY}`}
    })
    const quotes = response.quotes
    console.log(quotes);
    commit('SET_QUOTES', quotes)
  }
}

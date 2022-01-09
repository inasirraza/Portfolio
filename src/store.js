import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vueProjects: [
            {
              title: 'Ohho.Shop',
              description: 'Buy your favourite item',
              link: 'https://ohoo-shop.netlify.app/'
            },
            {
              title: 'Book-Karo',
              description: 'Keep your Bus details with their passengers',
              link: 'https://book-karo-v1-2.netlify.app'
            },
            {
              title: 'Monster Game',
              description: 'A very simple monster game',
              link: 'https://monster-gaming.netlify.app'
            },
            {
              title: '4posts',
              description: 'A very simple vue js app in which 4 posts are given.',
              link: 'https://4posts.netlify.app/'
            },

          ],
    jsProjects: [
            {
              title: 'Live image Editor',
              description: 'It is a very simple project deisgned using pure javascript',
              link: 'https://live-image-editor.netlify.app'
            },
            {
              title: 'Todo App',
              description: 'Save your todos, so that you can remind it on your finger tip',
              link: 'https://todoapp-by-nasir.netlify.app'
            },
            {
              title: 'Search Bar',
              description: 'It is a search bar in which we can select shoes sizes and can search that particular sizes.',
              link: 'https://search-final.netlify.app'
            },
            {
              title: 'Live Clock',
              description: 'It shows Current Time',
              link: 'https://clock-current-time.netlify.app'
            },
            {
              title: 'Hangman App',
              description: 'Guess the unknown word',
              link: 'https://hangmanbynasir.netlify.app'
            },
            

          ],
    htmlProjects: [
            {
              title: 'Dogwalker',
              description: 'Pure Html-Css based fully responsive website',
              link: 'https://dogwalker-trailzer.netlify.app'
            },
            {
              title: 'Free-Hand',
              description: 'Pure Html-Css based fully responsive website',
              link: 'https://freehand-by-nasir.netlify.app'
            },
            {
              title: 'Omni',
              description: 'The first Pure Html-Css based fully responsive website I learn',
              link: 'https://omni-the-firstone.netlify.app/'
            },
            {
              title: 'Natour',
              description: 'Pure Html-Css based fully responsive website, that I desgin while learning from the Advance css tutorial',
              link: 'https://natour-my-second-web.netlify.app/'
            },
            {
              title: 'Nexter',
              description: 'Pure Html-Css based fully responsive website, that also I desgin while learning from the Advance css tutorial and it was the second advance website that I learned',
              link: 'https://nexter-third-web.netlify.app/'
            },
            {
              title: 'Trillo',
              description: 'Pure Html-Css based fully responsive website, that also I desgin while learning from the Advance css tutorial and it was the third advance website that I learned',
              link: 'https://trillo-fourth.netlify.app'
            },

          ],
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    vueProjects : state=> state.vueProjects,
    jsProjects : state=> state.jsProjects,
    htmlProjects : state=> state.htmlProjects,
  }
})
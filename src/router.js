import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'

import Main from './components/Main/Main.vue'
import Vuejs from './components/Main/vue/Vuejs.vue'
import Javascript from './components/Main/javascript/Javascript.vue'
import Htmlcss from './components/Main/html-css/Htmlcss.vue'

Vue.use(VueRouter)
const MainComp = {
  path: '',
  component: Main,
  children:[
    {path: '', component: Vuejs},
    {path: '/main/categories/javascript-projects', component: Javascript},
    {path: '/main/categories/htmlcss-projects', component: Htmlcss},
  ]
} 

const routes = [
  {path:'/', component: Home, children:[
       MainComp,
  ]}
]

export default new VueRouter({
    mode: 'history', 
    routes,
    scrollBehavior(to, from, savedPosition){
      if(savedPosition){
        return savedPosition
      }
      if(to.hash){
        return {selector: to.hash, behavior: 'smooth'}
      }
      return {x:0, y:0}
    }
  })
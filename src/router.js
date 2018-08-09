import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/AboutMe.vue'
import Projects from './components/projects.vue'
import Experience from './components/experience.vue'
import Contact from './components/contact.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

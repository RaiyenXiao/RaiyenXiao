import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Personal = () => import('@/components/Personal');
const Travel = () => import('@/components/Travel');
const Experience = () => import('@/components/Experience');
const Skill = () => import('@/components/Skill');

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        Personal: Personal,
        Travel: Travel,
        Experience: Experience,
        Skill: Skill
      }
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/Travel',
      name: 'Travel',
      component: Travel
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/Skill',
      name: 'Skill',
      component: Skill
    },
  ]
})
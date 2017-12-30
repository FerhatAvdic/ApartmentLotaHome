import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'

Vue.use(Router)

const router = new Router({
  routes: [
    { 
      path: '/',
      redirect: '/en'
    },
    {
      path: '/:localeId',
      name: 'Homepage',
      component: Homepage
    }
  ]
})
const locales = ['hr', 'en', 'ge']


router.beforeEach((to,from,next) => {
  if (locales.indexOf(to.params.localeId) < 0) next('en')
  else next()
})


export default router

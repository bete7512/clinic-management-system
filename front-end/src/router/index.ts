import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/unauthenticated/home.vue'
import doctors from '@/components/authenticated/doctors/doctors.vue'
import admins from '@/components/authenticated/admin/admins.vue'
import receptionists from '@/components/authenticated/receptionist/receptionists.vue'
import login from '@/components/unauthenticated/login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    {
      path:'/login',
      name:'login',
      component:login,
      children:[

      ]
    },
    {
      path:'/doctors',
      name:'doctors',
      component:doctors,
      children:[

      ]
    },
    {
      path:'/recieptionists',
      name:'recieptionist',
      component:receptionists,
      children:[

      ]
    },
    {
      path:'/admins',
      name:'admins',
      component:admins,
      children:[

      ]
    },
    // {
    //   path:'/',
    //   name:'',
    //   component:home
    // }
  ]
})

export default router

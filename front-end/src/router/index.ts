import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/unauthenticated/home.vue'
import doctors from '@/components/authenticated/doctors/doctors.vue'
import admins from '@/components/authenticated/admin/admins.vue'
import receptionists from '@/components/authenticated/receptionist/receptionists.vue'
import login from '@/components/unauthenticated/login.vue'
import addpatient from '@/components/authenticated/receptionist/tasks/addpatient.vue'
import addrecieptionists from '@/components/authenticated/admin/tasks/addrecieptionist.vue'
import adddoctors from '@/components/authenticated/admin/tasks/adddoctors.vue'
import doctorsVue from '../components/authenticated/admin/tasks/doctors.vue'
import recieptionistVue from '../components/authenticated/admin/tasks/recieptionsits.vue'
import patients from '@/components/authenticated/common/patients.vue'
import user from '@/components/authenticated/admin/tasks/user.vue'
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
      name:'recieptionists',
      component:receptionists,
      children:[
        {
          name:'addpatients',
          path:'/addpatients',
          component:addpatient
        },
        {
          name:'patients',
          path:'/viewpatients',
          component:patients
        }
      ]
    },
    {
      path:'/admins',
      name:'admins',
      component:admins,
      children:[
        {
          name:'addrecieptionist',
          path:'/addrecieptionists',
          component:addrecieptionists
        },
        {
          name:'adddoctor',
          path:'/adddoctors',
          component:adddoctors
        },
        {
          name:'look_doctors',
          path:'/look_doctors',
          component:doctorsVue
        },
        {
          name:'patientsview',
          path:'/look_patients',
          component:patients
        },
        {
          name:'look_recieptionist',
          path:'/look_recieptionist',
          component:recieptionistVue
        },
        {
          name:'user',
          path:'/look_users',
          component:user
        }
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

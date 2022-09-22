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
import addbills from '@/components/authenticated/receptionist/tasks/addbills.vue'
import addorders from '@/components/authenticated/receptionist/tasks/addorders.vue'
import orders from '@/components/authenticated/common/orders.vue'
import history from '@/components/authenticated/doctors/tasks/history.vue'
import addhistory from '../components/authenticated/doctors/tasks/addhistory.vue'
import prescrition from '@/components/authenticated/receptionist/tasks/prescrition.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: doctors,
      children: [
        {
          name: 'queue',
          path: '/queue_orders',
          component: orders
        },
        {
          name: 'history',
          path: '/look_history',
          component: history
        },
        {
          name: 'addhistory',
          path: '/addhistory',
          component: addhistory
        }
      ]
    },
    {
      path: '/recieptionists',
      name: 'recieptionists',
      component: receptionists,
      children: [
        {
          name: 'addpatients',
          path: '/addpatients',
          component: addpatient
        },
        {
          name: 'patients',
          path: '/viewpatients',
          component: patients
        },
        {
          name: 'addorders',
          path: '/add_orders',
          component: addorders
        },
        {
          name: 'orders',
          path: '/look_orders',
          component: orders
        },
        {
          name: 'addbills',
          path: '/add_bills',
          component: addbills
        },
        {
          name:'prescriptions',
          path:'/print_prescrition',
          component:prescrition
        }
      ]
    },
    {
      path: '/admins',
      name: 'admins',
      component: admins,
      children: [
        {
          name: 'addrecieptionist',
          path: '/addrecieptionists',
          component: addrecieptionists
        },
        {
          name: 'adddoctor',
          path: '/adddoctors',
          component: adddoctors
        },
        {
          name: 'look_doctors',
          path: '/look_doctors',
          component: doctorsVue
        },
        {
          name: 'patientsview',
          path: '/look_patients',
          component: patients
        },
        {
          name: 'look_recieptionist',
          path: '/look_recieptionist',
          component: recieptionistVue
        },
        {
          name: 'user',
          path: '/look_users',
          component: user
        },
      ]
    },
  ]
})
export default router

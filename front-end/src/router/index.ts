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
import printprescrition from '@/components/authenticated/receptionist/tasks/printprescrition.vue'
import printreciet from '@/components/authenticated/receptionist/tasks/printreciet.vue'
import prepareprescription from '@/components/authenticated/receptionist/tasks/prepareprescrition.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: home,
    //   meta: { layout: "empty" },
    // },
    {
      path: '/',
      name: 'login',
      component: login,
      meta: { layout: "empty" },

    },
    {
      path: '/doctors',
      name: 'doctors',
      component: doctors,
      meta:{layout:'doctor'}
    },
    {

      name: 'queue',
      path: '/queue_orders',
      component: orders,
      meta: { layout: 'doctor' }
    },
    {

      name: 'history',
      path: '/look_history',
      component: history,
      meta:{layout:'doctor'}

    },
    {

      name: 'addhistory',
      path: '/addhistory',
      component: addhistory,
      meta:{layout:'doctor'}
    },
    {
      path: '/recieptionists',
      name: 'recieptionists',
      component: receptionists,
      meta: { layout: 'recieptionist' }
    },
    {
      name: 'addpatients',
      path: '/addpatients',
      component: addpatient,
      meta: { layout: 'recieptionist' }
    },
    {
      name: 'patients',
      path: '/viewpatients',
      component: patients,
      meta: { layout: 'recieptionist' }
    },
    {
      name: 'addorders',
      path: '/add_orders',
      component: addorders,
      meta: { layout: 'recieptionist' }
    },
    {
      name: 'orders',
      path: '/look_orders',
      component: orders,
      meta: { layout: 'recieptionist' }
    },
    {
      name: 'addbills',
      path: '/add_bills',
      component: addbills,
      meta: { layout: 'recieptionist' }
    },
    {
      name: 'prescriptions',
      path: '/print_prescrition/:id',
      component: printprescrition,
      meta: { layout: 'recieptionist' }

    },
    {
      name: 'printreciet',
      path: '/print_reciet/:id',
      component: printreciet,
      meta: { layout: 'recieptionist' }

    },
    {
      name: 'prepareprescrition',
      path: '/printprescription',
      component: prepareprescription,
      meta: { layout: 'recieptionist' }
    },
    {
      name: 'addrecieptionist',
      path: '/addrecieptionists',
      component: addrecieptionists,
      meta: { layout: 'admin' },
    },
    {
      path: '/admins',
      name: 'admins',
      component: admins,
      meta: { layout: 'admin' },
    },
    {
      name: 'adddoctor',
      path: '/adddoctors',
      component: adddoctors,
      meta: { layout: 'admin' },

    },
    {
      name: 'look_doctors',
      path: '/look_doctors',
      component: doctors,
      meta: { layout: 'admin' },

    },
    {
      name: 'patientsview',
      path: '/look_patients',
      component: patients,
      meta: { layout: 'admin' },
    },
    {
      name: 'look_recieptionist',
      path: '/look_recieptionist',
      component: recieptionistVue,
      meta: { layout: 'admin' },
    },
    {
      name: 'user',
      path: '/look_users',
      component: user,
      meta: { layout: 'admin' },
    },
  ]
})
export default router

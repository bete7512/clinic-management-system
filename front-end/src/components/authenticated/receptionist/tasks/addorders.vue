<template>
    <div class="flex  justify-center space-x-3  py-5">
        <div class="w-1/3 ">
            <Form class=" justify-center space-y-6 bg-cyan-400 p-10 rounded w-full items-center  p-b-10 px-10"
                @submit.preventDefault="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="space-y-10">
                    <div class="space-y-3">
                        <label>order</label>
                        <Field name="order" type="text" v-model="order" placeholder="enter order number"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid': errors.order }" />
                        <div class="text-red-700">{{errors.order}}</div>
                    </div>
                    <div class="space-y-3">
                        <label>patient id</label>
                        <Field name="pid" type="text" v-model="pid" placeholder="enter order number"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid': errors.pid }" />
                        <div class="text-red-700">{{errors.pid}}</div>
                    </div>
                    <div class="space-y-3">
                        <label>Health number</label>
                        <Field name="health_num" type="text" v-model="health_num" placeholder="Enter health number"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid': errors.health_num }" />
                        <div class="text-red-700">{{errors.health_num}}</div>
                    </div>
                </div>
                <div class="text-red-600">{{loginreturn}}</div>
                <div class="pt-2">
                    <button type="submit" @click="onSubmit"
                        class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <div v-if="registerprocessing" class="text-2xl">
                            <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                                fill="none" xmlns="http://www.w3.org/2000/svg">

                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg>
                            orderring...
                        </div>
                        <div v-else>
                            order
                        </div>
                    </button>
                </div>
            </Form>
        </div>
        <div class="w-1/2  ">
            <div class=" w-3/4 flex justify-center space-x-2">
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 pt-2 items-center pl-2 justify-center pointer-events-none">
                        <svg class="w-7 h-7 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div>
                        <input type="text" v-model="health_num"
                            class="block p-3 pl-8   w-full outline-none transition duration-700 ease-in-out focus:shadow-outline hover:w-full h-16 z-20 border-gray-900  text-sm text-gray-900 border bg-gray-50 rounded dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search" required>
                    </div>
                </div>
                <div class="w-50 h-16 bg-blue-600 rounded flex justify-center items-center">
                    <button
                        class="flex justify-center items-center   p-3   w-24 text-base font-medium text-center text-white transition duration-500 transform  ">Search</button>
                </div>
            </div>
            <div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <th class="py-3 px-6">name</th>
                        <th class="py-3 px-6">health_num</th>
                        <th class="py-3 px-6">patient id</th>
                    </thead>
                    <tbody>
                        <tr v-for="patient in patients"
                            class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td class="py-4 px-6">{{patient.name}}</td>
                            <td class="py-4 px-6">{{patient.health_num}}</td>
                            <td class="py-4 px-6">{{patient.p_id}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <modal :notify="notify" v-if="successmodal" v-on:success="successmodal = false"></modal>
    <div>{{loginreturn}}</div>
</template>
<script setup>
import modal from '@/components/unauthenticated/modal.vue'
import { v4 as uuidv4 } from 'uuid';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import router from '@/router/index'
import { useMutation, useQuery } from '@vue/apollo-composable';
import { ref, reactive, onMounted, computed } from 'vue'
import { defineEmits } from 'vue';
import { add_patients } from '@/tools/query'
import gql from 'graphql-tag';
import { patientStore } from '@/stores/patientStore'
import { query_patient_by_health_num } from '@/tools/query'
const order = ref('')
const health_num = ref('')
const schema = Yup.object().shape({
    name: Yup.string()
        .required('patient name is required'),
    order: Yup.string()
        .min(1, 'order number must be 1 digit and above')
        .required('order is required'),
    pid: Yup.string()
        .min(30, 'paient number must be 36 digit and above')
        .required('patient id is required'),
    health_num: Yup.string().min(4, 'health number is 4 digit').required('health number is required')
})
const notify = ref('patient ordered succefully')
const pid = ref('')
const patient = patientStore()
const successmodal = ref(false)
const registerprocessing = ref(false)
var loginreturn = ref('')
// onMounted(()=>onSubmit())

const onSubmit = async () => {
    loginreturn = "something from here";
    try {
        registerprocessing.value = true
        loginreturn = await patient.addorders(
            parseInt(order.value), health_num.value, pid.value
        )
        successmodal.value = true
        registerprocessing.value = false
    }
    catch (error) {
        loginreturn = error.message
        registerprocessing.value = false
    }
}
const patients = computed(() => result.value?.patients ?? [])
// console.log(patients);
const { error, loading, result } = useQuery(
    query_patient_by_health_num, () => ({
        health_num: health_num.value
    }),
    {
        pollInterval: 100,
    },
)
</script>
<style>

</style>
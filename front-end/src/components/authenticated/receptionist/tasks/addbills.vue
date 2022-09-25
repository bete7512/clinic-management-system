<template>
    <div class="flex  justify-center space-x-3  py-5">
        <div class="w-full  ">
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
                        <th class="py-3 px-6">print reciet</th>
                    </thead>
                    <tbody>
                        <tr v-for="patient in patients"
                            class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td class="py-4 px-6">{{patient.name}}</td>
                            <td class="py-4 px-6">{{patient.health_num}}</td>
                            <td class="py-4 px-6">{{patient.p_id}}</td>
                            <td class="py-4 px-6"><button @click="router.push({name:'printreciet',params:{
                                id:patient.p_id,
                                health_num:patient.health_num
                            }})">print reciept</button></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <modal :notify="notify" v-if="successmodal" v-on:success="successmodal = false"></modal>
</template>
<script setup>
import modal from '@/components/unauthenticated/modal.vue'
import { v4 as uuidv4 } from 'uuid';
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
const notify = ref('patient ordered succefully')
const pid = ref('')
const patient = patientStore()
const successmodal = ref(false)
const registerprocessing = ref(false)
var loginreturn = ref('')
const category = ref('')
const orders = (variables) => {
    registerprocessing.value = true
    patient.addorders(variables)
    registerprocessing.value = false
}
const patients = computed(() => result.value?.patients ?? [])
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
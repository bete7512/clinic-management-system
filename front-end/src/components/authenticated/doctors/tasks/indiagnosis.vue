<template>
    <div class="flex flex-wrap justify-center  ">
        <div class="m-2">
            <div class=" justify-center space-y-6 bg-white p-10 rounded w-full  items-center  p-b-10 px-10">
                <div class="space-y-10">
                    <div class="flex flex-wrap space-x-3">
                        <div class="space-y-3">
                            <label>
                                Disease Name
                            </label>
                            <textarea name="address" type="text" v-model="dname" placeholder="Enter prescrition"
                                class="block h-14 sm:w-full p-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                        </textarea>
                        </div>
                        <div class="space-y-3">
                            <label>
                                Health Number
                            </label>
                            <textarea name="address" type="text" v-model="health_num" placeholder="Enter prescrition"
                                class="block h-14 sm:w-full p-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                        </textarea>
                        </div>
                    </div>
                    <div class="space-y-3" v-for="(index,key) in nlabratory">
                        <label>
                        </label>
                        <textarea name="address" type="text" v-model="labratory[key]" placeholder="Enter prescrition"
                            class="block h-20 w-full p-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                        </textarea>
                    </div>
                    <button
                        class="flex items-center justify-center  px-10 py-2 w-1/3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        @click="nlabratory++">add more lab</button>
                    <div class="space-y-3" v-for="(index,key) in nprescrition">
                        <label>
                            prescrition
                        </label>
                        <textarea name="address" type="text" v-model="prescription[key]" placeholder="Enter prescrition"
                            class="block h-20 w-full p-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                        </textarea>
                    </div>
                    <button
                        class="flex items-center justify-center w-1/3 px-10 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        @click="nprescrition++">add pres</button>
                </div>
                <div>Category</div>
                <div class="w-full flex justify-start items-center  h-12 border">
                    <select class="w-full bg-gray-300 p-4" v-model="category" name="" id="">
                        <option value="emergency">Emergency</option>
                        <option value="General">General</option>
                        <option value="Heart">Heart</option>
                    </select>
                </div>
                <div class="pt-2">
                    <button @click="onSubmit"
                        class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <div v-if="inserting_patient_data" class="text-2xl">
                            <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                                fill="none" xmlns="http://www.w3.org/2000/svg">

                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg>
                            signing...
                        </div>
                        <div v-else>
                            register
                        </div>
                    </button>
                </div>
                <div class="text-red-600">{{loginreturn}}</div>

            </div>
        </div>
        <div 
            class=" m-2 bg-white p-10 p-b-10 md:w-full sm:w-full lg:w-1/3  overflow-scroll rounded flex-wrap ">
            <div v-for="patient in patient_history" :key="patient">
                <div>
                    <h1>Disease Name</h1>
                </div>
                <div>{{patient.diseases_name}}</div>
                <div><h1>Medicine Taken</h1></div>
                <div v-for="med in JSON.parse(patient.prescription).split('~~~')">
                    <div>{{med}}</div>
                </div>
                <h1>Labratory Taken</h1>
                <div v-for="lab in JSON.parse(patient.labratory_result).split('~~~')">
                    <div>{{lab}}</div>
                </div>
                <h1>Due Date</h1>
                <div>{{patient.diagnosis_date}}</div>
                <div>
                    <h1>Doctors</h1>
                </div>
                <div>{{patient.doctor.name}}</div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import router from '@/router/index'
import { patientStore } from '@/stores/patientStore'
import { ref, computed } from 'vue'
import { defineEmits } from 'vue';
import { useRoute } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';
import { query_patient_history_by_id } from '@/tools/query'
import { useMutation, useQuery } from '@vue/apollo-composable';
const route = useRoute()
const dname = ref('')
const phone = ref('')
const address = ref('')
const health_num = ref(route.query.health_num)
const p_id = ref(route.params.id)
const patient = patientStore()
const category = ref('General')
const nprescrition = ref(1)
const nlabratory = ref(1)
const prescription = ref([])
const labratory = ref([])
const inserting_patient_data = ref(false)
let loginreturn = ref('')
console.log(labratory);
const onSubmit = async () => {
    console.log("something");
    // patient.addhistory()
    try {
        inserting_patient_data.value = true,

            patient.addhistory({
                labratory_result: labratory.value,
                diseases_name: dname.value,
                health_num: health_num.value,
                patients: p_id.value,
                h_id: uuidv4(),
                prescription: prescription.value,
                category: category.value
            })
        inserting_patient_data.value = false
    }
    catch (error) {
        loginreturn = error.message
        inserting_patient_data.value = false
    }
}

const patient_history = computed(() => result.value?.history ?? [])
const { error, loading, result } = useQuery(
    query_patient_history_by_id, () => ({
        p_id: p_id.value
    }),
    {
        pollInterval: 100,
    },
)
</script>
<style>

</style>
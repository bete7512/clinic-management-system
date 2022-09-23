<template>
    <div class="flex justify-center items-center py-5  ">
        <div class="w-1/3">
            <Form class=" justify-center space-y-6 bg-cyan-400 p-10 rounded w-full  items-center  p-b-10 px-10"
                @submit.preventDefault="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="space-y-10">
                    <div class="space-y-3">
                        <label>Disease Name</label>
                        <Field name="dname" type="text" v-model="dname" placeholder="enter name of disease"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid': errors.dname }" />
                        <div class="text-red-700">{{errors.dname}}</div>
                    </div>
                    <div class="space-y-3">
                        <label>Labratory </label>
                        <Field name="lab" type="text" v-model="lab" placeholder="enter labratory result"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid'   : errors.lab}" />
                        <div class="text-red-700"> {{errors.lab}} </div>
                    </div>
                    <div class="space-y-3">
                        <label>
                            prescrition
                        </label>
                        <textarea name="address" type="text" v-model="prescrition" placeholder="Enter prescrition"
                            class="block h-20 w-full p-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                        </textarea>
                    </div>
                </div>
                <div class="text-red-600">{{loginreturn}}</div>
                <div class="pt-2">
                    <button type="submit"
                        class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <div v-if="loginprocess" class="text-2xl">
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
            </Form>
        </div>
    </div>
</template>
<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import router from '@/router/index.ts'
// import { userStore } from '@/stores/userstore.js';
import { ref } from 'vue'
import { defineEmits } from 'vue';
const name = ref('')
const phone = ref('')
const address = ref('')
// const health_num =ref('')
const schema = Yup.object().shape({
    name: Yup.string()
        .required('recieptionist name is required'),
    phone: Yup.string()
        .min(9, 'phone must be 9 digit and above')
        .required('recieptionist phone is required'),
    address: Yup.string().required('address is required'),
    // health_num:Yup.string().min(4,'health number is 4 digit').required('health number is required')
})
const emit = defineEmits(['loginSuccess', 'successfulllogin'])
const emitlogin = (event) => {
    emit('loginSuccess')
}
// const user = useStore()

const roles = ref('recieptionsits')
const loginprocess = ref(false)
let loginreturn = ref('')
const onSubmit = async () => {
    try {
        loginprocess.value = true
        // loginreturn.value = await user.login(username.value, password.value)
        emit('loginSuccess')
        emit('successfulllogin')
        loginprocess.value = false
    }
    catch (error) {
        loginreturn = error.message
        loginprocess.value = false
    }
}
</script>
<style>

</style>
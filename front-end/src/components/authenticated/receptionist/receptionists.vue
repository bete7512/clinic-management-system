<template>
    <div class="flex justify-between px-14 items-center w-full h-16  space-x-7 text bg-cyan-600">
        <div class="flex space-x-10">
            <button @click="router.push({name:'addpatients'})">add patients</button>
            <button @click="router.push('/add_bills')">discharge patient</button>
            <button @click="router.push('/print_prescrition')">print prescription</button>
            <button @click="router.push('/add_orders')">add orders</button>
            <button @click="router.push({name:'patients'})">view patient</button>
        </div>
        <div>
            <button @click="user.logout">logout</button>
        </div>
    </div>
    <div class="h-screen p-10">
        <router-view>
        </router-view>
    </div>
</template>
<script setup>
import router from '@/router/index.ts'
import { userStore } from '@/stores/userstore.js'
const user = userStore()
</script>
<sty>
    
</sty>
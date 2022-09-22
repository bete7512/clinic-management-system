<template>
    <div class="flex justify-between px-14 items-center w-full h-16  space-x-7 text bg-cyan-600"> 
        <div class="flex space-x-10">
            <button @click="router.push('/queue_orders')">view ordered patients</button>
            <button @click="router.push('/addhistory')">Add patient history</button>
            <button @click="router.push('/look_history')">look history</button>
        </div>
        <div>
            <button @click="user.logout">logout</button>
        </div>
    </div>
    <div class="h-screen">
        <router-view></router-view>
    </div>
</template>
<script setup>
import router from '@/router/index.ts'
import { userStore } from '@/stores/userstore.js'
const user = userStore()
</script>
<sty>
    
</sty>
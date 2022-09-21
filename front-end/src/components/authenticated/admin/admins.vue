<template>
    <div class="flex justify-between px-14 items-center w-full h-16  space-x-7 text bg-cyan-600"> 
        <div class="flex space-x-10">
            <button @click="router.push('/addrecieptionists')">Add recieptionists</button>
            <button @click="router.push('/adddoctors')">add Doctors</button>
            <button @click="router.push('/look_patients')">view patient</button>
            <button @click="router.push('/look_doctors')">view doctors</button>
            <button @click="router.push('/look_users')">view users</button>
            <button @click="router.push('/look_recieptionist')">view recieptionists</button>
        </div>
        <div>
            <button @click="router.push('/')">logout</button>
        </div>
    </div>
    <div class="h-auto">
        <router-view></router-view>
    </div>
</template>
<script setup>
import router from '@/router/index.ts'
</script>
<sty>
    
</sty>
<template>
    <div class="flex justify-between px-14 items-center w-full h-16  space-x-7 text bg-cyan-600">
        <div class="flex space-x-10">
            <button @click="router.push({name:'addpatients'})">add patients</button>
            <button>discharge patient</button>
            <button>print prescription</button>
            <button>add orders</button>
            <button @click="router.push({name:'patients'})">view patient</button>
        </div>
        <div>
            <button>logout</button>
        </div>
    </div>
    <div class="h-auto p-10">
        <router-view>
        </router-view>
    </div>
</template>
<script setup>
import router from '@/router/index.ts'
</script>
<sty>
    
</sty>
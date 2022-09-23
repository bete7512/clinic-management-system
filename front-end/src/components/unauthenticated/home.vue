<template>
    <div class=" bg-slate-400  h-screen w-full  flex items-center justify-center">
        <div class="bg-white rounded-full shadow-xl  w-1/2 h-1/2 ">
            <div class="flex justify-center items-center w-full h-full bg-sky-400">
                <div class="space-y-8">
                    <div class="flex font-bold italic text-2xl justify-center items-center">
                        WELLCOME TO OUR CLINIC MANAGEMENT SYSTEM
                    </div>
                    <div class="flex justify-center items-end">
                        <button @click="router.push('/login')"
                            class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-yellow-700 rounded-xl hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700">Enter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import router from '@/router/index.ts'

</script>
<style scoped>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
}
</style>
<template>
    <div class="flex justify-between px-14 items-center w-full h-16  space-x-7 text bg-cyan-600">
        <div class="flex space-x-10">
            <button>add patients</button>
            <button>discharge patient</button>
            <button>Link existing patients with doctors</button>
            <button>view patient</button>
        </div>
        <div>
            <button>logout</button>
        </div>
    </div>
    <div class="h-auto">
        <router-view></router-view>
    </div>
</template>
<script setup>

</script>
<sty>
    
</sty>
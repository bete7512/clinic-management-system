<template>
<div>
    <div>
    <h3 class="text-3xl font-medium text-gray-700">Dashboard / {{current}}</h3>
    </div>
    
    <div class="mt-5">
        <router-view></router-view>
    </div>
</div>   
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import {ref,computed} from 'vue'
const { currentRoute } = useRouter();
const current = computed(()=>currentRoute.value.name || '')
// console.log(current);
</script>
<sty>
    
</sty>
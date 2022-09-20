<template>
    <div class="fixed top-5 right-5  z-50 place-items-end justify-end">
      <div class=" h-16 w-60 bg-green-600 rounded-md">
          <div class="text-white inline-flex p-4 py-2 mt-2"> {{notify}}
          </div>
      </div>
    </div>
  </template>
  <script setup>
  import { onMounted, defineProps, defineEmits } from 'vue';
  const props = defineProps({notify:String})
  const emit = defineEmits(['success'])
  onMounted(()=>{setTimeout(()=>{ emit('success') },1000)})
  </script>
  <style>
  </style>
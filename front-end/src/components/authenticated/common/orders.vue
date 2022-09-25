<template>
    <div>
        <div v-if="error">something were wrong</div>
        <div v-if="loading">downloading</div>
        <div v-else>
            <div class="text-2xl p-3 font-bold">Orders for Emergency</div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="py-3 px-6">Patient name</th>
                        <th class="py-3 px-6"> Health Number</th>
                        <th class="py-3 px-6"> patient ID</th>
                        <th class="py-3 px-6"> date</th>
                        <th class="py-3 px-6"> orders</th>
                        <th class="py-3 px-6">status</th>
                        <th class="py-3 px-6">category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in emergency_order.filter((element:any)=>element.categories == 'emergency')"
                        class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">{{order.patient.name}}</td>
                        <td class="py-4 px-6">{{order.health_num}}</td>
                        <td class="py-4 px-6">{{order.p_id}}</td>
                        <td class="py-4 px-6">{{order.queued_at}}</td>
                        <td class="py-4 px-6">{{order.order}}</td>
                        <td class="py-4 px-6">waiting or done</td>
                        <td class="py-4 px-6">{{order.categories}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="text-2xl p-3 font-bold">Orders for Heart </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="py-3 px-6">Patient name</th>
                        <th class="py-3 px-6"> Health Number</th>
                        <th class="py-3 px-6"> patient ID</th>
                        <th class="py-3 px-6"> date</th>
                        <th class="py-3 px-6"> orders</th>
                        <th class="py-3 px-6">status</th>
                        <th class="py-3 px-6">category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in emergency_order.filter((element:any)=>element.categories == 'Heart')"
                        class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">{{order.patient.name}}</td>
                        <td class="py-4 px-6">{{order.health_num}}</td>
                        <td class="py-4 px-6">{{order.p_id}}</td>
                        <td class="py-4 px-6">{{order.queued_at}}</td>
                        <td class="py-4 px-6">{{order.order}}</td>
                        <td class="py-4 px-6">waiting or done</td>
                        <td class="py-4 px-6">{{order.categories}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="text-2xl p-3 font-bold">Orders for General</div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="py-3 px-6">Patient name</th>
                        <th class="py-3 px-6"> Health Number</th>
                        <th class="py-3 px-6"> patient ID</th>
                        <th class="py-3 px-6"> date</th>
                        <th class="py-3 px-6"> orders</th>
                        <th class="py-3 px-6">status</th>
                        <th class="py-3 px-6">category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in emergency_order.filter((element:any)=>element.categories == 'General')"
                        class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">{{order.patient.name}}</td>
                        <td class="py-4 px-6">{{order.health_num}}</td>
                        <td class="py-4 px-6">{{order.p_id}}</td>
                        <td class="py-4 px-6">{{order.queued_at}}</td>
                        <td class="py-4 px-6">{{order.order}}</td>
                        <td class="py-4 px-6">waiting or done</td>
                        <td class="py-4 px-6">{{order.categories}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useMutation, useQuery } from '@vue/apollo-composable';
import { query_orders } from '@/tools/query'
import { computed,ref } from 'vue';
import router from '@/router';
const emergency_order = computed(() =>result.value?.orders_token ?? [])
console.log(emergency_order);

const { error, loading, result } = useQuery(
    query_orders
)
</script>
<style lang="">
    
</style>
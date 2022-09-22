<template>
    <div>
        <div v-if="error">something were wrong</div>
        <div v-if="loading">downloading</div>
        <div v-else>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="py-3 px-6">Patient name</th>
                        <th class="py-3 px-6"> Health Number</th>
                        <th class="py-3 px-6"> patient ID</th>
                        <th class="py-3 px-6"> date</th>
                        <th class="py-3 px-6"> orders</th>
                        <th class="py-3 px-6">status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in result.orders_token"
                        class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-4 px-6">{{order.patient.name}}</td>
                        <td class="py-4 px-6">{{order.health_num}}</td>
                        <td class="py-4 px-6">{{order.p_id}}</td>
                        <td class="py-4 px-6">{{order.queued_at}}</td>
                        <td class="py-4 px-6">{{order.order}}</td>
                        <td class="py-4 px-6">waiting or done</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useMutation, useQuery } from '@vue/apollo-composable';
import { query_orders } from '@/tools/query'
import router from '@/router';
const { error, loading, result } = useQuery(
    query_orders
)
</script>
<style lang="">
    
</style>
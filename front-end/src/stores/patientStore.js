import { defineStore } from 'pinia'
import { add_patients,max_orders, insert_orders,insert_history } from '@/tools/query';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
import { v4 as uuidv4 } from 'uuid';
provideApolloClient(apolloClient);
export const patientStore = defineStore("patient", {
    state: () => ({
        health_num: ''
    }),
    actions: {
        async addpatient(variables) {
            console.log(variables);
            try {
                const result = await apolloClient.mutate({
                    mutation: add_patients,
                    variables
                })
                console.log(result);
                return
            }
            catch (error) {
                console.log(error.message);
                return error.message
            }
        },
        async addorders(variables) {
            console.log(variables);
            try {
                const max_order = await apolloClient.query({
                    query:max_orders,
                    variables:{
                        category:variables.category
                    }
                })
                var order =  max_order.data.orders_token_aggregate.aggregate.max.order ? max_order.data.orders_token_aggregate.aggregate.max.order: 0;
                console.log(order);
                const result = await apolloClient.mutate({
                    mutation: insert_orders,
                    variables: {
                        order: ++order,
                        health_num: variables.health_num,
                        p_id: variables.p_id,
                        categories:variables.category
                    }
                })
                console.log(result);
            }
            catch (error) {
                console.log(error);
            }
        },
        async addhistory(variables){
            console.log(variables);
            console.log("we dont know about it");
            try {
                const result = await apolloClient.mutate({
                    mutation: insert_history,
                    variables:{
                        diseases_name:variables.diseases_name,
                        category:variables.category,
                        h_id:variables.h_id,
                        health_num:variables.health_num,
                        labratory_result:JSON.stringify(variables.labratory_result.join('~~~')),
                        patients:variables.patients,
                        prescription:JSON.stringify(variables.prescription.join('~~~')),
                    }
                })

                console.log(result);
                return
            } catch(error){
                console.log(error);
            }
        }
    },
    getters: {

    },
    persist: {
        enabled: false,
        mode: "localSession"
    }

})
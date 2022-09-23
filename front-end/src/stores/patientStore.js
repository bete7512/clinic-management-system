import { defineStore } from 'pinia'
import { add_patients, insert_orders,insert_history } from '@/tools/query';
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
            }catch (error) {
                console.log(error.message);
                return error.message
            }
        },
        async addorders(order, health_num, p_id) {
            console.log(order + health_num + p_id);
            try {
                const result = await apolloClient.mutate({
                    mutation: insert_orders,
                    variables: {
                        order: order,
                        health_num: health_num,
                        p_id: p_id
                    }
                })
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        },
        async addhistory(variables) {
            try {
                const result = await apolloClient.mutate({
                    mutation: insert_history,
                    variables
                })
                console.log(result);
                return
            } catch(error){


                
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
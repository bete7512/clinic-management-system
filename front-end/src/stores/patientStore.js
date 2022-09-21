import { defineStore } from 'pinia'
import { add_patients } from '@/tools/query';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
import { v4 as uuidv4 } from 'uuid';
provideApolloClient(apolloClient);
export const patientStore = defineStore("patient", {
    state: () => ({
        health_num:''
    }),
    actions: {
        async addpatient(variables){
            console.log(variables);
            try{
                const result = await apolloClient.mutate({
                    mutation: add_patients,
                    variables
                })
                console.log(result);
                return
            } catch (error) {
                console.log(error.message);
                return error.message
            }
        },
    },
    getters: {

    },
    persist: {
        enabled: false,
        mode: "localSession"
    }

})
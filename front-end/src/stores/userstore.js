import { defineStore } from 'pinia'
import { login, register_doctors, register_recieptionist, add_bills } from '@/tools/query';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
provideApolloClient(apolloClient);
export const userStore = defineStore("user", {
    state: () => ({
        username: '',
        userid: '',
    }),
    actions: {
        async registerdoctor(variables) {
            try {
                const result = await apolloClient.mutate({
                    mutation: register_doctors,
                    variables
                })
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        },
        async registerrecieptionist(variables) {
            try {
                const result = await apolloClient.mutate({
                    mutation: register_recieptionist,
                    variables
                })
                console.log(result);

            } catch (error) {
                console.log(error);
            }
        },
        async login(username, password) {
            try {
                const result = await apolloClient.mutate({
                    mutation: login,
                    variables: {
                        username: username,
                        password: password,
                    }
                })
                localStorage.setItem("Apollotoken", result["data"]["login"]["accessToken"]);
                this.username = username
                this.userid = result.data.login.id
                this.isauthenticated = true,
                    console.log(result["data"]["login"]);
                router.push({ name: result["data"]["login"]["roles"] });
                console.log(result);
                return
            } catch (error) {
                console.log(error);
                return error.message
            }
        },
        async add_bills(variables){
            try {
                const result = await apolloClient.mutate({
                    mutation: add_bills,
                    variables
                })
            }
            catch (error) {
                console.log(error);
            }
        },
        logout() {
            localStorage.removeItem('Apollotoken');
            this.isauthenticated = false,
            router.push('/');
        },
    },
    getters: {

    },
    persist: {
        enabled: true,
        mode: "localSession"
    }

})
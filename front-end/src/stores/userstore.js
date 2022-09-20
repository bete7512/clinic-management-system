import { defineStore } from 'pinia'
import { register, signin, user_profile_query } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
provideApolloClient(apolloClient);

export const useStore = defineStore("user", {
    state: () => ({
        username: '',
        full_name:'',
        userid:'',
    }),
    actions: {
        async signup(fname, lname, username, email, password,) {
            try {
                const response = await apolloClient.mutate({
                    mutation: register,
                    variables: {
                        fname: fname,
                        lname: lname,
                        username: username,
                        phone: email,
                        password: password
                    }
                })
                return response.data.register.Success
            } catch (error) {
                return error.message
            }
        },
        async login(username, password,roles){
            try {
                const result = await apolloClient.mutate({
                    mutation: signin,
                    variables: {
                        username: username,
                        password: password,
                    }
                })
               localStorage.setItem("Apollotoken", result["data"]["login"]["accessToken"]);
                this.username = username
                this.userid = result.data.login.id
                this.isauthenticated = true,
                 await this.user_profile();
                router.push({ name: roles });
                return
            } catch (error) {
                return error.message
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
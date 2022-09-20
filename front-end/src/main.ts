import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router  from './router/index'
import apolloclient from './apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './main.css'
// import piniaPersist from 'pinia-plugin-persist'
const pinia = createPinia()
// pinia.use(piniaPersist)
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloclient)
  },
  render: ()=> h(App),
});
app.use(pinia)
app.use(router)
app.mount('#app');

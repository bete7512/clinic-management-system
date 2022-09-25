import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router  from './router/index'
import apolloclient from './apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './main.css'
import layouta from './components/layouts/layouta.vue'
import layoutd from './components/layouts/layoutd.vue'
import layoutr from './components/layouts/layoutr.vue'
import emptylayout from './components/layouts/common/emtylayout.vue'
const pinia = createPinia()
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloclient)
  },
  render: ()=> h(App),
});

app.component('admin-layout', layouta);
app.component('recieptionist-layout', layoutr);
app.component('doctor-layout', layoutd);
app.component('empty-layout', emptylayout);
app.use(pinia)
app.use(router)
app.mount('#app');

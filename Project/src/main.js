
import { createApp } from 'vue';
import App from './App.vue';
import mycomp from './components/mycomp.vue';

const app = createApp(App);
const app2 = createApp(mycomp);

app2.mount('#app2');
app.component('mycomp',mycomp);

app.mount('#app');

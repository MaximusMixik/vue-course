import { createApp } from 'vue'
import App from './App.vue'
import createStore from "./store";
import router from "./router";


// import './assets/tailwind.css'
// console.log(createStore)



const app = createApp(App)


// lesson 13
// register an options object (global component)
// import MainLayout from './layout/MainLayout.vue'
// import AuthLayout from './layout/AuthLayout.vue'
// app.component('MainLayout', MainLayout)
// app.component('AuthLayout', AuthLayout)

// lesson 13 task1
import AppLayout from './pages/Lessons/13/task1/layout/AppLayout.vue'
app.component('AppLayout', AppLayout)
import SecondaryLayout from './pages/Lessons/13/task1/layout/SecondaryLayout.vue'
app.component('SecondaryLayout', SecondaryLayout)


app.use(createStore).use(router).mount('#app')

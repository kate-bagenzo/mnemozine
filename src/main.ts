import { createApp } from 'vue'
import './styles/style.scss'
import App, { router } from './App.vue'

const app = createApp(App);
app.use(router);

app.mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})

import { createApp } from 'vue/dist/vue.esm-bundler';

createApp({
    data() {
      return {
        message: 'Hello Vue!',
        count: 0
      }
    }
  }).mount('#app')


import { createApp } from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';
export class Login {
  constructor() {
    createApp({
      components: {
        ExampleComponent,
      },
      mounted() {
        console.log('Login class created');
      },
    }).mount('#app');
  }
}

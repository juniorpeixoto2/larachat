require('./bootstrap');

window.Vue = require('vue').default;
import store from './vuex/store';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('chat-component', require('./components/Chat/ChatComponent.vue').default);

const app = new Vue({
    el: '#app',
    store
});

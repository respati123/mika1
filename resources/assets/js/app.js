
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('location-programs', require('./components/LocationsComponent.vue'));
Vue.component('loyalty-programs', require('./components/LoyaltyPrograms.vue'));
Vue.component('categories-component', require('./components/CategoriesComponent.vue'));
Vue.component('classes-component', require('./components/ClassesComponent.vue'));
Vue.component('building-component', require('./components/BuildingComponent.vue'));
Vue.component('vehicletype-component', require('./components/VehicleTypeComponent.vue'));
Vue.component('vehiclebrand-component', require('./components/VehicleBrandComponent.vue'));

const app = new Vue({
    el: '#app'
});

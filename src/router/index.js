    import Vue from 'vue';
    import Login from "../components/Login.vue";
    import Hobby from "../components/hobby.vue";
    import Router from 'vue-router';

    Vue.use(Router);


  export default new Router({
      routes: [
          {
              path: '/',
              name: 'Login',
              component: Login

          },
          {
              path: '/hobby',
              name: 'Hobby',
              component: Hobby

          }
      ]
  });

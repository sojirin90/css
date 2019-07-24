




<template>
<!--    <div class="row my-5 text-center">-->
<!--        <div class="col-md-6 offset-md-3">-->
<!--            <div class="card">-->
<!--                <div class="card-body">-->
<!--                    <h3 class="text-center my-4">Login</h3>-->



<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

    <div class="container" style="width: 30%; min-height: 100% !important">
        <div class="text-center align-middle justify-content-center p-l-10">
            <h3 class="header"> Login </h3>
            <div class="form-group p-10">
                <input v-bind:class="{ 'is-invalid': errors.email }" v-model="email" type="text" placeholder="Email" class="form-control">
                <div class="errors" v-if="errors.email">
                    <small class="text-danger" :key="error" v-for="error in errors.email">{{ error }}</small>
                </div>
            </div>
            <div class="form-group">
                <input v-bind:class="{ 'is-invalid': errors.password }" v-model="password" type="Password" placeholder="Password" class="form-control">
                <div class="errors" v-if="errors.password">
                    <small class="text-danger" :key="error" v-for="error in errors.password">{{ error }}</small>
                </div>
            </div>
            <div class="form-group text-center">
                <button  @click="$router.push('hobby')" :disabled="loading" class="btn form-control btn-success">
                    <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                    {{ loading ? '' : 'Login' }}
                </button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            errors: {},
            loading: false,
        };
    },
    methods: {
      loginUser(){
          this.$router.push("home");
      }
    }
};
</script>

<style>


</style>

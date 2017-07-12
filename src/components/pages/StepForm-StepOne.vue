<template>
  <div class="col-md-12">
    <h2>User Account</h2>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="form-group" :class="{ 'has-error': showError('email') }">
          <label for="email">Email</label>
          <input autocomplete="nope" v-validate="'required|email'" v-model="inputs.email" name="email" type="text" class="form-control">
          <span v-show="showError('email')" class="text-danger">{{ errors.first('email') }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': showError('username') }">
          <label for="username">Username</label>
          <input autocomplete="nope" v-validate="'required|alpha_dash'" v-model="inputs.username" name="username" type="text" class="form-control">
          <span v-show="showError('username')" class="text-danger">{{ errors.first('username') }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': showError('password') }">
          <label for="email">Password</label>
          <input autocomplete="nope" v-validate="'alpha_dash|required|confirmed:repeatPassword'" v-model="inputs.password" name="password" type="password" class="form-control">
          <span v-show="showError('password')" class="text-danger">{{ errors.first('password') }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': showError('repeatPassword') }">
          <label for="email">Repeat Password</label>
          <input autocomplete="off" v-validate="'alpha_dash|required|confirmed:password'" v-model="inputs.repeatPassword" name="repeatPassword" type="password" class="form-control">
          <span v-show="showError('repeatPassword')" class="text-danger">{{ errors.first('repeatPassword') }}</span>
        </div>
        <div class="form-group">
          <div class="pull-right">
            <button v-if="showSubmitButton" @click="goToNextStep()" class="btn btn-primary">Next <i class="fa fa-forward"></i></button>
            <button v-else disabled class="btn btn-primary">Next <i class="fa fa-forward"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {componentWithFormMixin, stepFormMixin} from '../../mixins';

  export default {
    name: 'step-form-page-step-one',
    mixins: [
      componentWithFormMixin,
      stepFormMixin
    ],
    data() {
      return {
        inputs: {
          email: '',
          username: '',
          password: '',
          repeatPassword: ''
        },
        nextStepName: 'step-form-step-two',
        dataPathName: 'account'
      }
    },
    methods: {
    },
    mounted() {
      this.$nextTick(() => {
        this.getDataFromSession();
        if (!this.areAnyInputsEmpty()) {
          this.setAllInputsStates({ valid: true, dirty: true });
        }
      });
    }
  }
</script>

<style>
  
</style>
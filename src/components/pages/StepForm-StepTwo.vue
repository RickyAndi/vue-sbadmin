<template>
  <div class="col-md-12">
    <h2>User Profile</h2>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="form-group" :class="{ 'has-error': showError('firstName') }">
          <label class="control-label" for="firstName">First Name</label>
          <input v-model="inputs.firstName" v-validate="'required|alpha'" name="firstName" type="text" class="form-control">
          <span v-show="showError('firstName')" class="text-danger">{{ errors.first('firstName') }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': showError('lastName') }">
          <label class="control-label" for="lastName">Last Name</label>
          <input v-model="inputs.lastName" v-validate="'required|alpha'" name="lastName" type="text" class="form-control">  
          <span v-show="showError('lastName')" class="text-danger">{{ errors.first('lastName') }}</span>
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <select v-model="inputs.gender" class="form-control" name="gender">
            <option :value="'male'" selected="">Male</option>
            <option :value="'female'">Female</option>
          </select>
        </div>
        <div class="form-group">
          <div class="pull-left">
            <router-link :to="{name: 'step-form-step-one'}" class="btn btn-primary"><i class="fa fa-backward"></i> Previous</router-link>
          </div>
          <div class="pull-right">
            <button class="btn btn-primary" @click="goToNextStep()" v-if="showSubmitButton">Next <i class="fa fa-forward"></i></button>
            <button class="btn btn-primary" disabled v-else>Next <i class="fa fa-forward"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import session from '../../services/session';
  import {componentWithFormMixin, stepFormMixin} from '../../mixins';

  export default {
    name: 'step-form-page-step-two',
    mixins: [
      componentWithFormMixin,
      stepFormMixin
    ],
    data() {
      return {
        inputs: {
          firstName: '',
          lastName: '',
          gender: 'male'
        },
        nextStepName: 'step-form-step-three',
        dataPathName: 'profile'
      };
    },
    methods: {
    },
    mounted() {
      this.getDataFromSession();
      if (!this.areAnyInputsEmpty()) {
        this.setAllInputsStates({ valid: true, dirty: true });
      }
    }
  }
</script>

<style>
  
</style>
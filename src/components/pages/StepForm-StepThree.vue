<template>
  <div class="col-md-12">
    <h2>User Payment</h2>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="form-group" :class="{ 'has-error': showError('bankName') }">
          <label for="bankName" class="control-label">Bank Name</label>
          <input v-model="inputs.bankName" v-validate="'required'" name="bankName" type="text" class="form-control">
          <span v-show="showError('bankName')" class="text-danger">{{ errors.first('bankName') }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': showError('accountNumber') }">
          <label for="accountNumber">Account Number</label>
          <input v-model="inputs.accountNumber" v-validate="'required'" name="accountNumber" type="text" class="form-control">
          <span v-show="showError('accountNumber')" class="text-danger">{{ errors.first('accountNumber') }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': showError('accountName') }">
          <label for="accountName">Account Name</label>
          <input v-model="inputs.accountName" v-validate="'required'" name="accountName" type="text" class="form-control">
          <span v-show="showError('accountName')" class="text-danger">{{ errors.first('accountName') }}</span>
        </div>
        <div class="form-group">
          <div class="pull-left">
            <router-link :to="{name: 'step-form-step-two'}" class="btn btn-primary"><i class="fa fa-backward"></i> Previous</router-link>
          </div>
          <div class="pull-right">
            <button v-if="showSubmitButton" class="btn btn-success" @click="goToNextStep()">Summary <i class="fa fa-forward"></i></button>
            <button disabled v-else class="btn btn-success">Summary <i class="fa fa-forward"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {componentWithFormMixin, stepFormMixin} from '../../mixins';

  export default {
    name: 'step-form-page-step-three',
    mixins: [
      componentWithFormMixin,
      stepFormMixin
    ],
    data() {
      return {
        inputs: {
          bankName: '',
          accountNumber: '',
          accountName: ''
        },
        nextStepName: 'step-form-summary',
        dataPathName: 'payment'
      }
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
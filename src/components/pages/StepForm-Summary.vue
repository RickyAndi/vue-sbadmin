<template>
  <div class="col-md-12">
    <h2>Summary</h2>
    <table class="table table-default table-bordered">
      <thead>
        <tr>
          <th><strong>Account</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Username</th>
          <td>{{ data.account.username }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ data.account.email }}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th><strong>Profile</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>First Name</th>
          <td>{{ data.profile.firstName }}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{{ data.profile.lastName }}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{{ data.profile.gender }}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th><strong>Payment</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Bank Name</th>
          <td>{{ data.payment.bankName }}</td>
        </tr>
        <tr>
          <th>Account Number</th>
          <td>{{ data.payment.accountNumber }}</td>
        </tr>
        <tr>
          <th>Account Name</th>
          <td>{{ data.payment.accountName }}</td>
        </tr>
      </tbody>
    </table>
    <div class="form-group">
      <div class="pull-left">
        <router-link :to="{name: 'step-form-step-three'}" class="btn btn-primary"><i class="fa fa-backward"></i> Previous</router-link>
      </div>
      <div class="pull-right">
        <button @click="submit()" class="btn btn-success">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  import session from '../../services/session';
  import notification from '../../services/notification';
  const config = require('../../config.json');

  export default {
    name: 'step-form-page-step-summary',
    data() {
      return {
        data: {
          account: {
            username: '',
            email: ''
          },
          profile: {
            firstName: '',
            lastName: '',
            gender: ''
          },
          payment: {
            bankName: '',
            accountNumber: '',
            accountName: ''
          }
        }
      }
    },
    methods: {
      setData(stepFormData) {
        Object.keys(this.data).forEach((parentKey) => {
          Object.keys(this.data[parentKey]).forEach((childKey) => {
            this.data[parentKey][childKey] = stepFormData[parentKey][childKey];
          })
        });
      },
      submit() {
        console.log(this.data);
        notification.success('Your data has been submitted');
        setTimeout(() => {
          this.resetStepFormData();
          this.goToFirstStep();
        }, 2000)
      },
      goToFirstStep() {
        this.$router.push({
          name: 'StepForm'
        })
      },
      resetStepFormData() {
        const stepFormData = {
          account: {
            username: '',
            email: '',
            password: '',
            repeatPassword: ''
          },
          profile: {
            firstName: '',
            lastName: '',
            gender: 'male'
          },
          payment: {
            bankName: '',
            accountNumber: '',
            accountName: ''
          }
        };
        session.set(config['session_key']['step_form_data'], JSON.stringify(stepFormData));
      }
    },
    mounted() {
      const stepFormData = JSON.parse(session.get(config['session_key']['step_form_data']));
      this.setData(stepFormData)
    }
  }
</script>

<style>
  
</style>
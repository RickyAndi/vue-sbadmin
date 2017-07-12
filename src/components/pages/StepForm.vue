<template>
  <div class="container-fluid" id="step-form-page">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          Step Form
        </h1>
        <ol class="breadcrumb">
          <li class="active">
            <i class="fa fa-fw fa-mail-forward"></i> Step Form
          </li>
        </ol>
      </div>
    </div>
    <div class="row form-group">
      <div class="col-xs-12">
        <ul class="nav nav-pills nav-justified thumbnail setup-panel">
          <li class="disabled" :class="{'active': $route.path === '/step-form/step-one'}">
            <a href="#">
              <h4 class="list-group-item-heading">Step 1</h4>
              <p class="list-group-item-text">User Account</p>
            </a>
          </li>
          <li class="disabled" :class="{'active': $route.path === '/step-form/step-two'}">
            <a href="#">
              <h4 class="list-group-item-heading">Step 2</h4>
              <p class="list-group-item-text">User Profile</p>
            </a>
          </li>
          <li class="disabled" :class="{'active': $route.path === '/step-form/step-three'}">
            <a href="#">
              <h4 class="list-group-item-heading">Step 3</h4>
              <p class="list-group-item-text">User Payment</p>
            </a>
          </li>
          <li class="disabled" :class="{'active': $route.path === '/step-form/summary'}">
            <a href="#">
              <h4 class="list-group-item-heading">Step 4</h4>
              <p class="list-group-item-text">Summary</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <transition name="fade">
        <router-view></router-view> 
      </transition>
    </div>
  </div>
</template>

<script>
  import session from '../../services/session';
  const config = require('../../config.json');

  export default {
    name: 'StepForm',
    mounted() {
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
    },
    destroyed() {
      session.remove(config['session_key']['step_form_data']);
    }
  }
</script>

<style scoped>
  #step-form-page {
    min-height: 1000px;
  }
  .active-route {
    background-color: #337ab7;
    color: white;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
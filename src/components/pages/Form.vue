<template>
  <div class="container-fluid" id="form-page">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          Form
        </h1>
        <ol class="breadcrumb">
          <li class="active">
            <i class="fa fa-keyboard-o"></i> Form
          </li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-sign-in fa-fw"></i> Login Form</h3>
          </div>
          <div class="panel-body">
            <div class="form-group" :class="{ 'has-error': showError('username') }">
              <label for="username" class="control-label">Username</label>
              <input v-model="inputs.username" v-validate="'required'" type="text" class="form-control" name="username">
              <span v-show="showError('username')" class="text-danger">{{ errors.first('username') }}</span>
            </div>
            <div class="form-group" :class="{ 'has-error': showError('password') }">
              <label for="password" class="control-label">Password</label>
              <input v-model="inputs.password" v-validate="'required'" type="password" class="form-control" name="password">
              <span v-show="showError('password')" class="text-danger">{{ errors.first('password') }}</span>
            </div>
            <div class="form-group">
              <button v-if="!areAllInputsDirty || errors.any()" class="btn btn-primary" disabled>Login</button>
              <button @click="submit()" v-if="areAllInputsDirty && !errors.any()" class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import notification from '../../services/notification';
  import componentWithFormMixins from '../../mixins/componentWithForm';

  export default {
    name: 'Form-page',
    mixins: [componentWithFormMixins],
    data() {
      return {
        inputs: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      submit() {
        this.emptyAllInputs();
        this.$nextTick(() => {
          Object.keys(this.fields).forEach((inputName) => {
            this.resetInput(inputName);
          });
          this.errors.clear();
          notification.success('Your data have been submited :)');
        })
      }
    },
    mounted() {
      console.log(this.$root)
    }
  }
</script>

<style scoped>
  #form-page {
    min-height: 1000px;
  }
</style>
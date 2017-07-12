<template>
	<div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          User Data
        </h1>
        <ol class="breadcrumb">
          <li class="active">
            <i class="fa fa-user"></i> User Data
          </li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link class="btn btn-primary pull-right" :to="{name: 'User'}"><i class="fa fa-backward"></i> Back</router-link>
      </div>
      <div class="col-md-12" style="margin-top: 30px;">
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>{{ user.name }}</th>
              </tr>
              <tr>
                <th>Address</th>
                <th>{{ user.address }}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ul class="nav nav-tabs">
          <router-link tag="li" :to="{ name: 'UserData-Marks' }">
            <a><strong>Lessons Score</strong></a>
          </router-link>
          <router-link tag="li" :to="{ name: 'UserData-Food' }">
            <a><strong>Food</strong></a>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import User from '../../models/User';
  import http from '../../services/http';

  export default {
    name: 'User-data-page',
    data() {
      return {
        user: new User({name: null, address: null}),
        userId: null
      }
    },
    mounted() {
      this.userId = this.$route.params.userId;
    },
    methods: {
      setUser(userData) {
        this.user.name = userData.name;
        this.user.address = userData.address;
      }
    },
    beforeRouteEnter (to, from, next) {
      const userUrl = 'http://localhost:9000/users/mark/' + to.params.userId;
      http.get(userUrl)
        .then((userData) => {
          next(vm => vm.setUser(userData));
        })
    },
  }
</script>

<style scoped>
  .router-link-active > a {
    color: #555;
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
  }
</style>
<template>
  <div class="container-fluid page-component">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          User
        </h1>
        <ol class="breadcrumb">
          <li class="active">
            <i class="fa fa-user"></i> User
          </li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h2>User List</h2>
      </div>
      <div class="col-md-12" v-if="!requestError">
        <v-client-table ref="dataTable" :data="users" :columns="columns" :options="options" >
          <template slot="actions" scope="props">
            <div>
              <button class="btn btn-success btn-xs" @click="seeDetail(props.row.id)">See details</button>
            </div>
          </template>
        </v-client-table>
        <pagination 
          :currentPage="currentPage" 
          :numberOfPages="numberOfPages" 
          :numberOfPaginationDisplayed="numberOfPaginationDisplayed"
          @page-change="changePage"
        ></pagination>
      </div>
      <div v-else class="col-md-12">
        <table class="table table-default">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center;" colspan="3"><h3>{{ requestErrorMessage }}</h3></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http';
  import User from '../../models/User';
  import OddNumber from '../../object_values/OddNumber';
  import Pagination from '../Pagination';
  import session from '../../services/session';
  const config = require('../../config.json');

  export default {
    name: 'User-page',
    components: {
      pagination: Pagination
    },
    data() {
      return {
        users: [],
        columns: ['name', 'address', 'actions'],
        options: {

        },
        requestError: false,
        requestErrorMessage: '',
        numberOfPaginationDisplayed: new OddNumber(5),
        numberOfPages: 0,
        currentPage: 1
      }
    },
    mounted() {
    
    },
    methods: {
      setUsers(usersData) {
        const usersInstances = usersData.map((userData) => {
          return new User(userData);
        });
        this.users = usersInstances;
      },
      seeDetail(userId) {
        this.$router.push({
          name: 'UserData',
          params: {
            userId: userId
          }
        })
      },
      whenRequestError(error) {
        this.requestErrorMessage = error.message;
      },
      setIfRequestError(bool) {
        this.requestError = bool;
      },
      test() {
        this.$refs.dataTable.setPage(2);
      },
      changePage(args) {
        const userUrl = config['server_root'] + '/users?page=' + args.page;
        http.get(userUrl)
          .then((response) => {
            this.setUsers(response.data);
            this.setIfRequestError(false);
            this.numberOfPages = response.totalPages;
            this.currentPage = response.page;
            session.set(config['session_key']['user_page_current_pagiantion_page'], response.page);
          })
          .catch((error) => {
            const mainError = JSON.parse(error);
            this.whenRequestError(mainError);
            this.setIfRequestError(true);
          });
      }
    },
    beforeRouteEnter (to, from, next) {
      const currentPaginationPage = session.get(config['session_key']['user_page_current_pagiantion_page']) === null ? 1 : parseInt(session.get(config['session_key']['user_page_current_pagiantion_page']), 10)
      const userUrl = config['server_root'] + '/users?page=' + currentPaginationPage;
      http.get(userUrl)
        .then((response) => {
          next(vm => {
            vm.setUsers(response.data);
            vm.setIfRequestError(false);
            vm.numberOfPages = response.totalPages;
            vm.currentPage = response.page;
          })
        })
        .catch((error) => {
          const mainError = error;
          next(vm => {
            const error = JSON.parse(mainError);
            vm.whenRequestError(error);
            vm.setIfRequestError(true);
          });
        });
    },
  }
</script>

<style>
  td [colspan="3"] {
    text-align: center;
  }
</style>
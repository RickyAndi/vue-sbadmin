<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          Vue Table
        </h1>
        <ol class="breadcrumb">
          <li class="active">
            <i class="fa fa-fw fa-linux"></i> Vue Table
          </li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <v-client-table :data="tableData" :columns="columns" :options="options">
          <template slot="actions" scope="props">
            <div>
              <button class="btn btn-success btn-sm" @click="teriak(props.row.id)">Edit</button>
            </div>
          </template>
        </v-client-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue-table',
    data() {
      return {
        columns: ['id','name','age', 'actions'],
        tableData: [
          {id:1, name:"John",age:"20"},
          {id:2, name:"Jane",age:"24"},
          {id:3, name:"Susan",age:"16"},
          {id:4, name:"Chris",age:"55"},
          {id:5, name:"Dan",age:"40"}
        ],
        options: {
          
        },
      };
    },
    methods: {
      teriak(id) {
        alert(id);
      }
    }
  }
</script>

<style>
  
</style>
<template>
  <div class="container-fluid" id="modal-page">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          Modal
        </h1>
        <ol class="breadcrumb">
          <li class="active">
            <i class="fa fa-fw fa-linux"></i> Modal
          </li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h2>Bootstrap Modal Example</h2>
        <button @click="showModal('smallModal')" class="btn btn-primary">open small modal</button>
        <button @click="showModal('mediumModal')" class="btn btn-primary">open medium Modal</button>
        <button @click="showModal('largeModal')" class="btn btn-primary">open large Modal</button>
      </div>
    </div>
    <modal :options="{id: 'small-modal', size: 'small'}" ref="smallModal">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>Im small modal</h2>
          </div>
        </div>
      </div>
    </modal>
    <modal :options="{id: 'medium-modal', size: 'medium'}" ref="mediumModal">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>Im medium modal</h2>
          </div>
        </div>
      </div>
    </modal>
    <modal :options="{id: 'large-modal', size: 'large'}" ref="largeModal">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>Im large modal</h2>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
  import Modal from '../Modal';

  export default {
    name: 'modal-page',
    components: {
      modal: Modal
    },
    methods: {
      showModal(modalName) {
        this.$refs[modalName].show();
      }
    }
  }
</script>

<style>
  #modal-page {
    min-height: 700px;
  }
</style>
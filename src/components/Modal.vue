<template>
  <div class="modal fade" tabindex="-1" role="dialog" :id="options.id">
    <div class="modal-dialog" role="document" :class="classObject">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        modalElement: null,
        defaults: {
          backdrop: true,
          keyboard: true
        },
      }
    },
    methods: {
      show() {
        this.modalElement.modal({
          backdrop: this.getFromOptionOrDefault('backdrop'),
          keyboard: this.getFromOptionOrDefault('keyboard')
        });
      },
      hide() {
        this.modalElement.modal('hide');
      },
      getFromOptionOrDefault(optionPath) {
        return this.options[optionPath] !== undefined ? this.options[optionPath] : this.defaults[optionPath];
      }
    },
    mounted() {
      this.modalElement = $('#' + this.options.id); 
    },
    computed: {
      classObject() {
        return {
          'modal-md': this.options.size === 'medium' || this.options.size === undefined,
          'modal-lg': this.options.size === 'large',
          'modal-sm': this.options.size === 'small'
        }
      }
    }
  }
</script>

<style>
  
</style>
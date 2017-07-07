<template>
  <li class="dropdown" :class="{'open': open}">
    <a @mousedown="toggleDropdown" class="dropdown-toggle"><i :class="icon"></i> <b class="caret"></b></a>
    <slot></slot>
  </li>
</template>
  
<script>
  export default {
    name: 'Dropdown',
    props: {
      icon: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        open: false
      };
    },
    methods: {
      toggleDropdown() {
        const openDropdown = !this.open;
        this.open = openDropdown;
      }
    }
  }
</script>

<style scoped>
  a { 
    cursor: pointer; 
    cursor: hand; 
  }
</style>
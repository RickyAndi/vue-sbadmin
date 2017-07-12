<template>
  <ul class="pagination">
    <li v-for="page in numberOfPages" v-bind:class="{ 'active' : currentPage == page }" v-if="!notDisplayPaginationButton(page)">
      <a @click="goToPage(page)">{{ page }}</a>
    </li>
  </ul>
</template>

<script>
  import OddNumber from '../object_values/OddNumber';
  import {getIncrementDecrement} from 'get-increment-decrement';
   
  export default {
    name: 'Pagination',
    props : {
      currentPage : {
        type : Number,
        required : true
      },
      numberOfPages : {
        type : Number,
        required : true
      },
      numberOfPaginationDisplayed : {
        type : OddNumber,
        required : true
      } 
    },
    methods : {
      goToPage(page) {
        this.$emit('page-change', {
          page : page 
        })
      },
      notDisplayPaginationButton(page) {
        return this.getPaginationNumberArray().find((displayedPageNumber) => {
          return page == displayedPageNumber;
        }) == undefined;
      },
      getPaginationNumberArray() {
        return getIncrementDecrement({
          startNumber : this.currentPage,
          lengthNeeded : this.numberOfPaginationDisplayed.getResultOfDivisionAfterSubstractionByOne(),
          minimumLimit : 1,
          maximumLimit : this.numberOfPages
        });
      }
    }
  }
</script>

<style scoped>
  li { 
    cursor: pointer !important; 
    cursor: hand !important; 
  }
</style>
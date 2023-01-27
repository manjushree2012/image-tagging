<template>  
    <main>
        Tags here
      {{ tags }}
    </main>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'TagsList',
    components: {
      
    },
    data() {
      return {
        tags: []
      }
    },
    methods: {
    
    }
  }
  </script> 
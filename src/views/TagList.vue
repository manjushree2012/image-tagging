<template>  
    <main>
      {{ tags }}
    </main>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'TagsList',
    components: {
      
    },
    created() {
      axios.get(`http://localhost/status`)
        .then(response => (
          this.keys = response.data[ Object.keys(response.data)[0] ]
          ))

    },
    data() {
      return {
        keys: null,
        tags: []
      }
    },
    computed: {
      tags() {
        let temp =  this.keys.split("tags")[1]
        temp = temp.replace(':', '')
        temp = temp.replace('}', '')
        temp = temp.replace('[', '')
        temp = temp.replace(']', '')
        temp = temp.slice(1)
        // return temp
        temp = temp.split(",")
        console.log(temp)
        return temp
      }

    },
    methods: {
    
    }
  }
  </script> 
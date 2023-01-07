<template>
    <header>
      <img alt="KU logo" class="logo" src="@/assets/ku_logo.png" width="125" height="125" />
      <img alt="ICT INOV Logo" src="@/assets/ict_inov_logo.png" width="300" />
    </header>
  
    <main>
      <UploadFile @newFile="onFileChange($event)"/>
    </main>
  </template>
  
  <script>
  import UploadFile from '@/components/UploadFile.vue'
  import axios from 'axios'
  
  export default {
    name: 'App',
    components: {
      UploadFile
    },
    methods: {
      onFileChange(file) {
        console.log('Inside here')
        console.log(file)
  
        this.fetchApi(file)
      },
      fetchApi(file)
      {
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => (this.info = response.data.bpi))
      }
    }
  }
  </script>
  
  
  
  <style scoped>
  header {
    line-height: 1.5;
  }
  
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
  
  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
  
    .logo {
      margin: 0 2rem 0 0;
    }
  
    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
  </style>
  
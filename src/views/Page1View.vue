<template>
    <section class="form">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input v-model="form.tag" class="input" type="text" placeholder = "Text here ...">
            </div>
        </div>
    </section>
  </template>

<script>
export default {
  name: 'Page1View',
  data() {
    return {
        form: {
            tag: ''
        }
    }
  },
  components: {   
  }
}
</script>


  
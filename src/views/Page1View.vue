<template>
    <section class="form">
        <div class="field">
            <label class="label">Enter tag here</label>
            <div class="control">
                <input v-model="form.tag" class="input" type="text" placeholder = "Tag here ...">
            </div>
        </div>

        <div class="field">
            <label class="label">Enter object key here</label>
            <div class="control">
                <input v-model="form.object_key" class="input" type="text" placeholder = "Object key here ...">
            </div>
        </div>

        <div class="field">
            <label class="label">Enter keywords here</label>
            <TagInput/>
        </div>
    </section>
  </template>

<script>
import TagInput from '@/components/TagInput.vue'

export default {
  name: 'Page1View',
  components: {
    TagInput
  },
  data() {
    return {
        form: {
            tag: '',
            object_key: ''
        }
    }
  },
}
</script>


  
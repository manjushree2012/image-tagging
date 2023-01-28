<template>
    <div class="body">
        <form method="POST" @submit="checkForm">
            <div class="form">

                <div class="title">KU Image Tagging Project</div>
                <div class="subtitle">ML Training Interface</div>

                <div class="input-container ic1">
                    <input v-model="form.dataset_key" id="dataset_key" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="dataset_key" class="placeholder">Dataset key here</label>
                </div>

                <div class="input-container ic2">
                    <input v-model="form.key" id="key" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="key" class="placeholder">Key here</label>
                </div>

                <div class="input-container ic2">
                    <input v-model="form.tag" id="tag" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="tag" class="placeholder">Tag here</label>
                </div>
    
                <div class="field is-grouped">
                <div class="control">
                    <button class="button submit">Submit</button>
                </div>
            </div>
            </div>
        </form>
    </div>
  </template>

<script>
import "@/assets/css/forms.css";
import axios from 'axios';

export default {
  name: 'Page2View',
  components: {
    
  },
  data() {
    return {
        form: {
            dataset_key: '',
            key: '',
            tag: ''
        }
    }
  },
  methods: {
    checkForm: function(e) {
        e.preventDefault()

        axios
        .post('http://localhost/autotag/ml/train/binary', this.form)
        .then(response => (this.files = response.data))
    }
}
}
</script>


  
<template>
    <div class="body">
        <form method="POST" @submit="checkForm">
            <div class="form">

                <div class="title">KU Image Tagging Project</div>
                <div class="subtitle">ML Training Interface</div>

                <div class="input-container ic1">
                    <input v-model="form.object_key" id="object_key" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="object_key" class="placeholder">Object key here</label>
                </div>

                <!-- <div class="field">
                    <label class="label">Enter object key here</label>
                    <div class="control">
                        <input v-model="form.object_key" class="input" type="text" placeholder = "Object key here ...">
                    </div>
                </div> -->

                <div class="input-container ic2">
                    <input v-model="form.source_key" id="source_key" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="source_key" class="placeholder">Source key here</label>
                </div>
    
                <!-- <div class="field">
                    <label class="label">Enter source key here</label>
                    <div class="control">
                        <input v-model="form.source_key" class="input" type="text" placeholder = "Source key here ...">
                    </div>
                </div> -->

                <div class="input-container ic2">
                    <input v-model="form.tag" id="tag" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="tag" class="placeholder">Tag here</label>
                </div>
    
                <!-- <div class="field">
                    <label class="label">Enter tag here</label>
                    <div class="control">
                        <input v-model="form.tag" class="input" type="text" placeholder = "Tag here ...">
                    </div>
                </div> -->
    
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
            object_key: '',
            source_key: '',
            tag: ''
        }
    }
  },
  methods: {
    checkForm: function(e) {
        e.preventDefault()

        axios
        .post('http://localhost:8001/autotag/ml/train/binary', this.form)
        .then(response => (this.files = response.data))
    }
}
}
</script>


  
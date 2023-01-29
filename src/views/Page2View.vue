<template>
    <div class="body">
        <form method="POST" @submit="checkForm">
            <div class="form">

                <div class="title">KU Image Tagging Project</div>
                <div class="subtitle">ML Training Interface</div>

                <div class="input-container ic2">
                    <input v-model="form.tag" id="tag" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="tag" class="placeholder">Tag here</label>
                </div>

                <div class="input-container ic1">
                    <input v-model="dataset_key" id="dataset_key" class="input" type="text" placeholder=" " readonly />
                    <div class="cut"></div>
                    <label for="dataset_key" class="placeholder">Dataset key here</label>
                </div>

                <div class="input-container ic2">
                    <input v-model="key" id="key" class="input" type="text" placeholder=" " readonly/>
                    <div class="cut"></div>
                    <label for="key" class="placeholder">Key here</label>
                </div> 
                
                <div class="input-container ic2">
                    <input v-model="form.group" id="group" class="input" type="text" placeholder=" "/>
                    <div class="cut"></div>
                    <label for="group" class="placeholder">Group</label>
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
            tag: '',
            group: ''
            // dataset_key: '',
            // key: '',
        }
    }
  },
  computed: {
    key() {
        const suffix = '_model.zip'
        return this.form.tag ? this.form.tag + suffix : null
    },
    dataset_key() {
        const suffix = '_dataset.zip'
        return this.form.tag ? this.form.tag + suffix : null
    }
  },
  methods: {
    checkForm: function(e) {
        e.preventDefault()

        const data = {
            tag : this.form.tag,
            dataset_key : this.dataset_key,
            key : this.key
        }

        const registerData = {
            template : "keras/MultiClassSingleTagKerasStandardModelTemplateA.py",
            group : this.form.group,
            model_key : this.key
        }

        axios
        .post('/autotag/ml/train/binary', data)
        .then(
            axios.post('/autotag/model/register', registerData)
        )
    }
}
}
</script>


  
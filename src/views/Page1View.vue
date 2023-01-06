<template>
  <div class="body">
    <Loader v-if="loading" />
    <form v-else method="POST" @submit="checkForm">
        <div class="form">

            <div class="title">KU Image Tagging Project</div>
            <div class="subtitle">Data Collection Interface</div>

            <div class="input-container ic1">
                <input v-model="form.tag" id="firstname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="firstname" class="placeholder">Tag</label>
            </div>

            <!-- <div class="field">
                <label class="label">Enter tag here</label>
                <div class="control">
                    <input v-model="form.tag" class="input" type="text" placeholder = "Tag here ...">
                </div>
            </div> -->

            <div class="input-container ic2">
                <input v-model="form.target_key" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="lastname" class="placeholder">Object Key</label>
            </div>

            <!-- <div class="field">
                <label class="label">Enter object key here</label>
                <div class="control">
                    <input v-model="form.target_key" class="input" type="text" placeholder = "Object key here ...">
                </div>
            </div> -->

            <div class="field">
                <label class="label">Enter keywords here</label>
                <TagInput v-model="form.keywords"/>
            </div>

            <div class="field">
                <label class="label">Enter counter keywords here</label>
                <TagInput v-model="form.counters"/>
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
import axios from 'axios';
import TagInput from '@/components/TagInput.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'Page1View',
  components: {
    TagInput, Loader
  },
  data() {
    return {
      loading: false,
        form: {
            tag: '',
            keywords: [],
            counters: [],
            target_key: '',
        }
    }
  },
  methods: {
    checkForm: function(e) {
        e.preventDefault()

        const data = {
            tag: 'stair',
            keywords: ["wooden stairs", "outdoor stairs", "indoor stairs"],
            counters: ["door", "kettle", "chair", "television"],
            target_key: "stair_dataset1.zip",
        }

        this.loading = true

        axios
        .post('http://localhost:8000/autotag/img/fetch', data)
        .then(response => (
          this.loading = false
        ))
    }
}
}
</script>

<style scoped>
.body {
  /* align-items: center; */
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 100vh;
}

.form {
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 650px;
  padding: 20px;
  width: 320px;
}

.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 40px;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: #15172b;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.cut-short {
  width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  text-align: center;
  width: 100%;
}

.submit:active {
  background-color: #06b;
}


</style>
  
import { createRouter, createWebHistory } from 'vue-router'
import Page1View from '../views/Page1View.vue'
import Page2View from '../views/Page2View.vue'
import Page3View from '../views/Page3View.vue'
import FileManagerView from '../views/FileManager.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/page1',
    name: 'page1',
    component: Page1View
  },
  {
    path: '/filemanager',
    name: 'FileManager',
    component: FileManagerView
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2View
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page1View from '../views/Page1View.vue'
import Page2View from '../views/Page2View.vue'
import FileManagerView from '../views/FileManager.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

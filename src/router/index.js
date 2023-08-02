import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutCompany from '@/pages/AboutCompany.vue'
import Contact from '@/pages/Contact.vue'
import Doctors from '@/pages/Doctors.vue'
import News from '@/pages/News.vue'
import Services from '@/pages/Services.vue'

const router = createRouter ({
  history: createWebHistory(),
  routes:[
      {
          path: '/vet_clinic',
          name: 'HomeView',
          component: HomeView
      },

      {
          path: '/Contact',
          name: 'Contact',
          component: Contact
      },
      {
          path: '/Doctors',
          name: 'Doctors',
          component: Doctors
      },
      {
          path: '/News',
          name: 'News',
          component: News
      },
      {
          path: '/Services',
          name: 'Services',
          component: Services
      },
      {
          path: '/AboutCompany',
          name: 'AboutCompany',
          component: AboutCompany
      },
  ],
});

export default router

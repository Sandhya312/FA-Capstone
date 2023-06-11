import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
// import LoginRegisterView from '../views/LoginRegisterView.vue';
import RegisterView from '../views/RegisterView.vue';
import PostJobView from '../views/PostJobView.vue';
import userView from '../views/userView.vue';
import jobsView from '../views/jobsView.vue';
import appliedJobsView from '../views/appliedJobsView.vue';
import MyJobsView from '../views/MyJobsView.vue';
// import EmailVerifyView from '../views/EmailVerifyView.vue';
import AppliedUserView from '../views/AppliedUserView.vue';
import AllJobsCom from '@/components/AllJobsCom.vue';
import EditProfileView from '@/views/EditProfileView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: AllJobsCom
  },
  {
    path: '/postjob',
    name: 'postjob',
    component: PostJobView
  },
  {
    path: '/jobs/:id/appliedUsers',
    name: 'appliedUser',
    component: AppliedUserView
  },
  {
    path: '/jobs/:id',
    name: 'job',
    component: jobsView
  },
  {
    path: '/user/:id',
    name: 'user',
    component: userView
  },

  {
    path: '/user/:id/applied',
    name: 'appliedJobs',
    component: appliedJobsView
  },
  {
    path: '/user/:id/edit',
    name: 'edit',
    component: EditProfileView
  },
  {
    path: '/user/:id/myjobs',
    name: 'myJobs',
    component: MyJobsView
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

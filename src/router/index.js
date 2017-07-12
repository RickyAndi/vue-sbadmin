import Vue from 'vue';
import Router from 'vue-router';

import Table from '@/components/pages/Table';
import Dashboard from '@/components/pages/Dashboard';
import StepForm from '@/components/pages/StepForm';

import asycnChartPage from '@/components/pages/AsyncChart';
import asyncFormPage from '@/components/pages/AsyncForm';
import asyncUserPage from '@/components/pages/AsyncUser';

import UserDataPage from '@/components/pages/UserData';
import UserDataMarksPage from '@/components/pages/UserData-Marks';
import UserDataFoodPage from '@/components/pages/UserData-Food';

import StepFormStepOne from '@/components/pages/StepForm-StepOne';
import StepFormStepTwo from '@/components/pages/StepForm-StepTwo';
import StepFormStepThree from '@/components/pages/StepForm-StepThree';
import StepFormSummary from '@/components/pages/StepForm-Summary';

import ModalPage from '@/components/pages/Modal';
import VueTablePage from '@/components/pages/VueTable';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
    	path: '/table',
    	name: 'Table',
    	component: Table
    },
    {
      path: '/',
      name: 'Home',
      redirect: '/dashboard'
    },
    {
      path: '/chart',
      name: 'Chart',
      component: asycnChartPage
    },
    {
      path: '/form',
      name: 'Form',
      component: asyncFormPage
    },
    {
      path: '/user',
      name: 'User',
      component: asyncUserPage
    },
    {
      path: '/user/data/:userId',
      name: 'UserData',
      component: UserDataPage,
      children: [
        {
          path: 'marks',
          name: 'UserData-Marks',
          component: UserDataMarksPage
        },
        {
          path: 'foods',
          name: 'UserData-Food',
          component: UserDataFoodPage
        },
        {
          path: '',
          redirect: {
            name: 'UserData-Marks'
          }
        }
      ]
    },
    {
      path: '/step-form',
      name: 'StepForm',
      component: StepForm,
      children: [
        {
          path: '',
          redirect: {
            name: 'step-form-step-one'
          }
        },
        {
          path: 'step-one',
          name: 'step-form-step-one',
          component: StepFormStepOne
        },
        {
          path: 'step-two',
          name: 'step-form-step-two',
          component: StepFormStepTwo
        },
        {
          path: 'step-three',
          name: 'step-form-step-three',
          component: StepFormStepThree
        },
        {
          path: 'summary',
          name: 'step-form-summary',
          component: StepFormSummary
        }
      ]
    },
    {
      path: '/modal',
      name: 'Modal',
      component: ModalPage
    },
    {
      path: '/vue-table',
      name: 'VueTable',
      component: VueTablePage
    }
  ]
})

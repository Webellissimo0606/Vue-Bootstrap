import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import ReportView from './components/views/Report.vue'
import CdrView from './components/views/Cdr.vue'
import SubscribersView from './components/views/Subscribers.vue'
import SubscriberPaymentView from './components/views/Subscriber_payment.vue'
import PaymentHistoryView from './components/views/Payment_history.vue'
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'report',
        alias: '',
        component: ReportView,
        name: 'Report',
        meta: {description: ''}
      }, {
        path: 'cdr',
        alias: '',
        component: CdrView,
        name: 'CDR',
        meta: {description: ''}
      }, {
        path: 'subscribers',
        alias: '',
        component: SubscribersView,
        name: 'Subscribers',
        meta: {description: ''}
      }, {
        path: 'subscriber_payment',
        alias: '',
        component: SubscriberPaymentView,
        name: 'Subscriber Payment',
        meta: {description: ''}
      }, {
        path: 'payment_history',
        alias: '',
        component: PaymentHistoryView,
        name: 'Payment History',
        meta: {description: ''}
      }, {
        path: 'tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers'}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes

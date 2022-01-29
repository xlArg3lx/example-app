const Home = () => import('./components/Home.vue')
const Task = () => import('./components/Task.vue')
const EditTask = () => import('./components/EditTask.vue')
const Login = () => import('./components/Login.vue')


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    }, 

    {
        name: 'task',
        path: '/task',
        component: Task
    }, 

    {
        name: 'editTask',
        path: '/edit_task/:id',
        component: EditTask
    },
    {
        path: '/login',
        component: Login
    },
]
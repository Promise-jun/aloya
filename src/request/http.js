/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import Vue from 'vue'
import axios from 'axios';
import router from '../router';
import ElementUI from 'element-ui';

/** 
* 提示函数 
* 禁止点击蒙层、显示一秒后关闭
*/
const tip = msg => {
    ElementUI.Message.error(msg);
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    let isOa = router.currentRoute.fullPath.indexOf('backstage') > -1;
    router.replace({
        path: '/login',
        query: {
            type: isOa ? 'interior' : '',
            redirect: router.currentRoute.fullPath
        }
    });
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 9000002: 失效
        case 9000002:
            tip('登录失效');
            toLogin();
            break;
        // 4100001 无帐号
        case 4100001:
            tip('账户不存在');
            toLogin();
            // localStorage.removeItem('token');
            // store.commit('loginSuccess', null);
            // setTimeout(() => {
            //     toLogin();
            // }, 1000);
            break;
        // 9000004 踢下线
        case 9000004:
            tip('您的账户已在其他设备登录，如非本人操作，请联系我们');
            toLogin();
            break;
        default:
            tip(other);
    }
}


// 创建axios实例
var instance = axios.create({ timeout: 1000 * 10 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.defaults.baseURL = '/api';
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。   
        let adminUser = Vue.prototype.$cookies.get('admin_userInfo');
        if (config.method === 'post') {
            let data = config.data
            config.data = {
                AccountId: "",
                Token: "",
                AdminUserId: adminUser && adminUser.userId ? adminUser.userId : "",
                AdminToken: adminUser && adminUser.token ? adminUser.token : "",
                Version: "V1.0.0",
                Source: "PC",
                Ip: "",
                ...data
            }
        } else if (config.method === 'get') {
            config.params = {
                AccountId: "",
                Token: "",
                AdminUserId: adminUser && adminUser.userId ? adminUser.userId : "",
                AdminToken: adminUser && adminUser.token ? adminUser.token : "",
                Version: "V1.0.0",
                Source: "PC",
                Ip: "",
                ...config.params
            }
        }
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);
        return config;
    },
    error => Promise.error(error)
)
// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    res => {
        if (res.status === 200) {
            if (res.data.Code !== 0) {
                errorHandle(res.data.Code, res.data.ErrorMessage);
            }
            return Promise.resolve(res.data)
        } else {
            return Promise.reject(res.data)
        }
    },
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明

            // store.commit('changeNetwork', false);
            console.log(error)
        }
    }
);

export default instance;
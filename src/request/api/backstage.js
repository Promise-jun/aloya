// import base from './base'; // 导入接口域名列表
import axios from '@/request/http'; // 导入http中创建的axios实例

const D_URL = "/gateway/"; //默认接口地址

const backstage = {
    // 管理员登录
    adminLoginApi(params) {
        return axios.post(D_URL, {
            Name: "OA.User.Login",
            Content: JSON.stringify(params)
        })
    },
    // 管理员(用户)退出
    userLogoutApi(params) {
        return axios.post(D_URL, {
            Name: "User.Login.LoginOut",
            Content: JSON.stringify(params)
        })
    },
    // 获取会员列表    
    userListApi(params) {
        return axios.post(D_URL, {
            Name: "OA.User.GetList",
            Content: JSON.stringify(params)
        });
    },
    // 创建会员信息
    addUserApi() {
        return axios.post(D_URL, {
            Name: "OA.User.Create",
            Content: ""
        })
    },
    // 重置会员密码
    userResetPassApi(params) {
        return axios.post(D_URL, {
            Name: "OA.User.SetPassWord",
            Content: JSON.stringify(params)
        });
    },
    // 删除会员信息
    delUserApi(params) {
        return axios.post(D_URL, {
            Name: "OA.User.Delete",
            Content: JSON.stringify(params)
        })
    }
    // 其他接口…………
}

export default backstage;
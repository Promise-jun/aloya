import base from './base'; // 导入接口域名列表
import axios from '@/request/http'; // 导入http中创建的axios实例

const backstage = {    
    // 获取用户列表    
    userListApi (params) {        
        return axios.post(`/gateway/`, {
            Name: "OA.User.GetList",
            Content: JSON.stringify(params)
        });
    }
    // 其他接口…………
}

export default backstage;
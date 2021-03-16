import base from './base'; // 导入接口域名列表
import axios from '@/request/http'; // 导入http中创建的axios实例

const backstage = {    
    // post提交    
    userListApi (params) {        
        return axios.post(`/gateway/`, {
            Name: base.userList,
            Content: JSON.stringify(params)
        });    
    }
    // 其他接口…………
}

export default backstage;
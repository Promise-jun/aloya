/** 
 * api接口的统一出口
 */
// loading
import load from '@/request/api/loading';
// 后台管理页面接口
import backstage from '@/request/api/backstage';

// 导出接口
export default {   
    load, 
    backstage,
}

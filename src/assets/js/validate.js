// 设置cookie
export function setUserCookie(that, name, data, time) {
    if (process.env.NODE_ENV == 'development') { //开发环境
        that.$cookies.set(name, data, time);
    } else {
        that.$cookies.set(name, data, time, null, "aloya.cn");
    }
}
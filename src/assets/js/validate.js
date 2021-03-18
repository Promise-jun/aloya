// 设置cookie
export function setUserCookie(that, name, data, time) {
    if (process.env.NODE_ENV == 'development') { //开发环境
        that.$cookies.set(name, data, time);
    } else {
        that.$cookies.set(name, data, time, null, "aloya.cn");
    }
}

// 删除cookie
export function removeUserCookie(that, name) {
    if (process.env.NODE_ENV == 'development') { //开发环境
        that.$cookies.remove(name);
    } else {
        that.$cookies.remove(name, null, "aloya.cn");
    }
}
<template>
  <div>
      <div class="top-box">
          <div class="box container fix">
              <div class="logo l">
                  <img src="../assets/images/logo.jpg" alt="">
                  <span>Aloya</span>
              </div>
              <div class="user-box r">
                  <!-- <a href="javascript:;" class="login-btn">会员登录</a> -->
                  <div class="user-info">
                      <p class="user-name">admin</p>
                      <p class="operate">
                          <a href="javascript:;">管理中心</a>
                          <a href="javascript:;">退出</a>
                      </p>
                  </div>
              </div>
              <div class="conter">
                  <div class="search">
                      <input type="text" placeholder="请输入关键词">
                      <a href="javascript:;" class="search-btn">搜索</a>
                  </div>
                  <div class="hot-box">
                      热门搜索：
                      <a href="javascript:;">拼图</a>
                      <a href="javascript:;">玩教</a>
                  </div>
              </div>
          </div>
      </div>
      <div class="nav-box">
          <div class="container">
              <ul>
                  <li><a href="javascript:;">首页</a></li>
                  <li><a href="javascript:;">产品列表</a></li>
                  <li><a href="javascript:;">品牌介绍</a></li>
              </ul>
          </div>
      </div>
      <router-view />
  </div>
</template>

<script>
export default {
    name: "main"
}
</script>

<style scoped>
/* 头部 */
.top-box {
    min-width: 1200px;
    background-color: #ffffff;
}
.top-box .box {
    padding: 0 20px;
    height: 120px;
}
.top-box .logo {
    padding-top: 10px;
}
.top-box .logo img {
    width: 100px;
    display: block;
    float: left;
}
.top-box .logo span {
    display: inline-block;
    padding-top: 50px;
    font-size: 32px;
}

.top-box .user-box {
    padding-top: 30px;
}
.top-box .login-btn {
    display: block;
    width: 98px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border: 1px solid #D1394C;
    border-radius: 4px;
    font-size: 16px;
    color: #D1394C;
}
.top-box .user-name {
    padding-bottom: 5px;
    font-size: 16px;
    text-align: right;
}
.top-box .operate a {
    margin-left: 10px;
    font-size: 12px;
    color: #666;
}
.top-box .operate a:hover {
    color: #D1394C;
}

.top-box .conter {
    margin: 0 300px;
    padding-top: 30px;
}
.top-box .search {
    font-size: 0;
}
.top-box .search input {
    display: inline-block;
    vertical-align: middle;
    outline: none;
    padding: 0 15px;
    width: 268px;
    height: 36px;
    border: 1px solid #D1394C;
}
.top-box .search-btn {
    display: inline-block;
    vertical-align: middle;
    width: 80px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background-color: #D1394C;
    font-size: 14px;
    color: #ffffff;
}
.top-box .hot-box {
    padding-top: 10px;
    font-size: 12px;
}
.top-box .hot-box a {
    margin-right: 10px;
    color: #000000;
}
.top-box .hot-box a:hover {
    color: #D1394C;
}

/* 导航 */
.nav-box {
    min-width: 1200px;
    height: 40px;
    background-color: #D1394C;
}
.nav-box ul {
    overflow: hidden;
}
.nav-box li {
    float: left;
}
.nav-box li a {
    display: block;
    margin: 0 30px;
    font-size: 16px;
    color: #f0f0f0;
    line-height: 40px;
}
.nav-box li a:hover {
    color: #ffffff;
}
</style>
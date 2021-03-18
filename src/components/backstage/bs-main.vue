<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu
          :default-active="$route.path"
          class=""
          @open="handleOpen"
          @close="handleClose"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#1890ff"
          :router="true"
        >
          <el-menu-item index="/backstage/member">
            <i class="el-icon-user-solid"></i>
            <span slot="title">会员管理</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span>广告管理</span>
            </template>
            <el-menu-item index="/backstage/ad">广告列表</el-menu-item>
            <el-menu-item index="/backstage/adAdd">添加广告</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>产品管理</span>
            </template>
            <el-menu-item index="/backstage/product">产品列表</el-menu-item>
            <el-menu-item index="/backstage/productAdd">添加产品</el-menu-item>
            <el-menu-item index="/backstage/productCategory">产品类别</el-menu-item>
          </el-submenu>
          <el-menu-item index="/backstage/brandInfo">
            <i class="el-icon-s-home"></i>
            <span slot="title">品牌介绍</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container class="main-box">
        <el-header>
          <h1 class="l">Aloya后台管理系统</h1>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{userInfo.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="index">网站首页</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "bsMain",
  data() {
    return {
      userInfo: {}
    };
  },
  created() {
    this.userInfo = this.$cookies.get('admin_userInfo');
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      if (command == "index") {
        this.$router.push('/');
      } else if (command == "logout") {
        
      }
    }
  },
};
</script>

<style scoped>
.el-aside {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  width: 200px !important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.el-header {
  height: 50px !important;
  overflow: hidden;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.el-main {
  padding: 32px;
}

.main-box {
  min-height: 100%;
  -webkit-transition: margin-left 0.28s;
  transition: margin-left 0.28s;
  margin-left: 200px;
  position: relative;
}

.el-dropdown {
  float: right;
  margin-top: 15px;
}
.el-dropdown-link {
  cursor: pointer;
  font-size: 16px;
  color: #000000;
}

h1 {
  padding-top: 15px;
  font-size: 18px;
  font-weight: 600;
}
</style>

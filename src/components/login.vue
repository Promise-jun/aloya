<template>
  <div class="container">
    <h1>欢迎登录 Aloya</h1>

    <el-row class="login-box">
      <el-col :span="8" :offset="8" class="bg-white box">
        <p class="title">
          {{
            $route.query.type && $route.query.type == "interior"
              ? "管理员登录"
              : "用户登录"
          }}
        </p>
        <p class="mt25">
          <el-input v-model="username" placeholder="用户名"></el-input>
        </p>
        <p class="mt25">
          <el-input
            v-model="password"
            type="password"
            placeholder="密码"
          ></el-input>
        </p>
        <a href="javascript:;" class="btn" @click="submitLoginInfo">登 录</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { setUserCookie } from "@/assets//js/validate.js";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitLoginInfo() {
      if (!this.username) {
        this.$message.error("用户名不能为空");
        return;
      }
      if (!this.password) {
        this.$message.error("密码不能为空");
        return;
      }
      if (this.$route.query.type && this.$route.query.type == "interior") {
        // 管理员登录
        this.adminLogin();
      } else {
        // 用户登录
      }
    },
    adminLogin() {
      this.$api.load.show();
      this.$api.backstage
        .adminLoginApi({
          UserName: this.username,
          PassWord: this.password,
        })
        .then((res) => {
          this.$api.load.hide();
          if (res.Code == 0) {
            // 登录成功
            let adminUser = {
              userId: res.Data.AccountId,
              token: res.Data.Token,
              userName: res.Data.ShowName,
            };
            // 保存登录态
            setUserCookie(this, "admin_userInfo", adminUser, "30D");
            this.$message({
              message: "登录成功",
              type: "success",
            });
            // 页面回跳
            if (this.$route.query && this.$route.query.redirect) {
              this.$router.replace(this.$route.query.redirect);
            }
          }
        });
    },
  },
};
</script>

<style scoped>
h1 {
  padding: 40px 0 30px;
  font-size: 24px;
  font-weight: normal;
}
.login-box .box {
  padding: 60px 40px;
  box-shadow: 0px 5px 10px 5px #eee;
}
.login-box .title {
  font-size: 18px;
  color: #313131;
}
.login-box .btn {
  display: block;
  margin-top: 30px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #d1394c;
  font-size: 18px;
  color: #ffffff;
}
</style>
<template>
  <div class="container">
    <h1>欢迎登录 Aloya</h1>

    <el-row class="login-box">
      <el-col :span="8" :offset="8" class="bg-white box">
        <p class="title">用户登录</p>
        <p class="mt25"><el-input v-model="username" placeholder="用户名"></el-input></p>
        <p class="mt25"><el-input v-model="password" type="password" placeholder="密码"></el-input></p>
        <a href="javascript:;" class="btn">登 录</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
      return {
          username: "",
          password: ""
      }
  }
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